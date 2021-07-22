<template>
<div>
  <h1>About page</h1>
  <Header ></Header>
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