import { createWebHistory, createRouter } from "vue-router";
import AboutUsPage from "@/components/Comps/AboutUsCom.vue"
import HomePage from "@/components/HomePage.vue"
import ProductsPage from "@/components/Comps/ProductsCom.vue"
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
        path: "/aboutus",
        name: "AboutUs",
        component: AboutUsPage,
    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/products",
        name: "Products",
        component: ProductsPage,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
        meta:{
            noLogin:true,
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
            next("/");
        }
    }else if(to.matched.some((record)=>record.meta.noLogin)){
        if(await getCurrentUser()){
            console.log("Go to Feature.");
            next("/feature");
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router;