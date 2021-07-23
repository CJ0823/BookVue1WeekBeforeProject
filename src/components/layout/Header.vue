<template>
  <div>
    <div class="title">{{title}}</div>
    <button @click="updateTitle">update title</button>
    <slot name="forFirst" :fromHeader="title"></slot>
    <p>first</p>
    <slot name="forSecond"></slot>
    <p>second</p>
    <slot></slot>
    <p>third</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue.js study~"
    }
  },
  methods: {
    updateTitle(){
      this.title="Title updated!"
    }
  }
}

</script>

<style scoped>
.title {
  font-size: 32px;
  color : rgb(37, 37, 158);
}
</style>