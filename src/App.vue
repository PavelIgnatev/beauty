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
    <l-map
      v-if="$route.query.geocode"
      style="height: 90vh; width: 45%; margin-left: auto"
      :zoom="zoom"
      :center="$route.query.geocode.split(',') || [55.75396, 37.620393]"
    >
      <l-tile-layer :attribution="attribution" :url="url"></l-tile-layer>
      <l-marker
        :lat-lng="$route.query.geocode.split(',') || [55.75396, 37.620393]"
        :icon="icon"
        ><l-popup @click="innerClick">
          <div @click="innerClick">
            I am a popup
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup></l-marker
      >
    </l-map>
    <router-view></router-view>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
import BaseHeader from "./components/header/BaseHeader";
import BaseFooter from "./components/footer/BaseFooter";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { icon } from "leaflet";
export default {
  name: "comfortreat",
  data() {
    return {
      loading: true,
      color: "rgb(0,1,68)",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 15,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: icon({
        iconUrl:
          "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iZnVsbCIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciBpZD0iYSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9Ii41IiBzdGREZXZpYXRpb249Ii45IiBmbG9vZC1jb2xvcj0iIzkzOTM5OCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGNpcmNsZSBjeD0iNDMiIGN5PSI0MyIgcj0iOCIgZmlsbD0iIzk0YzdmZiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZnJvbT0iMTEiIHRvPSI0MCIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjJzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjQzIiBjeT0iNDMiIHI9IjgiIGZpbGw9IiNmZmYiIGZpbHRlcj0idXJsKCNhKSIvPgogICAgPGNpcmNsZSBjeD0iNDMiIGN5PSI0MyIgcj0iNSIgZmlsbD0iIzAxN2FmZiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI1OzYuNTs1IiBiZWdpbj0iMHMiIGR1cj0iNC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K",
        iconSize: [86, 86],
        iconAnchor: [43, 43],
      }),
    };
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => (this.loading = false));
    }, 1000);
  },
  methods: {
    innerClick() {
      alert("Click!");
    },
  },
  components: {
    BaseHeader,
    BaseFooter,
    FadeLoader,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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
