<script setup>
import ManualDetailsCompVue from "../Comps/ManualDetailsComp.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";
import { getFirestore, collection, addDoc, getDocs, query, where, onSnapshot, Timestamp } from "firebase/firestore"; 
import { getStorage, ref as storageRef, getDownloadURL} from "firebase/storage";

const isLoggedIn = ref(false);
const email = ref("");
const auth = getAuth();
const db = getFirestore();

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
const handleSignOut = () => {
    console.log(auth.currentUser)
    signOut(auth).then(() => {
        router.push("/home");
    });
};

const testGetting = async () => {
    const querySnapshot = await getDocs(collection(db, `users/${auth.currentUser.uid}/images`));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().des}`);
    });
}

const testAdding = async () => {
    if(isLoggedIn.value){
        try {
            const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/images`), {
                des:"Hello",
                path:"Image/Human/humanity.jpg",
                time:Timestamp.fromDate(new Date()),
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
};


const timeformat=(value)=>{
    // console.log(value)
    const time = new Date(value);
    const yyyy = time.getFullYear();
    let mm = time.getMonth() + 1; // Months start at 0!
    let dd = time.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    let formattedTime = dd + '/' + mm + '/' + yyyy;

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    formattedTime +=" "+h+":"+m+":"+s;

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

const testImgURL=async ()=>{
    const storage = getStorage();
    await getDownloadURL(storageRef(storage, 'Image/Human/humanity.jpg')).then((url) => {
        console.log(url)
    })
}
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
        };
    },
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
        const q = query(collection(this.db, `users/${this.auth.currentUser.uid}/images`), where("time", ">=", Timestamp.fromDate(new Date(yesterday))));
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
                    this.arr[index].des = change.doc.data().des
                    this.arr[index].path = change.doc.data().path
                    this.arr[index].time = change.doc.data().time
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
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-black">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-4 pt-4 text-white min-vh-100">
                    <a href="/"
                        class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">WakaBot</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                        id="menu">
                        <div class="px-4">
                            <li class="nav-item">
                                <a href="/home" class="nav-link align-middle px-0 tc-grey">
                                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                </a>
                                <a href="#Manual" @click="setUrl('feature#Manual')" v-bind:class="currentUrl=='feature#Manual'?'active':''" class="nav-link align-middle px-0 tc-grey">
                                    <i class="fs-4 bi-book"></i> <span class="ms-1 d-none d-sm-inline">Manual</span>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" @click="setUrl('feature')" data-bs-toggle="collapse" class="nav-link px-0 align-middle tc-grey">
                                    <i class="fs-4 bi-map"></i> <span class="ms-1 d-none d-sm-inline">Mapping</span>
                                </a>
                                <ul class="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <a href="#" @click="setUrl('feature')" class="nav-link px-0 tc-grey"> <span class="d-none d-sm-inline">Item
                                                1</span></a>    
                                    </li>
                                    <li>
                                        <a href="#" @click="setUrl('feature')" class="nav-link px-0 tc-grey"> <span class="d-none d-sm-inline">Item
                                                2</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                    <a href="#Image" @click="setUrl('feature#Image')" v-bind:class="currentUrl=='feature#Image'?'active':''" class="nav-link align-middle px-0 tc-grey">
                                        <i class="fs-4 bi-card-image"></i> <span class="ms-1 d-none d-sm-inline">Image</span>
                                    </a>
                            </li>
                        </div>
                    </ul>
                    <hr>
                    <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../../assets/img/member1.png" alt="hugenerd" width="30" height="30"
                                class="rounded-circle">
                            <span class="d-none d-sm-inline mx-1">{{ email }}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a @click="handleSignOut" v-if="isLoggedIn" class="dropdown-item" href="#">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col py-3">
                <div class="hidden" id="Image">
                    <h1>Image DataTable</h1>
                    <button @click="testAdding()">ADDing</button>
                <button @click="testGetting()">GETing</button>
                <button @click="testImgURL()">GET imgURL</button>
                <li v-for="value of this.arr" :key="value.id">
                    {{value.des}} {{timeformat(value.time.toDate())}}
                    <br>
                    <img :id="value.id" :src=getImgURL(value.id,value.path) width="150" height="150">
                </li>
                </div>
                <br>
                <div id="Manual" v-bind:class="currentUrl=='feature#Manual'?'':'hidden'">
                        <ManualDetailsCompVue/>
                    </div>
                    <!-- <div class="hidden" id="Manual">
                        <ManualDetailsCompVue/>
                    </div> -->
            </div>
        </div>
    </div>
</template>
<style>
@import "../../assets/scss/app.scss";
</style>