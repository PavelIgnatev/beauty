<template>
  <div class="base-headers">
    <div
      class="base-header__category base-header__navigation"
      @click="active = true"
      v-click-outside="isActive"
      :class="{ 'base-header__active': active }"
    >
      {{ HeaderCategory.name }}
    </div>
    <transition name="BaseHeaderFade">
      <div class="base-header__list" v-if="active">
        <div class="base-header__list_wrapper">
          <div
            v-for="(item, index) in HeaderCategory.value"
            :key="index"
            @click="routerPush(item)"
            class="base-header__link base-header__to"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "BaseHeaderCategory",
  props: { HeaderCategory: Object },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    isActive() {
      this.active = false;
    },
    routerPush(service) {
      const cityCoords =
        this.$localStorage.get("cityCoords") || "55.75396,37.620393";

      const time = this.$localStorage.get("clock") || "";
      this.$localStorage.set("service", service.name);
      this.$router
        .push({
          path: "/places",
          query: {
            treatment: `${service.to
              .toLowerCase()
              .replace(":", " ")
              .split(" ")
              .join("-")}`,
            geocode: cityCoords,
            timerange: `${
              time.split(" ")[1]
                ? time.split(" ")[1].split("-")[0].replace(":", "")
                : time.split(" ").length === 1 &&
                  time.split(" ")[0].split("-").length > 1
                ? time.split(" ")[0].split("-")[0].replace(":", "")
                : "0000"
            }-to-${
              time.split(" ")[1]
                ? time.split(" ")[1].split("-")[1].replace(":", "")
                : time.split(" ").length === 1 &&
                  time.split(" ")[0].split("-").length > 1
                ? time.split(" ")[0].split("-")[1].replace(":", "")
                : "2400"
            }`,
            date:
              time.split(" ")[0] && time.split(" ")[0].split("/").length === 3
                ? time.split(" ")[0].replace("/", "-").replace("/", "-").trim()
                : "any",
          },
        })
        .catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            Error(err);
          }
        });
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="sass">
.base-headers
  height: 100%
.base-header
  &__to
    width: calc(100% / 3)
  &__navigation
    font-size: 16px
  &__active
    font-size: 16px !important
    color: $palette-red !important
  &__HeaderCategory
    text-align: center
    height: 60px
    display: flex
    align-items: center
    cursor: pointer
    transition: all .5s ease-in-out
  &__list
    z-index: 10000
    position: absolute
    left: 0
    top: 60px
    width: 100%
    height: 290px
    padding-top: 33px !important
    padding-bottom: 33px !important
    background: #010235
    box-sizing: border-box
    &::after
      content: ''
      width: 100%
      height: 3px
      position: absolute
      top: 0
      z-index: 100
      left: 0
      background: #D54327
  &__link
    font-size: 16px
    height: calc(224px / 7)
    z-index: 100
    text-decoration: none
    color: $palette-white
    text-align: left
    display: flex
    align-items: center
    cursor: pointer
  &__list_wrapper
    width: 100%
    height: 100%
    display: flex
    flex-wrap: wrap
    flex-direction: column
  &__category
    display: flex
    align-items: center
    height: 100%
    z-index: 100
    cursor: pointer
  .base-header-for-business__nav
    justify-content: start
    padding: 0 calc(33px / 2) !important
  .base-header-for-business__link
    transition: 0.2s ease-in-out
    padding: 0 calc(33px / 2) !important
.BaseHeaderFade-enter-active, .BaseHeaderFade-leave-active
  transition: opacity .5s ease-in-out
.BaseHeaderFade-enter, .BaseHeaderFade-leave-to
  opacity: 0
</style>
