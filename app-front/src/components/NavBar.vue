<template>
    <div>
        <!--INICIO NAVBAR-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Estante Geek</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cadastrar-edicao">Cadastrar Edição</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Biblioteca</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Metas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Perfil</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <!--FIM NAVBAR-->
    </div>
    <router-view />
</template>