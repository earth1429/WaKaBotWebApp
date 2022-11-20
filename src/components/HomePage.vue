<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
import AboutUsComp from "@/components/Comps/AboutUsComp.vue";
import ProductsComp from "@/components/Comps/ProductsComp.vue";
import HeaderDefault from "@/components/Header/HeaderDefault.vue";
import HardwareComp from "@/components/Comps/HardwareComp.vue";
import ProductDetailsComp from "@/components/Comps/ProductDetailsComp.vue";
</script>
<template>
    <NavbarDefault/>
    <HeaderDefault/>
    <ProductDetailsComp/>
        <ProductsComp/>
        <HardwareComp/>
        <AboutUsComp/>

    <FooterDefault/>
</template>
<style>
@import "../assets/scss/app.scss";
</style>
