import Vue from "vue";

import App from "./App.vue";

import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);


import 'fullpage.js/dist/fullpage.css';

new Vue({
  render: (h) => h(App),
}).$mount("#app");
