<template>
  <form @submit.prevent="userLogin">

    <!--email-->
    <label for="inputEmail" class="d-none">Email address</label>
    <input v-model="login.email"
           type="email"
           id="inputEmail"
           class="form-control"
           placeholder="Email address"
           required
           autofocus>

    <!--password-->
    <label for="inputPassword" class="d-none">Password</label>
    <div class="form-group position-relative mb-4">
      <input v-model="login.password"
             :type="passReveal ? 'text' : 'password'"
             id="inputPassword"
             class="form-control form-control-inverse"
             name="password"
             placeholder="Password"
             required minlength="8">
      <span id="see-password" class="position-absolute text-white">
        <img @click="toggleVisibilty"
             :src="passReveal ? 'visibility_on.svg' : 'visibility_off.svg'"
             alt="make password visible">
      </span>
    </div>

    <!--submit-->
    <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" :disabled="isLoading">
      {{ isLoading ? 'Wait...' : 'Sign in'}}
    </button>

  </form>
</template>

<script>
  export default {
    middleware: 'auth',
    auth: 'guest',
    layout: "authentication",
    name: "login",
    data() {
      return {
        passReveal: false,
        isLoading: false,
        login: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      toggleVisibilty() {
        this.passReveal = !this.passReveal
      },
      async userLogin() {
        try {
          this.isLoading = true
          let response = await this.$auth.loginWith('local', {data: this.login})
            .then(() => this.$toast.global.login())
          this.isLoading = false
        } catch (err) {
          this.isLoading = false
          if (err.response) {
            if (err.response.status === 401) {
              this.$toast.error('Invalid Credentials')
            }
            if (err.response.status === 422) {
              console.log(err.response.data);
              this.$toast.error('Input error')
            }
          } else {
            this.$toast.error(err)
          }
        }
      }
    }
  }
</script>

<style scoped>
  #see-password {
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 3;
    opacity: 0.75;
  }
</style>
