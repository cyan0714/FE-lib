<template>
  <h2>我是 App.vue 页面</h2>
  <h2>{{title}}</h2>
  <hello-world :message="message"></hello-world>
</template>

<script>
  import HelloWorld from './HelloWorld.vue';
  export default {
    components: {
      HelloWorld
    },
    data() {
      return {
        title: "Hello My Vue",
        message: "呵呵呵"
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>