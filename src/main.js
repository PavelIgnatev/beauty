import Vue from "vue";
import YmapPlugin from "vue-yandex-maps";
import VueLocalStorage from "vue-localstorage";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "@/style/style.sass";
Vue.config.productionTip = false;

import "leaflet/dist/leaflet.css";
const settings = {
  apiKey: "e5913362-dbf9-4618-b791-d1198fb82997",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
};
Vue.use(Vuelidate);
Vue.use(YmapPlugin, settings);
Vue.use(VueLocalStorage);
new Vue({
  el: "#app",
  router,
  store,
  YmapPlugin,
  render: (h) => h(App),
});
