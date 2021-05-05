import Vue from "vue";
import Vuex from "vuex";
import BasicData from "./BasicData";
import DadataApi from "./DadataApi";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { BasicData, DadataApi },
});
