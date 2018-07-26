<template>
  <div id="app">
    <header class="header">
      <nav class="menu">
        <ul class="menu__wrapper">
          <li class="menu__list"><router-link class="menu__link" to="/">Главная</router-link></li>
          <li class="menu__list"><router-link class="menu__link" to="about">О Компании</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
    <footer class="footer">I am footer</footer>
  </div>
</template>

<script>
import './css/normalize.css';
import './css/main.css';

export default {
  name: 'App'
}
</script>

<style>

</style>
