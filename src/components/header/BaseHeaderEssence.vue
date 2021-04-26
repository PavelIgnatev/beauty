<template>
  <div class="base-header__essence" :class="{ 'base-header__active': active }">
    {{ essence.name }}
    <transition name="fade">
      <div class="base-header__list_link" v-if="active">
        <div class="base-header__list_wrapper">
          <router-link
            v-for="(item, index) in essence.structure"
            :to="item.toNext"
            :key="index"
            class="base-header__link"
            >{{ item.name }}</router-link
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "BaseHeaderEssence",
  props: ["essence"],
  data() {
    return {
      active: false,
    };
  },
};
</script>
<style lang="sass">
.base-header
  &__active
    color: $palette-orange
  &__essence
    text-align: center
    height: 50px
    display: flex
    align-items: center
    cursor: pointer
    transition: all .5s ease-in-out
  &__list_link
    position: absolute
    left: 0
    top: 50px
    width: 100vw
    height: 250px
    background: $palette-blue
    padding: 50px 0
    box-sizing: border-box
    &::after
      content: ''
      position: absolute
      width: 100vw
      height: 1px
      background: white
      transform: scaleY(0.2)
      top: 0
      left: 0
  &__link
    text-decoration: none
    color: $palette-white
    text-align: left
    height: 20px
  &__list_wrapper
    display: flex
    flex-direction: column
    justify-content: space-between

.fade-enter-active, .fade-leave-active
  transition: opacity .5s ease-in-out
.fade-enter, .fade-leave-to
  opacity: 0
</style>
