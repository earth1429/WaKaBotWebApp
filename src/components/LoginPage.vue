<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import {ref} from "vue";
import {getAuth,signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import {useRouter} from "vue-router";
const email=ref("");
const password=ref("");
const router=useRouter()
const auth=getAuth()
const login=async ()=>{
    await signInWithEmailAndPassword(auth,email.value,password.value)
    .then((data)=>{
        console.log("Logined! "+data);
        router.push("/feature")
    }).catch((error)=>{
        console.log(error.code);
        alert(error.message);
    })
}

const passwordReset=async ()=>{    
    await sendPasswordResetEmail(auth,email.value)
    .then(()=>{
        console.log("Password reset email sent!")
        alert("Password reset email sent!");
    })
    .catch((error)=>{
        console.log(error)
        alert(error.message);
    });
}

</script>
<template>
    <NavbarDefault page='login'/>
    <div class="login-page  section">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="bg-white shadow rounded">
                    <div class="row">
                        <div class="col-md-7 pe-0">
                            <div class="form-left h-100 py-5 px-5">
                                <div action="" class="row g-4">
                                        <div class="col-12">
                                            <label>Email<span class="text-danger">*</span></label>
                                            <div class="input-group">
                                                <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                <input type="text" class="form-control" placeholder="Enter Email" v-model="email">
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label>Password<span class="text-danger">*</span></label>
                                            <div class="input-group">
                                                <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                <input type="password" class="form-control" placeholder="Enter Password" v-model="password">
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <a @click="passwordReset" href="#" class="float-end text-primary">Forgot Password?</a>
                                        </div>

                                        <div class="col-12">
                                            <button @click="login" type="submit" class="btn bg-black tc-white px-4 float-end mt-4">login</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-5 ps-0 d-none d-md-block">
                            <div class="form-right h-100 bg-black text-white text-center pt-5">
                                <i class="bi bi-robot"></i>
                                <h2 class="fs-1">Welcome Back!!!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- TEMPORARY -->
        <!-- <h1 class="text-center">Test Authentication</h1>
        <h2 class="text-center">Email: capstonepro2@gmail.com</h2>
        <h2 class="text-center">Password: capstonepro2@gmail.com</h2> -->
        <!-- TEMPORARY -->
    </div>
</div>
</template>
<style>
@import "../assets/scss/app.scss";
</style>