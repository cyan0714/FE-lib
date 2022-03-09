<template>
  <h2>Hello World组件{{ message }}</h2>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style>
</style>