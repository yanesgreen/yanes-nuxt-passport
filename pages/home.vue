<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1 class="title">Dashboard</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "backend",
    name: "home",
    middleware: 'auth',
  }
</script>

<style scoped></style>
