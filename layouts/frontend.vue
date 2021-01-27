<template>
  <div id="frontend">
    <!--navbar-->
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div class="nav navbar-nav w-100 justify-content-between">
        <div class="d-flex">
          <span class="navbar-brand">MyApp</span>
        </div>
      </div>
    </nav>
    <!--main-->
    <main class="py-5 d-flex bg-primary">
      <Nuxt/>
    </main>
    <!--footer-->
    <footer class="navbar navbar-dark bg-primary d-flex justify-content-center">
      <span class="navbar-brand text-center text-white-50">&copy;yanestudio</span>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "frontend"
  }
</script>

<style>
  #frontend {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #frontend .btn {
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  #frontend main {
    flex: 1;
  }

  #frontend main .btn {
    min-width: 150px;
  }

  #frontend main .banner {
    height: 50%;
    width: 50%;
    fill: white;
  }

  #frontend footer span{
    font-size: 0.9em;
  }
</style>
