<template>
<div>
  <h1>Welcome to Home</h1>
  <DataBindingList></DataBindingList>
</div>
</template>

<script>
import DataBindingList from "@/components/layout/DataBindingList.vue";

export default {
  name: "Home",
  components: {DataBindingList}
}
</script>

<style scoped>

</style>