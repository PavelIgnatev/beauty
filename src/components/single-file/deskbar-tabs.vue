<template>
  <div class="deskbar__tabs">
    <div
      class="deskbar__tab"
      @click="changeDeskbarIsActive(true)"
      :class="{ deskbar__inactive: !isActiveTab }"
    >
      <img
        src="@/assets/img/icons/bookmark.svg"
        alt="bookmark"
        class="deskbar__icon deskbar__bookmark"
      />
      <div class="deskbar__descr deskbar__descr_1">Бронь услуги</div>
    </div>
    <div
      class="deskbar__tab"
      @click="changeDeskbarIsActive(false)"
      :class="{ deskbar__inactive: isActiveTab }"
    >
      <img
        src="@/assets/img/icons/home.svg"
        alt="home"
        class="deskbar__icon deskbar__home"
      />
      <div class="deskbar__descr">Найти салон</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "deskbar-tabs",
  data() {
    return {
      isActiveTab: true,
    };
  },
  methods: {
    changeDeskbarIsActive(active) {
      this.isActiveTab = active;
      this.$emit("tab-active", active);
    },
  },
};
</script>
<style lang=""></style>
