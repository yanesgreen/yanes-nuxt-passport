<template>
  <div>
    <div class="row">
      <div class="col-12 mb-5">
        <h1 class="title">Edit User ID:{{id}}</h1>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>Edit User Form</span>
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
            <FormulateForm name="editUser" @submit="submitHandler(id)" #default="{ isLoading }">
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
  import ButtonBack from "../../../components/ButtonBack";

  export default {
    name: 'usersEdit',
    components: {ButtonBack},
    layout: 'backend',
    middleware: 'auth',
    data() {
      return {
        id: this.$route.params.id,
        user: {},
        role: {admin: 'Admin', user: 'User', influencer: 'Influencer'},
        serverErrors: [],
        showAlert: false,
      }
    },
    methods: {
      refresh() {
            this.$fetch()
      },
      reset() {
        this.$formulate.reset('editUser')
      },
      async submitHandler(id) {
        const source = 'api/users/' + id;
        try {
          const res = await this.$axios.$put(source, this.user);
          await this.refresh()
          await this.$toast.success(`User ID: ${res.id} berhasil di perbaharui`)
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
    },
    async fetch() {
      const response = await this.$axios.$get('api/users/' + this.$route.params.id);
      this.user = response
      this.user.role = response.roles.toString()
    },
  }
</script>

<style lang="scss">
  @import "assets/formulate.scss";
</style>
