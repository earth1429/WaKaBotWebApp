<template>
  <div class="bg-global">
    <div class="container bg-textbox">
      <div class="row px-3 pt-3 pb-3 align-items-center justify-content-between tc-grey">
        <div class="col-auto">WakaBot</div>
        <div class="col-auto">
          <div class="row">
            <div class="col-auto">About us</div>
            <div class="col-auto">Products</div>
            <div class="col-auto">Contact us</div>
            <div class="col-auto">Login</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      Welcome to WakaBot Website
    </div>
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
            <img src="./assets/img/robot1.jpg" class="d-block w-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./assets/img/robot2.jpg" class="d-block w-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./assets/img/robot1.jpg" class="d-block w-50" alt="..." />
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
    <div class="container">
      <div class="footer-dark">
        <div class="text-center tc-pink">
        <span>Contact us</span>
      </div>
        <footer>
          <div class="container">
            <div class="row text-center">
              <div>
                <h3>Group Member</h3>
                <ul>
                  <li>Kitikun Pinyoporn 62130500205</li>
                  <li>Alex Gut 62130500231</li>
                  <li>Bunason Sutjaritrungsri 62130500240</li>
                </ul>
              </div>
            </div>
            <p class="copyright">WakaBot Services © 2022</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <!-- Nav bar -->
  <!-- <nav class="navbar navbaar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">MEVN Stack CRUD</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/Create" class="nav-link px-3">Create Student</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link">View Student</router-link>
          </li>
        </ul>
      </div>
    </nav> -->

  <!-- Router view -->
  <!-- <div class="container mt-5">
      <router-view></router-view>
    </div> -->
</template>
<style>
@import "./assets/scss/app.scss";
</style>
