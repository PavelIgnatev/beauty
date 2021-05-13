<template>
  <header class="base-header">
    <template
      v-if="
        $route.path.split('/')[1] !== 'business' || !$route.path.split('/')[1]
      "
    >
      <div class="base-header__wrapper">
        <router-link to="/" class="base-header__name base-header__link"
          ><p>comfortreat</p></router-link
        >
        <nav class="base-header__nav">
          <BaseHeaderCategory
            v-for="category in $store.state.BasicData.BaseHeaderCategories"
            :key="category.name"
            :header-category="category"
          ></BaseHeaderCategory>
        </nav>
        <router-link to="/login" class="base-header__login"
          ><img
            class="base-header__login_img"
            src="@/assets/img/icons/user.svg"
            alt="user"
          />
          <p>Войти</p></router-link
        >
      </div>
    </template>
    <template v-else>
      <div class="base-header__wrapper">
        <router-link to="/business" class="base-header__name base-header__link"
          ><p>comfortreat.business</p></router-link
        >
        <nav class="base-header-for-business__nav base-header__nav">
          <router-link
            v-for="category in $store.state.BasicData
              .BaseHeaderCategoriesForBusiness"
            class="base-header__link base-header-for-business__link"
            :key="category.name"
            :to="category.to"
            :class="{
              'base-header__active': $route.path == category.to,
            }"
            >{{ category.name }}</router-link
          >
        </nav>
        <router-link to="/business/login" class="base-header__login"
          ><img
            class="base-header__login_img"
            src="@/assets/img/icons/user.svg"
            alt="user"
          />
          <p>Войти</p></router-link
        >
      </div>
    </template>
  </header>
</template>
<script>
import BaseHeaderCategory from "./BaseHeaderCategory.vue";
export default {
  name: "BaseHeader",
  components: { BaseHeaderCategory },
};
</script>
<style lang="sass">
.base-header
  height: 50px
  background: $palette-blue
  color: $palette-white
  &__wrapper
    align-items: center
    display: flex
    height: 100%
  &__name
    display: flex
    height: 50px
    align-items: center
    font-family: 'Musket'
    color: $palette-red
    font-size: 24px
    p
      display: flex
      align-items: center
      margin: 0
      font-family: 'Musket'
      color: $palette-red
      font-size: 24px
      margin-top: 2px
  &__nav
    height: 100%
    flex: 1
    display: flex
    align-items: center
    justify-content: space-around
    padding: 0 15px
    font-weight: 100
    font-size: 15px
  &__login
    display: flex
    color: $palette-white
    text-decoration: none
    p
      font-size: 15px
      font-weight: 600
    &_img
      margin-right: 10px
      display: block
      width: 20px
</style>
