<template>
  <div id="app">
    <header class="header">
      <div class="logo-area container-fluid"></div>
      <nav class="navbar navbar-expand-md bg-inverse navbar-inverse">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav container">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Главная</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="about">О Компании</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="services">Услуги</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="consulting">Консалтинг</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="cpp">ЦПП</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="contacts">Контакты</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main class="main">
      <div class="container">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </main>
    <footer class="footer">I am footer</footer>
  </div>
</template>

<script>
import './css/normalize.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App'
}
</script>

<style>

</style>
