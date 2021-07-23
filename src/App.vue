<template>
  <div id="app">
    <div>App.vue에서 표시하는 정보입니다.</div><br>
    <router-link to="/">Home</router-link>
    <router-link to="/about">     About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
h3 {
  color: red;
}
</style>