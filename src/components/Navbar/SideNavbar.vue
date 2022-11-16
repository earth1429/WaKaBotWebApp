<script setup>
import { onMounted,ref } from "vue";
import{getAuth,onAuthStateChanged,signOut}from "firebase/auth";
import router from "@/router";
const isLoggedIn=ref(false);
const email=ref("");
const auth=getAuth();
onMounted(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            isLoggedIn.value=true;
            email.value=auth.currentUser.email
        }else{
            isLoggedIn.value=false;
            email.value=""
        }
    });
});
const handleSignOut=()=>{
    signOut(auth).then(()=>{
        router.push("/home");
    });
};
// window.addEventListener('beforeunload', function(event) {
//     event.returnValue = auth=getAuth()
// })
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
                                <a href="#" class="nav-link align-middle px-0 tc-grey">
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
                            <!-- <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#m  enu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li> -->
                        </div>
                    </ul>
                    <hr>
                    <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../../assets/img/member1.png" alt="hugenerd" width="30" height="30"
                                class="rounded-circle">
                            <span class="d-none d-sm-inline mx-1">{{email}}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a @click="handleSignOut" v-if="isLoggedIn" class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col py-3">
                Content area...
            </div>
        </div>
    </div>
</template>
<style>
@import "../../assets/scss/app.scss";
</style>