<template>
  <div class="row">
    <div class="col-12 mb-5 d-flex">
      <h1 class="title">
        Products List
        <small class="data-length">({{ products.length }} data(s))</small>
      </h1>
    </div>
    <div class="col-12">

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <span>Products Table</span>
          <b-button variant="primary" @click="">+ new product</b-button>
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
                     :items="products"
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
                <b-button variant="success" size="sm" @click="">
                  <i class='bx bx-edit'></i>
                </b-button>
                <b-button variant="danger" size="sm" @click="">
                  <i class='bx bxs-trash'></i>
                </b-button>
              </template>

            </b-table>
            <!--pagination-->
            <b-pagination align="right"
                          v-model="pagination.currentPage"
                          :total-rows="totalRows"
                          :per-page="pagination.perPage">
            </b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productsIndex",
    layout: 'backend',
    middleware: 'auth',
    data() {
      return {
        products: [],
        filter: null,
        fields: [
          {key: 'text', sortable: true},
          {key: 'value', sortable: true},
          {key: 'actions', sortable: false},
        ],
        pagination: {perPage: 5, currentPage: 1},
      }
    },
    computed: {
      totalRows() {
        return this.products.length
      }
    },
    async fetch() {
      this.products = await this.$axios.$get('api/products')
    }
  }
</script>

<style scoped>
  .data-length {
    color: grey;
    font-size: 0.5em;
  }
</style>
