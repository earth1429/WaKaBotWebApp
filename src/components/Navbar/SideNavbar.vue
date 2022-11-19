<script setup>
import ManualDetailsCompVue from "../Comps/ManualDetailsComp.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import router from "@/router";

import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, getDocs} from "firebase/firestore"; 

const isLoggedIn = ref(false);
const email = ref("");
const auth = getAuth();
const db = getFirestore();

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
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
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

const testAdding = async () => {
    if(isLoggedIn.value){
        try {
            const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/images`), {
                des:"Hello",
                temp:"Hey",
                time: Date.now(),
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
};
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
        };
    },
    async created() {
        const querySnapshot = await getDocs(collection(this.db, `users/${this.auth.currentUser.uid}/images`));
        querySnapshot.forEach((doc) => {
            this.arr.push([doc.des,doc.temp]);
            console.log(`${doc.id} => ${doc.data().des}`);
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
                                <a href="#Manual" class="nav-link align-middle px-0 tc-grey">
                                    <i class="fs-4 bi-book"></i> <span class="ms-1 d-none d-sm-inline">Manual</span>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse"
                                    class="nav-link px-0 align-middle tc-grey">
                                    <i class="fs-4 bi-map"></i> <span class="ms-1 d-none d-sm-inline">Mapping</span>
                                </a>
                                <ul class="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <a href="#" class="nav-link px-0 tc-grey"> <span class="d-none d-sm-inline">Item
                                                1</span></a>    
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0 tc-grey"> <span class="d-none d-sm-inline">Item
                                                2</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                    <a href="#Image" class="nav-link align-middle px-0 tc-grey">
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
                Content area...
                <button @click="testAdding">ADDing</button>
                <button @click="testGetting">GETing</button>
                <li v-for="value of arr" :key="value.des">
                    <span>{{value}}</span>
                </li>
                <div class="hidden" id="Manual">
                        <ManualDetailsCompVue/>
                    </div>
                    <div class="hidden" id="Image">
                        <h1>Image DataTable</h1>
                    </div>
            </div>
        </div>
    </div>
</template>
<style>
@import "../../assets/scss/app.scss";
</style>