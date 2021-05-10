import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "@/pages/LandingPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let treatment = to.query.treatment || "fully";
  let geocode = to.query.geocode || "55.75396,37.620393";
  let timerange = to.query.timerange || "0000-to-2400";
  let date = to.query.date || "any";

  if (
    (!to.query.date ||
      !to.query.timerange ||
      !to.query.geocode ||
      !to.query.treatment) &&
    to.path == "/places"
  ) {
    router.push({
      path: "/places",
      query: { treatment, geocode, timerange, date },
    });
  }
  next();
});
export default router;
