<template>
    <div class="container pt-5" id="ProductsSection">
        <h1 align="center" class="py-5 tz-44px tw-medium">Products</h1>
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
            <div class="container pt-5">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <div class="box-white p-3 sd-box">
                            <div class="text-center">
                                <img src="../../assets/img/RaspberryPi.jpg" class="img-thumbnail"
                                    style="height: 200px;" width="286px">
                            </div>
                            <div class="tz-22px tc-black p-2">
                                <span class="tw-medium">Raspberry Pi</span> <br>
                                <span> Raspberry Pi is a very cheap computer that runs Linux, but it also provides a set of GPIO (general purpose input/output) pins, allowing you to control electronic components for physical computing and explore the Internet of Things (IoT).</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="box-white p-3 sd-box">
                            <div class="text-center">
                                <img src="../../assets/img/LidarScanner.jpg" class="img-thumbnail"
                                    style="height: 200px;" width="286px">
                            </div>
                            <div class="tz-22px tc-black p-2">
                                <span class="tw-medium">Lidar Scanner</span> <br>
                                <span>LiDAR is a remote sensing method. LiDAR technology uses the light from a laser to collect measurements. These are used to create 3D models and maps of objects and environments.</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="box-white p-3 sd-box">
                            <div class="text-center">
                                <img src="../../assets/img/PIRsensor.jpg" class="img-thumbnail" style="height: 200px;"  width="286px">
                            </div>
                            <div class="tz-22px tc-black p-2">
                                <span class="tw-medium">PIR Sensor</span> <br>
                                <span>A passive infrared sensor (PIR sensor) is an electronic sensor that measures infrared (IR) light radiating from objects in its field of view. They are most often used in PIR-based motion detectors. PIR sensors are commonly used in security alarms and automatic lighting applications.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import "../../assets/scss/app.scss";
</style>
