import Vue from "vue";
import YmapPlugin from "vue-yandex-maps";
import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

const settings = {
  apiKey: "e5913362-dbf9-4618-b791-d1198fb82997",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
};

Vue.use(YmapPlugin, settings);

new Vue({
  el: "#app",
  router,
  store,
  YmapPlugin,
  render: (h) => h(App),
});
