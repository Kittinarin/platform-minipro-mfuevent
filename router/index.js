import vuetifyModule from "@nuxtjs/vuetify";
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/index.vue';
import ProductDetails from '../pages/product/ProductDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true, // กำหนดให้ใช้ props แทน params
  },
  
  
];

const router = new VueRouter({
  routes,
});

export default router;