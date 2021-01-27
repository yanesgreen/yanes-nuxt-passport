<template>
  <div>
    <div class="row">
      <div class="col-12 mb-5">
        <h1 class="title">
          Users List
          <small class="data-length">({{ users.length }} data(s))</small>
        </h1>
      </div>
      <div class="col-12">

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>Users Table</span>
            <b-button variant="primary" @click="goToCreateUser">+ new user</b-button>
          </div>
          <div class="card-body">
            <!--filter-->
            <div class="d-flex justify-content-end mb-3">
              <b-form-group>
                <b-input-group size="sm">
                  <b-form-input v-model="filter" type="search" placeholder="Type to Search"/>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </div>


            <!--datatable-->
            <div style="overflow-x: auto">
              <b-table hover
                       :items="users"
                       :fields="fields"
                       :filter="filter"
                       :per-page="pagination.perPage"
                       :current-page="pagination.currentPage"
                       :busy="$fetchState.pending">

                <!--loader-->
                <template #table-busy>
                  <div class="text-center text-primary my-2">
                    <strong>Loading...</strong>
                  </div>
                </template>

                <!--actions columns-->
                <template #cell(actions)="data">
                  <b-button variant="success" size="sm" @click="editData(data)">
                    <i class='bx bx-edit'></i>
                  </b-button>
                  <b-button variant="danger" size="sm" @click="deleteUser(data.item.id)">
                    <i class='bx bxs-trash'></i>
                  </b-button>
                </template>

              </b-table>
              <b-pagination align="right" v-model="pagination.currentPage" :total-rows="totalRows"
                            :per-page="pagination.perPage"></b-pagination>
            </div>

            <!--pagination-->


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "usersIndex",
    layout: "backend",
    middleware: 'auth',
    data() {
      return {
        users: [],
        filter: null,
        pagination: {perPage: 5, currentPage: 1},
        fields: [
          {key: 'name', sortable: true},
          {key: 'email', sortable: true},
          {
            key: 'roles',
            sortable: true,
            formatter: value => value.toString()
          },
          {key: 'actions', sortable: false},
        ],
      }
    },
    computed: {
      totalRows() {
        return this.users.length
      }
    },
    methods: {
      refresh() {
        this.$fetch()
      },
      editData(data) {
        this.$router.push({name: 'users-id-edit', params: {id: data.item.id}})
      },
      goToCreateUser() {
        this.$router.push({name: 'users-create'})
      },
      async deleteUser(id) {
        const source = 'api/users/' + id;
        try {
          await this.$axios.$delete(source);
          await this.refresh()
          await this.$toast.success(`User berhasil dihapus`)
        } catch (err) {
          console.error(err);
        }
      }
    },
    async fetch() {
      this.users = await this.$axios.$get('api/users')
    }
  }
</script>

<style scoped>
  .data-length {
    color: grey;
    font-size: 0.5em;
  }
</style>
