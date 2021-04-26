<template>
  <yandex-map
    :controls="controls"
    :scroll-zoom="scrollZoom"
    :coords="coords"
    :zoom="18"
  >
    <ymap-marker :coords="coords" marker-id="123" :icon="markerIcon" />
  </yandex-map>
</template>

<script>
export default {
  data() {
    return {
      controls: ["zoomControl"],
      scrollZoom: true,
      address: undefined,
      didItLoadYMaps: false,
      markerIcon: {
        layout: "default#imageWithContent",
        imageSize: [17, 17],
        imageOffset: [-10, -20],
        content: "",
        contentOffset: [-35, -36],
        contentLayout:
          '<img class="mark" src="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iZnVsbCIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciBpZD0iYSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9Ii41IiBzdGREZXZpYXRpb249Ii45IiBmbG9vZC1jb2xvcj0iIzkzOTM5OCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGNpcmNsZSBjeD0iNDMiIGN5PSI0MyIgcj0iOCIgZmlsbD0iIzk0YzdmZiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZnJvbT0iMTEiIHRvPSI0MCIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjJzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjQzIiBjeT0iNDMiIHI9IjgiIGZpbGw9IiNmZmYiIGZpbHRlcj0idXJsKCNhKSIvPgogICAgPGNpcmNsZSBjeD0iNDMiIGN5PSI0MyIgcj0iNSIgZmlsbD0iIzAxN2FmZiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI1OzYuNTs1IiBiZWdpbj0iMHMiIGR1cj0iNC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K"></img>',
      },
    };
  },
  props: ["coords"],
};
</script>
<style lang="sass">
.ymaps-2-1-78-image-with-content-content
  width: 86px !important
  height: 86px !important
.ymaps-2-1-78-map-copyrights-promo, .ymaps-2-1-78-zoom__scale
  display: none !important
.ymaps-2-1-78-copyright__wrap
  position: absolute
  bottom: -10px
  right: 0
.ymaps-2-1-78-zoom
  height: auto !important
@keyframes pulse
  0%
    box-shadow: 0 0 0 0 rgba(#017aff, 0.6)

  70%
    box-shadow: 0 0 0 40px rgba(#017aff, 0)

  100%
    box-shadow: 0 0 0 0 rgba(#017aff, 0)

body
  margin: 0
#app
  width: 100vw
  height: 100vh
.ymap-container
  height: 100vh
  width: 50vw
  margin-left: auto
</style>
