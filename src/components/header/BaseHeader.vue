<template>
  <header class="base-header">
    <div class="base-header__wrapper">
      <div class="base-header__name">comfortreat</div>
      <nav class="base-header__nav">
        <BaseHeaderEssence
          v-for="essence in entities"
          :key="essence.name"
          :essence="essence"
        ></BaseHeaderEssence>
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
  </header>
</template>
<script>
import BaseHeaderEssence from "./BaseHeaderEssence";
export default {
  name: "BaseHeader",
  data() {
    return {
      entities: [
        {
          name: "Волосы",
          structure: [
            { name: "Наращивание", toNext: "/next" },
            { name: "Наращивание", toNext: "/next" },
            { name: "Наращивание", toNext: "/next" },
            { name: "Наращивание", toNext: "/next" },
            { name: "Наращивание", toNext: "/next" },
          ],
        },
        {
          name: "Депиляция",
          structure: [
            { name: "Депиляция", toNext: "/next" },
            { name: "Депиляция", toNext: "/next" },
            { name: "Депиляция", toNext: "/next" },
            { name: "Депиляция", toNext: "/next" },
            { name: "Депиляция", toNext: "/next" },
          ],
        },
        {
          name: "Массаж",
          structure: [
            { name: "Массаж", toNext: "/next" },
            { name: "Массаж", toNext: "/next" },
            { name: "Массаж", toNext: "/next" },
            { name: "Массаж", toNext: "/next" },
            { name: "Массаж", toNext: "/next" },
          ],
        },
        {
          name: "Ногти",
          structure: [
            { name: "Ногти", toNext: "/next" },
            { name: "Ногти", toNext: "/next" },
            { name: "Ногти", toNext: "/next" },
            { name: "Ногти", toNext: "/next" },
            { name: "Ногти", toNext: "/next" },
          ],
        },
        {
          name: "Лицо",
          structure: [
            { name: "Лицо", toNext: "/next" },
            { name: "Лицо", toNext: "/next" },
            { name: "Лицо", toNext: "/next" },
            { name: "Лицо", toNext: "/next" },
            { name: "Лицо", toNext: "/next" },
          ],
        },
        {
          name: "Тело",
          structure: [
            { name: "Тело", toNext: "/next" },
            { name: "Тело", toNext: "/next" },
            { name: "Тело", toNext: "/next" },
            { name: "Тело", toNext: "/next" },
            { name: "Тело", toNext: "/next" },
          ],
        },
        {
          name: "Мужчинам",
          structure: [
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
          ],
        },
        {
          name: "Блог",
          structure: [
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
            { name: "Мужчинам", toNext: "/next" },
          ],
        },
      ],
    };
  },
  components: { BaseHeaderEssence },
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
    font-family: 'Musket' !important
    color: $palette-red
    font-size: 24px
    display: flex
    height: 50px
    display: flex
    align-items: center
  &__nav
    flex: 1
    display: flex
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
