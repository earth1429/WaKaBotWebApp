<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, orderBy, onSnapshot, Timestamp } from "firebase/firestore"; 
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
// const handleSignOut = () => {
//     console.log(auth.currentUser)
//     signOut(auth).then(() => {
//         router.push("/home");
//     });
// };

// const testGetting = async () => {
//     const querySnapshot = await getDocs(collection(db, `users/${auth.currentUser.uid}/images`));
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().des}`);
//     });
// }

// const testAdding = async () => {
//     if(isLoggedIn.value){
//         try {
//             const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/images`), {
//                 des:"Hello",
//                 path:`Image/Human/${Math.floor(Math.random()*5+1)}.jpg`,
//                 time:Timestamp.fromDate(new Date()),
//             });
//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     }
// };


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

// const testImgURL=async ()=>{
//     const storage = getStorage();
//     await getDownloadURL(storageRef(storage, 'Image/Human/humanity.jpg')).then((url) => {
//         console.log(url)
//     })
// }
// window.addEventListener('beforeunload', function(event) {
//     event.returnValue = auth=getAuth()
// })
</script>
<script>
export default {
    data: function() {
        return {
            db : getFirestore(),
            auth : getAuth(),
            arr: [],
            currentUrl: "",
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
        setUrl: function(value){
            this.currentUrl=value;
        }
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
                }
                if (change.type === "modified") {                    
                    const index=this.arr.indexOf(this.arr.find(function checkAge(value){ 
                        return value.id===change.doc.id
                    }));
                    this.arr[index].path = change.doc.data().path
                    this.arr[index].time = change.doc.data().time

                    this.arr.sort(function(a, b){return a.time - b.time});
                }
                if (change.type === "removed") {
                    const index=this.arr.indexOf(this.arr.find(function checkAge(value){ 
                        return value.id===change.doc.id
                    }));
                    this.arr.splice(index, 1);
                }
            });
        });
    },
    
}
</script>
<template>
<table id="customers">
  <tr>
    <th>Image</th>
    <th>Capture Time</th>
  </tr>
  <tr v-for="value of this.arr" :key="value.id">
    <td><img :id="value.id" :src=getImgURL(value.id,value.path) width="150" height="150" class="zoom"></td>
    <td>{{timeformat(value.time.toDate())}}</td>
  </tr> 
</table>
<!-- <div class="overflow-auto">
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