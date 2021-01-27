<template>
  <b-button @click="goBack">return</b-button>
</template>

<script>
  export default {
    name: "ButtonBack",
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
