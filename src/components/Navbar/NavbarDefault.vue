<script setup>

import { onMounted,ref } from "vue";
import{getAuth,onAuthStateChanged,signOut}from "firebase/auth";
import router from "@/router";
const isLoggedIn=ref(false);
const auth=getAuth();
onMounted(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            isLoggedIn.value=true;
        }else{
            isLoggedIn.value=false;
        }
    });
});
const handleSignOut=()=>{
    signOut(auth).then(()=>{
        router.push("/home");
    });
};

onMounted(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            isLoggedIn.value=true;
        }else{
            isLoggedIn.value=false;
        }
    });
});
const pushFeature=()=>{
    router.push("/feature");
};
</script>
<script>
export default {
 props: ['page']
}
</script>
<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-black tc-white ">
        <div class="container-fluid width-75">
            <a class="navbar-brand" href="/">
                <a class="nav-link mx-2 active " aria-current="page" href="/">WakaBot</a>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <a class="nav-link mx-2" aria-current="page" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/home#ProductsSection">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 " href="/home#AboutusSection">About us</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="!isLoggedIn" class="nav-link mx-2" v-bind:class="page=='login'?'active':''" href="/Login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="isLoggedIn" @click="pushFeature" class="nav-link mx-2 pointer">Beta</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="isLoggedIn" @click="handleSignOut" class="nav-link mx-2 pointer" >Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
<style>
@import "../../assets/scss/app.scss";   
</style>

