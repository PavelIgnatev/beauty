<template>
  <div class="deskbar__select">
    <input
      type="text"
      class="deskbar__city"
      v-model="city"
      @input="activeModalWindowCity = true"
      @click="activeModalWindowCity = true"
      v-click-outside="hideActiveModalWindowCity"
      placeholder="Выберите населённый пункт"
    />
    <div class="deskbar__select_exit" v-if="city" @click="clearCity"></div>
    <transition name="fade">
      <div v-if="activeModalWindowCity" class="select__wrapper">
        <div
          class="deskbar__option deskbar__option-header deskbar__option-geoposition"
          @click="getLocation"
          v-if="this.$localStorage.get('Geolocation') !== 'false'"
        >
          Ваше текущее расположение
        </div>
        <div
          class="deskbar__option deskbar__option-header"
          v-if="
            Object.values(
              $store.state.DadataApi.dadata
                ? JSON.parse($store.state.DadataApi.dadata)
                : [{}]
            )[0].length
          "
        >
          Выберите населённый пункт
        </div>
        <div
          class="deskbar__option deskbar__option-header"
          v-if="
            !Object.values(
              $store.state.DadataApi.dadata
                ? JSON.parse($store.state.DadataApi.dadata)
                : [{}]
            )[0].length
          "
        >
          Популярные поисковые запросы
        </div>
        <!-- Магический for для вывода городов из инпута или популярных городов из state -->
        <div
          :key="request.value"
          @click="selectSuggestion(request.suggestion)"
          v-for="request in Object.values(
            $store.state.DadataApi.dadata
              ? JSON.parse($store.state.DadataApi.dadata)
              : [{}]
          )[0].length
            ? Object.values(
                $store.state.DadataApi.dadata
                  ? JSON.parse($store.state.DadataApi.dadata)
                  : [[]]
              )[0].map((item) =>
                item
                  ? { value: item.value, suggestion: item }
                  : { value: '', data: '' }
              )
            : $store.state.BasicData.PopularQueriesDeskbarInputCity"
          class="deskbar__option"
          :class="{
            deskbar__option_active:
              request.value === $localStorage.get('city') &&
              $localStorage.get('cityCoords').length,
          }"
        >
          {{ request.value }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import _ from "lodash";
import { mapActions } from "vuex";
import ClickOutside from "vue-click-outside";
export default {
  name: "select-city",
  data() {
    return {
      activeModalWindowCity: false,
      city: this.$localStorage.get("city") ?? "",
      shortCity: "",
      cityCoords: [55.7540471, 37.620405],
    };
  },
  methods: {
    ...mapActions(["getCity", "reverseGeocoding"]),
    clearCity() {
      this.city = "";
    },
    selectSuggestion(suggestion) {
      this.city = suggestion.value;
      this.shortCity = suggestion.data.city_with_type;
      this.cityCoords = [suggestion.data.geo_lat, suggestion.data.geo_lon];
    },
    updatePossibleCity: _.debounce(function (value) {
      this.getCity(value);
    }, 200),
    getLocation() {
      if (!navigator.geolocation) {
        this.$localStorage.set("Geolocation", false);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (this.$localStorage.get("Geolocation") === "false") {
            return;
          }
          this.reverseGeocoding([
            position.coords.latitude,
            position.coords.longitude,
          ]).then((response) => {
            const result = JSON.parse(response).suggestions[
              JSON.parse(response).suggestions.length - 1
            ];
            if (!result) {
              this.$localStorage.set("Geolocation", false);
              return;
            }
            this.selectSuggestion(result);
          });
        },
        (error) => {
          this.$localStorage.set("Geolocation", false);
          return error;
        }
      );
    },
    hideActiveModalWindowCity() {
      this.activeModalWindowCity = false;
    },
  },
  watch: {
    city(value) {
      this.$localStorage.set("cityCoords", []);
      this.$localStorage.set("city", "");
      this.updatePossibleCity(value);
    },
    cityCoords(value) {
      this.$localStorage.set("city", this.city);
      this.$localStorage.set("cityCoords", value);
    },
    shortCity(value) {
      this.$localStorage.set("shortCity", value);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang=""></style>
