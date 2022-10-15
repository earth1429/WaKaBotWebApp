import { createWebHistory, createRouter } from "vue-router";
import AboutUsPage from "@/components/AboutUsPage.vue"
import HomePage from "@/components/HomePage.vue"
import ProductsPage from "@/components/ProductsPage.vue"
import WelcomePage from "@/components/WelcomePage.vue"


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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;