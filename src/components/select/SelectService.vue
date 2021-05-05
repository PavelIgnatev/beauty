<template>
  <div class="deskbar__select">
    <input
      type="text"
      class="deskbar__service"
      v-model="service"
      @input="activeModalWindowService = true"
      @click="activeModalWindowService = true"
      v-click-outside="hideActiveModalWindowService"
      placeholder="Какая услуга вам нужна?"
    />
    <div
      class="deskbar__select_exit"
      v-if="service"
      @click="clearService"
    ></div>
    <div class="select__wrapper" v-if="activeModalWindowService">
      <div class="deskbar__option deskbar__option-header">
        Популярные поисковые запросы
      </div>
      <div
        :value="request"
        :key="request"
        @click="service = request"
        v-for="request in $store.state.BasicData
          .PopularQueriesDeskbarInputService"
        class="deskbar__option"
        :class="{
          deskbar__option_active: request === $localStorage.get('service'),
        }"
      >
        {{ request }}
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "select-city",
  data() {
    return {
      service: this.$localStorage.get("service") || "",
      activeModalWindowService: false,
    };
  },
  methods: {
    hideActiveModalWindowService() {
      this.activeModalWindowService = false;
    },
    clearService() {
      this.service = "";
    },
  },
  watch: {
    service(v) {
      this.$localStorage.set("service", v);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang=""></style>
