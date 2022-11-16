<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
import AboutUsCom from "@/components/comps/AboutUsCom.vue";
import ProductsCom from "@/components/comps/ProductsCom.vue";
import HeaderDefault from "@/components/HeaderDefault.vue";
</script>
<template>
    <NavbarDefault page='home'/>
    <HeaderDefault/>
    <div class="container fontThin">
        <AboutUsCom/>
        <ProductsCom/>
    </div>
    <FooterDefault/>
</template>
<style>
@import "../assets/scss/app.scss";
</style>
