<template>
    <div class="container">
        <h1 align="center" class="py-5 tz-44px">Products</h1>
        <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../assets/img/robot01.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/robot02.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/robot03.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="container">
                <h1>Background Story</h1>
                <div>
                    <ul>
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
                            application, thus, allowing the client to take control and understand the specific
                            situation.</li>
                    </ul>
                </div>
            </div>
            <h1>Problem Statement</h1>
            <ul>
                <li>
                    In many buildings with multiple floors, when the night comes, guards would need
                    to walk around the building, checking on the lights to turn them off one by one. The
                    more floors and rooms there are, the more time and energy would be wasted on
                    through all of them. Therefore, the WakaBot would help in checking the light for the
                    guards, and reduce the time that they need to go through them
                </li>
            </ul>

        </div>
    </div>
</template>
<style>
@import "../../assets/scss/app.scss";
</style>
