import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "the-new-css-reset";
import './index.css'

import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css'



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueGoodTablePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
