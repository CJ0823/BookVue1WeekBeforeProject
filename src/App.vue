<template>
  <div id="app">
    <Header></Header>
    <h3>안녕하세요</h3>
    <router-link to="/">Home</router-link>
    <router-link to="/about">     About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
h3 {
  color: red;
}
</style>
