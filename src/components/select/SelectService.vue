<template>
  <div class="deskbar__select">
    <input
      type="text"
      class="deskbar__service"
      v-model="service"
      @input="activeModalWindowService = true"
      @click="
        activeModalWindowService = true;
        prefix(service);
      "
      v-click-outside="hideActiveModalWindowService"
      placeholder="Какая услуга вам нужна?"
    />
    <div
      class="deskbar__select_exit"
      v-if="service"
      @click="clearService"
    ></div>
    <div class="select__wrapper" v-if="activeModalWindowService">
      <template v-if="service.length < 1">
        <div class="deskbar__option deskbar__option-header">
          Популярные поисковые запросы
        </div>
        <div
          :value="request"
          :key="request"
          @click="service = request"
          v-for="request in Object.keys(
            $store.state.BasicData.PopularQueriesDeskbarInputService
          )"
          class="deskbar__option"
          :class="{
            deskbar__option_active: request === $localStorage.get('service'),
          }"
        >
          {{ request }}
        </div>
      </template>
      <template v-else-if="matches.length > 0">
        <div class="deskbar__option deskbar__option-header">
          Подходящие методы лечения
        </div>
        <div
          :value="request"
          :key="request + index"
          @click="service = request"
          v-for="(request, index) in matches"
          class="deskbar__option"
          :class="{
            deskbar__option_active: request === $localStorage.get('service'),
          }"
        >
          {{ request }}
        </div>
      </template>
      <template v-else>
        <div
          class="deskbar__option deskbar__option-header deskbar__option_not-found"
        >
          По данному запросу ничего не найдено
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import RusToLatin from "../../services/RusToLatin.js";
export default {
  name: "select-city",
  data() {
    return {
      service: this.$localStorage.get("service") || "",
      activeModalWindowService: false,
      matches: "",
    };
  },
  methods: {
    hideActiveModalWindowService() {
      this.activeModalWindowService = false;
    },
    clearService() {
      this.service = "";
    },
    prefix(v) {
      let prefixTextToFind = RusToLatin(v)?.toLowerCase();
      let matches = Object.keys(
        this.$store.state.BasicData.AllQueriesDeskbarInputService
      ).filter((stackValue) => {
        if (stackValue) {
          return (
            stackValue.toLowerCase().substring(0, prefixTextToFind?.length) ===
            prefixTextToFind
          );
        }
      });
      this.matches = matches;
    },
  },
  watch: {
    service(v) {
      this.$localStorage.set("service", v);
      this.prefix(v);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang=""></style>
