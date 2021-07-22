<template>
  <div>
    <form>
      <label>ID</label>
      <input type="text" :value="value" @input="$emit('input', $event.target.value)" style="padding: 20px; border: 1px pink solid"/>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props : {
    value:{
      type : String,
      required : true,
    }
  },
  methods: {
    // updateTitle(e){
    //   this.$emit('titleFromChild', e.target.value)
    // }
  }
}

</script>

<style scoped>

</style>