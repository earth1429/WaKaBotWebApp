import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue"
import WelcomePage from "@/components/WelcomePage.vue"
import LoginPage from "@/components/LoginPage.vue";
import FeaturePage from "@/components/FeaturePage.vue";
import {getAuth,onAuthStateChanged}from "firebase/auth";

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: WelcomePage,
    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
        meta:{
            requiresNoAuth:true,
        },
    },
    {
        path: "/feature",
        name: "Feature",
        component: FeaturePage,
        meta:{
            requiresAuth:true,
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
        const removeListener=onAuthStateChanged(
            getAuth(),
            (user)=>{
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to,from,next)=>{
    if(to.matched.some((record)=>record.meta.requiresAuth)){
        if(await getCurrentUser()){
            next();
        }else{
            console.log("You don't have access.");
            next("/home");
        }
    }else if(to.matched.some((record)=>record.meta.requiresNoAuth)){
        if(await getCurrentUser()){
            console.log("You need to logout first.");
            next("/home");
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router;