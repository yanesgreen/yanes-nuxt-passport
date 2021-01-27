import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate, {
  classes: {
    outer: 'form-group',
    input: 'form-control',
    inputHasErrors: 'is-invalid',
    help: 'form-text text-muted',
    errors: 'list-unstyled text-danger',
    formErrors: 'list-unstyled text-danger',
  }
})
