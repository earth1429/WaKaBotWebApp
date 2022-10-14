import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue"


const routes = [
    {
        path: "/Login",
        name: "Login",
        component: LoginComponent,
    },
    {
        path: "/Create",
        name: "create",
        component: CreateComponent,
    },
    {
        path: "/view",
        name: "view",
        component: ListComponent,
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: EditComponent,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;