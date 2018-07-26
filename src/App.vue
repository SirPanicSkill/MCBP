<template>
  <div id="app">
    <header class="header">
      <nav class="menu">
        <ul class="menu__wrapper">
          <li class="menu__list"><router-link to="/">Главная</router-link></li>
          <li class="menu__list"><router-link to="about">О Компании</router-link></li>
        </ul>
      </nav>
    </header>
    <transition name="fade">
      <router-view/>
    </transition>
    <footer class="footer">I am footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
