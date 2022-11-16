<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import ProductsCom from "@/components/comps/ProductsCom.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
</script>
<template>
    <NavbarDefault page='product'/>
    <ProductsCom/>
    <FooterDefault/>
</template>
<style>
@import "../assets/scss/app.scss";
</style>
