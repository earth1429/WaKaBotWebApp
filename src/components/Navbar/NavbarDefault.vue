<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="@/assets/img/WakaBotLogo2.png" alt="" width="100" height="98">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <a class="nav-link mx-2 active " aria-current="page" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 " href="/aboutus">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/Login">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>