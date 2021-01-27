export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-passport',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'themeColor', content: '#4169e1'},
      {name: 'author', content: 'yanes'},
      {name: 'description', content: 'yanes nuxt laravel'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/app.scss', '~/assets/custom.scss'
  ],

  router: {
    linkExactActiveClass: 'active',
  },

  loading: {
    color: 'royalblue',
    height: '3px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-formulate',],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  bootstrapVue: {
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BFormGroup',
      'BInputGroup',
      'BInputGroupAppend',
      'BFormInput',
      'BButton',
      'BTable',
      'BModal',
      'BAlert',
      'BPagination'
    ],
    directives: ['VBModal']
  },

  auth: {
    localStorage: false,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/home'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 3600
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: {url: '/api/login', method: 'post'},
          logout: {url: '/api/logout', method: 'post'},
          user: {url: '/api/user', method: 'get'}
        }
      }
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: `http://lv-pass-vue.test/`
  },

  toast: {
    position: 'top-center',
    duration: 2000,
    register: [
      {

        name: 'login',
        message: 'Login success',
        options: {
          position: 'bottom-right',
        }
      },
      {
        name: 'logout',
        message: 'Logout success',
        options: {
          position: 'bottom-right',
        }
      }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: ['vuelidate'],

  }
}
