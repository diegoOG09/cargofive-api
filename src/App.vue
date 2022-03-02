<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Main from './components/Main.vue';
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
html {
  height: 100vh;
  background-color: #fafafa;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1,h2,h3,h4, p{
    margin: 0;
  }
}
</style>
