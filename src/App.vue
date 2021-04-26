<template>
  <div id="app">
    <div class="loading__wrapper" v-if="loading">
      <fade-loader
        :loading="loading"
        style="
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        "
        :color="color"
      ></fade-loader>
    </div>
    <BaseHeader></BaseHeader>
    <router-view></router-view>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
import BaseHeader from "./components/header/BaseHeader";
import BaseFooter from "./components/footer/BaseFooter";
export default {
  name: "comfortreat",
  components: { BaseHeader, BaseFooter, FadeLoader },
  data() {
    return { loading: true, color: "rgb(0,1,68)" };
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => (this.loading = false));
    }, 1000);
  },
};
</script>
<style lang="sass">
//Перекидывать в fonts.sass не нужно, не будет работать

@font-face
  font-family: 'Avenir'
  font-display: swap
  src: local('avenirnextcyr-regular')
  src: url('./assets/fonts/avenirnextcyr-regular.woff2') format('woff2'),
  font-weight: 400
  font-style: normal

@font-face
  font-family: 'Avenir'
  font-display: swap
  src: local('avenirnextcyr-medium')
  src: url('./assets/fonts/avenirnextcyr-medium.woff2') format('woff2'),
  font-weight: 500
  font-style: normal

@font-face
  font-family: 'Avenir'
  font-display: swap
  src: local('avenirnextcyr-demi')
  src: url('./assets/fonts/avenirnextcyr-demi.woff2') format('woff2'),
  font-weight: 600
  font-style: normal

@font-face
  font-family: 'Musket'
  font-display: swap
  src: local('Musket-regular')
  src: url('./assets/fonts/Musketbold.woff2') format('woff2'),
  font-style: normal

*
  font-family: 'Avenir', sans-serif
  font-weight: 500
.loading__wrapper
  width: 100%
  height: 100%
  position: fixed
  left: 0
  top: 0
  background: white
  z-index: 10000
</style>
