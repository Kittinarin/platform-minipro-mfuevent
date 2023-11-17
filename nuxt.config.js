import colors from 'vuetify/es5/util/colors';

export default {
  generate: {
    routes: function () {
      const products = 'http://localhost:8080/api/products';
      return products.map(product => `/product/${product._id}`);
    },
  },
  ssr: false,
  head: {
    title: 'Equipment Ease',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/rent_icon.png' },
    ],
  },
  css: [],
  plugins: [
    { src: "~/plugins/datetimePicker.js", mode: "client" },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://localhost:3000/api',
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
  router: {
    routes: [
      {
        path: '/create-customer',
        component: '~/pages/createCustomer.vue',
      },
      // Add other routes as needed
    ],
  },
};
