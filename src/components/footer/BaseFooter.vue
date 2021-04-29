<template>
  <footer class="base-footer">
    <div class="base-footer__category">
      <BaseFooterCategory
        v-for="category in $store.state.BasicData.BaseFooterCategories"
        :key="category.name"
        :footer-category="category"
      ></BaseFooterCategory>
    </div>
    <div class="base-footer__foot">
      <hr />
      <div class="base-footer__wrapper">
        <div class="base-header__name">comfortreat</div>
        <div class="base-footer__year">@comfortreat.com 2021</div>
        <div class="base-footer__social-network">
          <router-link
            to=""
            class="base-footer__link base-footer__vk"
          ></router-link>
          <router-link
            to=""
            class="base-footer__link base-footer__inst"
          ></router-link>
          <router-link
            to=""
            class="base-footer__link base-footer__youtube"
          ></router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import BaseFooterCategory from "./BaseFooterCategory.vue";
export default {
  name: "BaseFooter",
  components: { BaseFooterCategory },
};
</script>
<style lang="sass">
.base-footer
  display: flex
  flex-direction: column
  background: $palette-blue
  min-height: 280px
  margin-top: $sectionmt
  box-sizing: border-box
  padding-top: 30px
  padding-bottom: 15px
  width: 100%
  position: relative
  &__category
    flex: 1
    display: flex
    justify-content: space-between
    color: white
    font-size: 17px
    font-weight: 600
    a
      padding: 5px 0
      font-weight: 400
      font-size: 14px
      color: rgba(255,255,255, 0.8)
      text-decoration: none
  &__wrapper
    padding-top: 5px
    display: flex
    align-items: center
    color: white
    position: relative
  &__social-network
    position: absolute
    right: 0
    display: flex
  &__year
    padding-left: 20px
    font-weight: 600
    padding-bottom: 1px
  &__link
    display: block
    width: 25px
    height: 25px
    text-decoration: none
  &__vk
    background: url(../../assets/img/icons/vk.svg) center center/cover no-repeat
  &__inst
    margin-top: 2px
    width: 21px
    height: 21px
    margin-left: 10px
    background: url(../../assets/img/icons/inst.svg) center center/cover no-repeat
  &__youtube
    margin-left: 10px
    width: 26px
    height: 26px
    background: url(../../assets/img/icons/youtube.svg) center center/cover no-repeat
</style>
