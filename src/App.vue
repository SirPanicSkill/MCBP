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
    <router-view/>
    <footer class="footer">I am footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
.menu__wrapper {
  display: flex;
  margin: 0;
  padding: 10px;
  justify-content: center;
  list-style-type: none;
}
.menu__list {
  padding: 10px;
}
</style>
