<template>
  <div id="app">
    <yandex-map
      :controls="controls"
      :scroll-zoom="scrollZoom"
      :coords="coords"
      :zoom="18"
      @click="onClick"
    >
      <ymap-marker
        :balloon-template="balloonTemplate"
        :coords="coords"
        marker-id="123"
        :icon="markerIcon"
      />
    </yandex-map>
  </div>
</template>

<script>
import { loadYmap } from "vue-yandex-maps";
export default {
  /* eslint-disable no-undef */
  data() {
    return {
      coords: [0, 0],
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
  async mounted() {
    const settings = {
      apiKey: "5913362-dbf9-4618-b791-d1198fb82997",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1",
    };
    let didItLoadYMaps = await loadYmap({ ...settings, debug: true });
    Promise.all([didItLoadYMaps]).then(() => {
      this.didItLoadYMaps = true;
    });
  },
  created() {
    let coords = JSON.parse(localStorage.getItem("coords"));
    if (coords) {
      this.coords = coords;
    } else {
      this.geoPosition();
    }
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Здесь название салона</h1>
        <p>Координаты, которые отправляются на бекенд: ${this.coords}</p>
        <h3>А это, например, картинка салона от создателя карточки:</h3>
        <div style="display: flex;">
         <img style="width: 200px;height: 200px;" src="https://www.vbiznese.ru/upload/iblock/0ee/0eeb32d9f4dc6b95a5b7d6f175c2b760.jpg">
        <img style="width: 200px;height: 200px;" src="https://cloudshop.ru/content/bl-content/uploads/pages/7fe62f303db12971918150c496d928ac/%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B.jpg">
        </div>
      `;
    },
  },
  methods: {
    onClick(e) {
      this.coords = e.get("coords");
    },
    geoPosition() {
      if (!navigator.geolocation) {
        console.log("Не поддерживается ваш браузер");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.coords = [position.coords.latitude, position.coords.longitude];
        },
        (error) => {
          console.log(error);
        }
      );
    },
    addressDefinition() {
      ymaps.geocode(this.coords).then((res) => {
        let location = res.geoObjects.get(0);
        this.address = location.getAddressLine();
      });
    },
  },
  watch: {
    coords() {
      localStorage.setItem("coords", JSON.stringify(this.coords));
      if (this.didItLoadYMaps) {
        this.addressDefinition();
      }
    },
  },
};
</script>
