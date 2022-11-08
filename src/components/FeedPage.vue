<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
import { onMounted,ref } from "vue";
import{getAuth,onAuthStateChanged,signOut}from "firebase/auth";
import router from "@/router";
const isLoggedIn=ref(false);
let auth;
onMounted(()=>{
    auth=getAuth();
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
</script>
<template>
    <NavbarDefault />
    <div class="container">
        <div class="gif-bg opacity-75"></div>
        <div class="text-center align-items-center text-on-gif">
            <div class="row">
                <div class="col-16">
                    <h1>Only Those Log in can be here.</h1>
                </div>
                <div class="col-16 pt-3">
                    <a><button @click="handleSignOut" v-if="isLoggedIn" class="btn btn-secondary opacity-75 tz-16px tw-medium">Log out</button></a>
                </div>
            </div>
        </div>
    </div>
    <FooterDefault />
</template>
<style>
@import "../assets/scss/app.scss";
</style>
