<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
import AboutUsComp from "@/components/Comps/AboutUsComp.vue";
import ProductsComp from "@/components/Comps/ProductsComp.vue";
import HeaderDefault from "@/components/HeaderDefault.vue";
</script>
<template>
    <NavbarDefault page='home'/>
    <HeaderDefault/>
    <div class="container fontThin">
        <ProductsComp/>
        <AboutUsComp/>
    </div>
    <FooterDefault/>
</template>
<style>
@import "../assets/scss/app.scss";
</style>
