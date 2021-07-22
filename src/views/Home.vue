<template>
<div>
  <h1>Welcome to Home</h1>
  <InputField :title="title" v-model="title"></InputField>
  {{title}}
</div>
</template>

<script>
import InputField from "@/components/layout/InputField";
export default {
  name: "Home",
  data(){
    return {
      title: ""
    }
  },
  components: {InputField},
  methods: {
    // titleChange(title){
    //   this.title = title;
    // }
  }
}
</script>

<style scoped>

</style>