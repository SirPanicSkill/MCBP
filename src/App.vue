<template>
  <div id="app">
    <header class="header">
      <div class="logo-area container-fluid">
        <div class="container logo-area_container">
          <div class="logo-info">
            <img src="./assets/logo.png" alt="logo" class="logo">
            <div class="logo-info_about">
              <p>МНОГОФУНКЦИОНАЛЬНЫЙ ЦЕНТР<br/>ПОДДЕРЖКИ БИЗНЕСА</p>
              <span>Поднимаем Ваш бизнес наверх!</span>
            </div>
          </div>
          <div class="logo-contacts">
            <div class="phone">
              <p>
                <i class="phone_icon">
                  <img src="./assets/phone.png" alt="">
                </i>
                <a href="tel:+79164540440" class="phone-number">+7 (916) 454-04-40</a>
                <br/>
                <a href="mailto:office@mcpb.ru">office@mcpb.ru</a>
              </p>
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
            <ul class="navbar-nav container text-float">
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
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
    <footer class="footer">
      <hr/>
      <div class="container">
        <div class="row">
          <ul class="navbar-nav col-lg-8">
            <li class="nav-item">
              <router-link class="nav-link" @click.native="topFunction()" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click.native="topFunction()" to="services">Услуги</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click.native="topFunction()" to="consulting">Консалтинг</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click.native="topFunction()" to="cpp">ЦПП</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click.native="topFunction()" to="contacts">Контакты</router-link>
            </li>
          </ul>
          <div class="social col-lg-4">
            <p>Мы в социальных сетях:</p>
            <a href="#" class="fb"></a>
            <a href="#" class="vk"></a>
            <a href="#" class="yt"></a>
          </div>
        </div>
      </div>
      <hr/>
      <div class="container">
        <div class="row">
          <div class="address col-lg-4">
            <p class="time">Пн-пт с 9:00 до 18:00</p>
            <address>
              <a target="_blank" href="https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%97%D0%B5%D0%BC%D0%BB%D1%8F%D0%BD%D0%BE%D0%B9+%D0%92%D0%B0%D0%BB,+68%2F18+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+3,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+109004/@55.7448977,37.6532719,18.17z/data=!4m5!3m4!1s0x46b54aef1ef9fa65:0xc6d4ab6af3b5e711!8m2!3d55.744948!4d37.654116">
                Земляной Вал, д. 68/18, стр. 3, Москва
              </a>
            </address>
          </div>
          <div class="copyright col-lg-4">
            <p>© Многофункциональный центр поддержки бизнеса</p>
            <p>Все права защищены.</p>
          </div>
          <div class="contacts col-lg-4">
            <p><a href="tel:+79164540440" class="phone-number">+7 (916) 454-04-40</a></p>
            <p><a href="mailto:office@mcpb.ru">office@mcpb.ru</a></p>
          </div>
        </div> 
      </div>
    </footer>
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
    },
    topFunction() {
      document.querySelector('#app').scrollTo(0,0);
    }
  }
}
</script>

<style>

</style>
