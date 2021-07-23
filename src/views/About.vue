<template>
<div>
  <h1>About page</h1>
  <Header >
    <template v-slot:forFirst="props">
      <p>Here is the first {{props.fromHeader}}</p>
    </template>
    <template #forSecond>
      <p>Here is the second</p>
    </template>
    <template #default>
      <p>Here is the thrid</p>
    </template>
  </Header>
</div>
</template>

<script>
import Header from "@/components/layout/Header";
export default {
  name: "About",
  data(){
    return {
      title: "Title from About"
    }
  },
  components: {Header}
}
</script>

<style scoped>

</style>