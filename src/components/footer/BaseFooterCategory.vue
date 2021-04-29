<template>
  <div class="footer-category">
    <div class="footer-category__title">{{ FooterCategory.name }}</div>
    <div class="footer-category__wrapper">
      <router-link
        class="footer-category__essence"
        v-for="item in FooterCategory.value"
        :key="item.name"
        :to="item.href"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseFooterCategory",
  props: { FooterCategory: Object },
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
