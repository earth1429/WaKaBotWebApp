<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, orderBy, onSnapshot, Timestamp, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { getStorage, ref as storageRef, getDownloadURL} from "firebase/storage";

const isLoggedIn = ref(false);
const email = ref("");
const auth = getAuth();
// const db = getFirestore();

onMounted(() => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            isLoggedIn.value = true;
            email.value = auth.currentUser.email

        } else {
            isLoggedIn.value = false;
            email.value = ""
        }
    });
});

const timeformat=(value)=>{
    // console.log(value)
    const time = new Date(value);
    const yyyy = time.getFullYear();
    let mm = time.getMonth() + 1; // Months start at 0!
    let dd = time.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    const formattedTime=dd+'/'+mm+'/'+yyyy+" "+h+":"+m+":"+s;

    return formattedTime;
    // return moment(String(value)).format('MM/DD/YYYY hh:mm')
}

const getImgURL=async (id, path)=>{
    const storage = getStorage();
    await getDownloadURL(storageRef(storage,path)).then((url) => {
        const img = document.getElementById(id);
        img.setAttribute('src', url);
    })
}
</script>
<script>
export default {
    data: function() {
        return {
            db : getFirestore(),
            auth : getAuth(),
            arr: [],
            arrShown: [],
            currentUrl: "",
            filter: false,
            // perPage: 3,
            // currentPage: 1,
            // sumitems: [
            //     {image: value.id, time: }
            // ]
        };
    },
    // computed: {
    //   rows() {
    //     console.log('rows res is', this.result)
    //     return this.result
    //   },
    //   items(){
    //     const result = this.arr.map((value)=>{
    //         return {
    //             image: value.id,
    //             time: this.timeformat(value.time.toDate()),
    //             // image: this.getImgURL(value.id,value.path),
    //             // time: this.timeformat(value.time.toDate())
    //         };

    //     });
    //     console.log('res is',result)
    //     return result;
    //   }
    // },
    created() {
        const arr=(window.location.href).split('/');
        this.currentUrl=arr[arr.length-1];
    },
    methods : {
        getFilteringName: function(){
            if(this.filter){
                return "Filtered"
            }else{
                return "Not Filtered"
            }
        },
        getCaseType: function(value){
            if(value){
                return "Selected"
            }else{
                return "Unselected"
            }
        },
        setUrl: function(value){
            this.currentUrl=value;
        },
        filterComputing: function(){
            if(this.filter){

                let tempArr=[]
                for (let i=0; i<this.arrShown.length; i++) {
                    if(this.arrShown[i].case){
                        tempArr.push(this.arrShown[i])
                    }
                }
                this.arrShown = tempArr

            }else{
                let tempArr=[]
                for (let i=0; i<this.arr.length; i++) {
                    tempArr.push(this.arr[i])
                }
                this.arrShown = tempArr
            }
        },
        filtering: function(){
            this.filter=!this.filter
            this.filterComputing()
        },
        updating: async function(valueId,value){
                console.log(valueId)
                try {
                    const docRef = doc(this.db,`users/${this.auth.currentUser.uid}/images/${valueId}`);
                    await updateDoc(docRef, {
                        case: !value
                    });
                    console.log("Document updated with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error updating document: ", e);
                }
        },
        deleting: async function(valueId){
            console.log(valueId)
            try {
                await deleteDoc(doc(this.db, `users/${this.auth.currentUser.uid}/images/${valueId}`));
                console.log("Delete with ID: ", valueId);
            } catch (e) {
                console.error("Error deleting document: ", e);
            }
        },
        updateConfirmation: function(valueId,value){
            if(this.filter){
                if (confirm("Do you really want to unselect this?")) {
                    this.updating(valueId,value)
                    console.log("You pressed OK!")
                } else {
                    console.log("You pressed Cancel!")
                }
            }else{
                this.updating(valueId,value)
            }
        },
        deleteConfirmation: function(valueId) {
            if (confirm("Do you really want to delete this?")) {
                this.deleting(valueId)
                console.log("You pressed OK!")
            } else {
                console.log("You pressed Cancel!")
            }
        },
        // checkboxValue: function(valueId){
        //     if (document.getElementById(`${valueId}checkbox`).checked) {
        //         return true
        //     } else {
        //         return false
        //     }
        // },
        // getCheckboxId: function(valueId){
        //     return `${valueId}checkbox`
        // }
    },
    mounted() {
        // const querySnapshot = await getDocs(collection(this.db, `users/${this.auth.currentUser.uid}/images`));
        // querySnapshot.forEach((doc) => {
        //     this.arr.push(...doc.data(),id:change.doc.id);
        // });
        
        const today = new Date();
        const yesterday=today.setDate(today.getDate()-1);
        const q = query(collection(this.db, `users/${this.auth.currentUser.uid}/images`), where("time", ">=", Timestamp.fromDate(new Date(yesterday))), orderBy("time", "asc"));
        // const unsubscribe = 
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    this.arr.push({
                        ...change.doc.data(),
                        id: change.doc.id,
                    })

                    if(!this.filter){
                        this.arrShown.push({
                            ...change.doc.data(),
                            id: change.doc.id,
                        })
                    }
                }
                if (change.type === "modified") {                
                    const index=this.arr.indexOf(this.arr.find((value)=>{ 
                        return value.id===change.doc.id
                    }));
                    this.arr[index].path = change.doc.data().path
                    this.arr[index].time = change.doc.data().time
                    this.arr[index].case = change.doc.data().case

                    this.arr.sort((a, b)=>{return a.time - b.time});

                    const index2=this.arrShown.indexOf(this.arrShown.find((value)=>{ 
                        return value.id===change.doc.id
                    }));
                    if(index2>-1){
                        this.arrShown[index2].path = change.doc.data().path
                        this.arrShown[index2].time = change.doc.data().time
                        this.arrShown[index2].case = change.doc.data().case

                        this.arrShown.sort((a, b)=>{return a.time - b.time});
                    }

                    if(this.filter){
                        this.filterComputing()
                    }
                }
                if (change.type === "removed") {
                    const index=this.arr.indexOf(this.arr.find((value)=>{ 
                        return value.id===change.doc.id
                    }));
                    this.arr.splice(index, 1);

                    const index2=this.arrShown.indexOf(this.arrShown.find((value)=>{ 
                        return value.id===change.doc.id
                    }));
                    if(index2>-1){
                        this.arrShown.splice(index2, 1);
                    }
                }
            });
        });
    },
    
}
</script>
<template>
<button @click="filtering()">{{this.getFilteringName()}}</button>
<table id="customers">
  <tr>
    <th>Image</th>
    <th>Capture Time</th>
    <th>Case of Interests</th>
    <th>Deletion</th>
  </tr>
  <tr v-for="value of this.arrShown" :key="value.id">
    <td><img :id="value.id" :src=getImgURL(value.id,value.path) width="150" height="150" class="zoom"></td>
    <td>{{timeformat(value.time.toDate())}}</td>
    <td>
        <button @click="updateConfirmation(value.id,value.case)" v-bind:style="value.case? 'background-color:#90EE90':'background-color:#FFCCCB'">{{getCaseType(value.case)}}</button>
        <!-- <input @click="updating(value.id,value.case)" type="checkbox" :id="getCheckboxId(value.id)" :name="getCheckboxId(value.id)" value="selection"><label :for="getCheckboxId(value.id)"> Marked</label><br> -->
    </td>
    <td><button @click="deleteConfirmation(value.id)">DELETE</button></td>
  </tr> 
</table>
<!-- <div class="overflow-auto"> background-color:#0a0a23
    <b-pagination 
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div> -->
</template>
<style>
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000000;
  color: white;
}
@import "../../assets/scss/app.scss";
</style>