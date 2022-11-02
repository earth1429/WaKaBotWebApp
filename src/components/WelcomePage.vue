<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
</script>
<template>
    <NavbarDefault />
    <div class="container">
        <div class="gif-bg opacity-75"></div>
        <div class="text-center align-items-center text-on-gif">
            <div class="row">
                <div class="col-16">
                    <h1>Welcome to WakaBot Website</h1>
                </div>
                <div class="col-16 pt-3">
                    <a href="/home"><button class="btn btn-secondary opacity-75 tz-16px tw-medium">Get
                            Start</button></a>
                </div>
            </div>
        </div>
    </div>
    <FooterDefault />
</template>
<style>
@import "../assets/scss/app.scss";
</style>
