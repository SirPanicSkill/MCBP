<template>
  <div id="app">
    <header class="header">
      <div class="logo-area container-fluid">
        <div class="container logo-area_container">
          <div class="logo-info">
            <img src="./assets/logo.png" alt="logo" class="logo ">
            <div class="logo-info_about">
              <p>МНОГОФУНКЦИОНАЛЬНЫЙ ЦЕНТР<br/>ПОДДЕРЖКИ БИЗНЕСА</p>
              <span>Поднимаем Ваш бизнес наверх!</span>
            </div>
          </div>
          <div class="logo-contacts">
            <div class="phone">
              <p><i class="phone_icon"><img src="./assets/phone.png" alt=""></i>+7 (916) 454-04-40<br/>office@mcbp.ru</p>
            </div>
            <div class="ask">
              <a href="#">Задать вопрос</a>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-md navbar-light bg-inverse navbar-inverse">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav container">
              <li class="nav-item">
                <router-link class="nav-link" @click.native="toggler()" to="/">Главная</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" @click.native="toggler()" to="about">О Компании</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" @click.native="toggler()" to="services">Услуги</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" @click.native="toggler()" to="consulting">Консалтинг</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" @click.native="toggler()" to="cpp">ЦПП</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" @click.native="toggler()" to="contacts">Контакты</router-link>
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
  name: 'App',
  methods: {
    toggler() {
      document.querySelector('.navbar-toggler').click();
    }
  }
}
</script>

<style>

</style>
