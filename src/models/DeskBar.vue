<template>
  <div class="deskbar">
    <deskbar-tabs @tab-active="tabActive"></deskbar-tabs>
    <transition name="fade" mode="out-in">
      <div class="deskbar__wrapper" v-if="isActiveTab" key="deskbar__wrapper_1">
        <select-service />
        <select-city />
        <select-clock />
      </div>
      <div class="deskbar__wrapper" key="deskbar__wrapper_2" v-else>
        <div class="deskbar__select">
          <input
            type="text"
            class="deskbar__name"
            placeholder="Введите название салона"
            v-model="salonName"
          />
          <div class="deskbar__select_exit"></div>
        </div>
      </div>
    </transition>
    <button class="deskbar__button">Найти подходящий салон</button>
  </div>
</template>
<script>
import SelectService from "../components/select/SelectService.vue";
import SelectCity from "../components/select/SelectCity.vue";
import SelectClock from "../components/select/SelectClock.vue";
import DeskbarTabs from "../components/single-file/deskbar-tabs.vue";
export default {
  name: "deskbar",
  data() {
    return {
      isActiveTab: true,
      salonName: "",
    };
  },

  methods: {
    tabActive: function (active) {
      this.isActiveTab = active;
    },
  },
  components: { SelectClock, SelectService, SelectCity, DeskbarTabs },
};
</script>
<style lang="sass">
.deskbar
  color: #2d2d2d
  box-sizing: border-box
  padding: 25px 13px
  width: 380px
  height: 290px
  background: white
  position: relative
  &__clock
    cursor: pointer
  &__geolocation
    display: flex
    align-items: center
    position: absolute
    width: calc(100% - 10px)
    left: 4px
    background: white
    height: 40px
    z-index: 1000
    top: 43px
    box-sizing: border-box
    font-size: 15px
    padding-left: 10px
    cursor: pointer
    img
      display: block
      width: 16px
      margin-right: 11px
    p
      font-size: 14.5px
      font-weight: 600
  &__button
    display: block
    position: absolute
    box-sizing: border-box
    padding-bottom: 2px
    bottom: 20px
    width: calc(100% - 40px)
    left: 20px
    background: $palette-green
    color: $palette-white
    font-weight: 600
    height: 28px
    font-size: 15px
    cursor: pointer
  &__option
    &::before
      content: ''
      width: 12px
      height: 12px
      right: 14px
      top: 50%
      transform: translateY(-50%)
      position: absolute
      border: 2px solid #d1d1d1
      border-radius: 100%
    &_active
      &::before
        content: '•'
        font-size: 16px
        display: flex
        justify-content: center
        align-items: center
        color: $palette-green
        border: 2px solid $palette-green
  .select__wrapper
    overflow-y: auto
    box-shadow: 0 40px 80px rgb(0 0 0 / 25%)
    position: absolute
    width: calc(100% - 12px)
    left: 5px
    top: 42px
    max-height: 270px
    background: white
    z-index: 100
    border: none
    .deskbar__option
      background: white
      padding: 15px
      padding-right: 35px
      font-size: 15px
      color: #2d2d2d
      position: relative
      cursor: pointer
      &::after
        content: ''
        width: calc(100% - 20px)
        height: 1px
        background: #2d2d2d
        position: absolute
        bottom: 0
        left: 14px
        transform: scaleY(0.1)
      &:hover
        color: #2d2d2d
        &::after
          content: ''
          width: calc(100% - 20px)
          height: 1px
          background: #2d2d2d
          position: absolute
          bottom: 0
          left: 14px
          transform: scaleY(0.1)
      &:nth-child(1), &:last-child
        &::after
          display: none
      &:focus, &:active
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
        background-color: transparent
        color: #2d2d2d
  &__bookmark
    width: 22px
  &__home
    width: 25px
  &__wrapper
    margin-bottom: 15px
    .deskbar
      &__select
        width: 100%
        font-size: 15px
        position: relative
        .deskbar__clock, .deskbar__city, .deskbar__service, .deskbar__name
          box-sizing: border-box
          width: calc(100% - 12px)
          color: #2d2d2d
          padding: 8px
          padding-right: 34px
          height: 36px
          margin: 6px 5px
          border: 1px solid $palette-green
          padding-left: 37px
          &::placeholder
            color: #2d2d2d
            font-size: 15px
        .deskbar__city
          &_text
            background: rgba(0,0,0,0)
            color: #2d2d2d
          .vue-dadata
            &__container
              width: 276px
              height: 16px
            &__search
              width: 276px
              height: 16px
              input
                text-decoration: none
                padding: 0
                height: 16px
                padding-right: 25px
                border: 0
                box-shadow: none
                color: #2d2d2d
                &::placeholder
                  color: #2d2d2d
                  font-size: 15px
                &:focus
                  border: 0
            &__suggestions
              max-height: 200px
              overflow: auto
              z-index: 100
              position: absolute
              left: -36px
              top: 31px
              width: 322px
              background: white
              &-item
                background: white
                position: relative
                padding: 15px 10px
                &::after
                  content: ''
                  width: calc(100% - 20px)
                  height: 1px
                  background: #2d2d2d
                  position: absolute
                  bottom: 0
                  left: 10px
                  transform: scaleY(0.1)
                &:hover
                  color: #2d2d2d
                  background: rgba(0,0,0,0)
                  &::after
                    content: ''
                    width: calc(100% - 20px)
                    height: 1px
                    background: #2d2d2d
                    position: absolute
                    bottom: 0
                    left: 10px
                    transform: scaleY(0.1)
                &:nth-child(1)
                  margin-top: 40px
                  &::before
                    content: ''
                    width: calc(100% - 20px)
                    height: 1px
                    background: #2d2d2d
                    position: absolute
                    top: 0
                    left: 10px
                    transform: scaleY(0.1)
                    &:hover
                      color: #2d2d2d
                      background: rgba(0,0,0,0)
                      &::before
                        content: ''
                        width: calc(100% - 20px)
                        height: 1px
                        background: #2d2d2d
                        position: absolute
                        bottom: 0
                        left: 10px
                        transform: scaleY(0.1)
        &::before
          content: ""
          width: 22px
          height: 22px
          background-size: 22px 22px
          position: absolute
          left: 13px
          top: 50%
          transform: translateY(-50%)
          z-index: 10
        &:nth-child(1)
          &::before
            left: 15px
            background-image: url('../assets/img/icons/search.svg')
        &:nth-child(2)
          &::before
            background-image: url('../assets/img/icons/place.svg')
        &:nth-child(3)
          &::before
            background-image: url('../assets/img/icons/calendar.svg')
        &_exit
          position: absolute
          top: 50%
          transform: translateY(-50%)
          right: 8px
          width: 30px
          height: 34px
          cursor: pointer
          &::before, &::after
            position: absolute
            top: 25%
            left: 15px
            content: ' '
            height: 17px
            width: 1.4px
            background-color: #7d7d7d
          &:before
            transform: rotate(45deg)
          &:after
            transform: rotate(-45deg)
          &:hover
            &::before, &::after
              background-color: black

  &__inactive
    .deskbar
      &__bookmark, &__home, &__descr
        transition: all .2s ease-in-out
        filter: brightness(0) invert(0.7)
  &__tabs
    display: flex
    margin-bottom: 10px
  &__tab
    cursor: pointer
    width: 50%
    text-align: center
  &__descr
    color: $palette-green
    font-weight: 600
    padding-top: 5px
    &_1
      padding-top: 8px

.deskbar
  &__option-header
    font-size: 14px !important
    font-weight: 600
    color: rgba(0,0,0,.85) !important
    display: block
    padding-top: 16px !important
    padding-bottom: 7px !important
    pointer-events: none
    &::before
      position: static
      content: ''
      border: 0
      font-size: 0
      width: 0px
      height: 0px
    &::after
      display: none
  &__option-geoposition
    pointer-events: auto
    position: relative
    font-size: 14px !important
    padding: 18px !important
    padding-left: 40px !important
    padding-bottom: 5px !important
    color: #010244 !important
    &::before
      position: absolute
      left: 16px
      top: 15px
      transform: rotate(-50deg)
      width: 18px
      height: 18px
      background-size: 18px 18px
      background-image: url('../assets/img/icons/right-arrow.svg')
.fade-enter-active, .fade-leave-active
  transition: opacity .2s ease-in-out !important

.fade-enter, .fade-leave-to
  opacity: 0.5
</style>
