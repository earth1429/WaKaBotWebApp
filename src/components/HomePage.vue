<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
import AboutUsPage from "@/components/AboutUsPage.vue";
import ProductsPage from "@/components/ProductsPage.vue";
import HeaderDefault from "@/components/HeaderDefault.vue";
</script>
<template>
    <NavbarDefault />
    <HeaderDefault/>
    <div class="container fontThin">
        <ProductsPage/>
        <AboutUsPage/>
    </div>
    <FooterDefault />
</template>
<style>
@import "../assets/scss/app.scss";
</style>
