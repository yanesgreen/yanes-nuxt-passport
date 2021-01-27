<template>
  <div id="auth">
    <main class="form-signin">
      <div class="form-container">
        <svg role="img" class="banner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M22,7.999c0-0.363-0.197-0.697-0.516-0.874l-9.022-5c-0.301-0.166-0.667-0.166-0.968,0l-8.978,4.96 C2.198,7.261,2.001,7.595,2,7.958C1.999,8.32,2.195,8.656,2.513,8.833l9.022,5.04C11.687,13.958,11.854,14,12.022,14 s0.335-0.042,0.486-0.126l8.978-5C21.804,8.697,22,8.362,22,7.999z M12.023,11.854L5.06,7.965l6.917-3.822l6.964,3.859 L12.023,11.854z"/>
          <path
            d="M20.515,11.126L12,15.856l-8.515-4.73l-0.971,1.748l9,5C11.665,17.958,11.833,18,12,18s0.335-0.042,0.485-0.126l9-5 L20.515,11.126z"/>
          <path
            d="M20.515,15.126L12,19.856l-8.515-4.73l-0.971,1.748l9,5C11.665,21.958,11.833,22,12,22s0.335-0.042,0.485-0.126l9-5 L20.515,15.126z"/>
        </svg>
        <Nuxt/>
        <div class="d-flex justify-content-center">
          <nuxt-link class="text-center text-primary text-decoration-none" :to="{name: 'index'}">
            Kembali Ke Beranda &longrightarrow;
          </nuxt-link>
        </div>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "authentication"
  }
</script>

<style>
  #auth {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
  }

  #auth .form-signin {
    width: 100%;
    height: 100vh;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #auth .form-signin .form-container {
    width: 100%;
  }

  #auth .form-signin .checkbox {
    font-weight: 400;
  }

  #auth .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  #auth .form-signin .form-control:focus {
    z-index: 2;
  }

  #auth .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  #auth .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  #auth .banner{
    display: block;
    margin: 0 auto 2em auto;
    fill: royalblue;
    height: 75px;
    width: 75px;
  }
</style>
