import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { store } from "./store/store";

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
