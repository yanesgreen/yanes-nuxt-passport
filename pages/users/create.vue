<template>
  <div>
    <div class="row">
      <div class="col-12 mb-5">
        <h1 class="title">Create New User</h1>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>Create User Form</span>
            <ButtonBack/>
          </div>
          <div class="card-body">

            <!--alert-->
            <div>
              <b-alert :show="showAlert" variant="danger" dismissible>
                <div v-for="(v, k) in serverErrors" :key="k">
                  <p v-for="error in v" :key="error" class="text-sm mb-0">
                    {{ error }}
                  </p>
                </div>
              </b-alert>
            </div>

            <!--form-->
            <FormulateForm name="createUser" @submit="submitHandler()" #default="{ isLoading }">
              <!--Name-->
              <FormulateInput
                v-model="user.name"
                label="Name"
                name="name"
                validation="required"
              />
              <!--Email-->
              <FormulateInput
                v-model="user.email"
                label="Email"
                name="email"
                validation="required|email"
              />
              <!--Password-->
              <FormulateInput
                v-model="user.password"
                label="Password"
                type="password"
                name="password"
                validation="^required|min:8,length|matches:/[0-9]/"
                :validation-messages="{matches: 'Passwords require at least one number.'}"
              />
              <FormulateInput
                label="Confirm password"
                type="password"
                name="password_confirm"
                validation="required|confirm"
                validation-name="Password confirmation"
              />
              <!--role-->
              <FormulateInput
                v-model="user.role"
                name="role"
                validation="required"
                :options="role"
                type="select"
                placeholder="Select user role"
                label="Role"
              />
              <!--Submit-->
              <div class="mt-5 mt-md-0 d-md-flex justify-content-md-end">
                <FormulateInput
                  type="button"
                  label="Reset"
                  data-ghost
                  @click="reset"
                />
                <FormulateInput
                  class="ml-md-2"
                  type="submit"
                  :disabled="isLoading"
                  :label="isLoading ? 'Loading...' : 'Submit this form'"
                />
              </div>
            </FormulateForm>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import ButtonBack from "../../components/ButtonBack";

  export default {
    name: 'usersCreate',
    components: {ButtonBack},
    layout: 'backend',
    middleware: 'auth',
    data() {
      return {
        user: {name: null, email: null, password: null, role: null},
        role: {admin: 'Admin', user: 'User', influencer: 'Influencer'},
        serverErrors: [],
        showAlert: false
      }
    },
    methods: {
      reset() {
        this.$formulate.reset('createUser')
      },
      async submitHandler() {
        const source = 'api/users/';
        try {
          const res = await this.$axios.$post(source, this.user);
          await this.$toast.success(`User ID: ${res.id} berhasil dibuat`)
          await this.reset()
        } catch (err) {
          if (err.response) {
            if (err.response.status === 422) {
              const errors = err.response.data.errors
              this.serverErrors = errors
              this.showAlert = true
              for (const index in errors) {
                this.user[index] = ''
              }
            }
          } else {
            console.log(error);
          }
        }
      },
    }
  }
</script>

<style lang="scss">
  @import 'assets/formulate';
</style>
