import { createWebHistory, createRouter } from "vue-router";
import AboutUsPage from "@/components/AboutUsPage.vue"
import HomePage from "@/components/HomePage.vue"
import ProductsPage from "@/components/ProductsPage.vue"
import WelcomePage from "@/components/WelcomePage.vue"
import LoginPage from "@/components/LoginPage.vue";
import FeedPage from "@/components/FeedPage.vue";
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
    },
    {
        path: "/feed",
        name: "Feed",
        component: FeedPage,
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
    }else{
        next();
    }
});

export default router;