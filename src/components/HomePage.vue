<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
</script>
<template>
    <NavbarDefault />
    <div class="container">
        <h1>Home</h1>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <FooterDefault />
    </div>
</template>