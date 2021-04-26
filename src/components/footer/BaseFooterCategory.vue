<template>
  <div class="footer-category">
    <div class="footer-category__title">{{ categories.name }}</div>
    <div class="footer-category__wrapper">
      <router-link
        class="footer-category__essence"
        v-for="essence in categories.value"
        :key="essence.name"
        :to="essence.href"
      >
        {{ essence.name }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterCategory",
  props: ["categories"],
};
</script>
<style lang="sass">
.footer-category
    &__wrapper
        display: flex
        flex-direction: column
        margin-top: 5px
    &__essence
        padding: 5px 0
</style>
