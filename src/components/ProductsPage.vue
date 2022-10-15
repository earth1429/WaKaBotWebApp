<script setup>
import NavbarDefault from "@/components/Navbar/NavbarDefault.vue";
import FooterDefault from "@/components/Footer/FooterDefault.vue";
</script>
<template>
    <NavbarDefault />
    <div class="container">
        <h1>Products</h1>
        <div class="container">
            <div class="text-center tc-pink">
                <span>Background Story</span>
            </div>
            <div class="tc-grey">
                <li>In the present day and age, there are many buildings that have many floors, and
                    when there are many floors, there are also many lights. For buildings with few floors,
                    before leaving the building, there might be a few lights on, so it is easy for people to
                    check them and turn them off. However, when there are a lot of lights that are still open
                    on multiple floors, it will take time and effort to go through them. Therefore, the
                    WakaBot project will help check on the lights, reducing the unnecessary time wasted on
                    going through them.</li>
                <br>
                <li>WakaBot is a robot that would be used for surveying buildings with multi-floor, to
                    detect light by using machine learning and sensors. The robot would recognize the
                    elevator floor buttons through machine learning and used them to go through each floor.
                    The robot also uses Lidra sensor to detect objects, preventing the robot from hitting any
                    object. When necessary, the client can also access WakaBot remotely through the web
                    application, thus, allowing the client to take control and understand the specific situation.</li>
            </div>
        </div>
        <div class="container">
            <div class="text-center tc-pink">
                <span>Products</span>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active align-items-center">
                        <img src="../assets/img/robot1.jpg" class="d-block w-50" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/img/robot2.jpg" class="d-block w-50" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/img/robot1.jpg" class="d-block w-50" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <li>Information</li>
            how to use......
        </div>
        <FooterDefault />
    </div>
</template>