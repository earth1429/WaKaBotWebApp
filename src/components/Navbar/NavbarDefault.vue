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
const pushFeature=()=>{
    router.push("/feature#Manual");
};
</script>
<script>
export default {
    data: function() {
        return {
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
}
</script>
<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-black tc-white ">
        <div class="container-fluid width-75">
            <a class="navbar-brand" href="/">
                <a class="nav-link mx-2 active tw-medium " aria-current="page" href="/">WakaBot</a>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <a class="nav-link mx-2" @click="setUrl('home')" v-bind:class="currentUrl=='home'?'active':''" aria-current="page" href="/home#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" @click="setUrl('home#ProductsSection')" v-bind:class="currentUrl=='home#ProductsSection'?'active':''" href="/home#ProductsSection">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" @click="setUrl('home#AboutusSection')" v-bind:class="currentUrl=='home#AboutusSection'?'active':''" href="/home#AboutusSection">About us</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="!isLoggedIn" class="nav-link mx-2" v-bind:class="currentUrl=='login'?'active':''" href="/login">Login</a>
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

