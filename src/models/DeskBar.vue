<template>
  <div class="deskbar">
    <div class="deskbar__selection">
      <div
        class="deskbar__request"
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
        class="deskbar__request"
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
    <transition name="fade" mode="out-in">
      <div class="deskbar__wrapper" v-if="isActiveTab" key="deskbar__wrapper_1">
        <div class="deskbar__input">
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
            class="deskbar__input_exit"
            v-if="service"
            @click="clearService"
          ></div>
          <select
            @change="onChangeSelectService($event)"
            class="deskbar__select"
            v-if="activeModalWindowService"
            multiple
          >
            <option
              :value="request"
              :key="request"
              v-for="request in $store.state.BasicData
                .PopularQueriesDeskbarInput"
              class="deskbar__option"
              :class="{ deskbar__option_active: request == service }"
            >
              {{ request }}
            </option>
          </select>
        </div>
        <div class="deskbar__input">
          <vue-dadata
            :model.sync="city"
            placeholder="Выберите ваш населённый пункт"
            classes="deskbar__city"
            :query="query"
            :onChange="selectSuggestion"
            highlightClassName="deskbar__city_text"
            token="8e14d61356368799079f0d7faf37b4cef48ace2a"
          ></vue-dadata>
        </div>
        <div class="deskbar__input">
          <date-pick
            class="deskbar__date"
            value="Когда вам будет удобно?"
            v-model="recordingDate"
          ></date-pick>
          <div class="deskbar__input_exit" v-if="recordingDate"></div>
        </div>
      </div>
      <div class="deskbar__wrapper" key="deskbar__wrapper_2" v-else>
        <div class="deskbar__input">
          <input
            type="text"
            class="deskbar__name"
            placeholder="Введите название салона"
            v-model="salonName"
          />
          <div class="deskbar__input_exit"></div>
        </div>
      </div>
    </transition>
    <button class="deskbar__button">Найти подходящий салон</button>
  </div>
</template>
<script>
import VueDadata from "vue-dadata";
import ClickOutside from "vue-click-outside";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
export default {
  name: "deskbar",
  data() {
    return {
      isActiveTab: true,
      service: this.$localStorage.get("service") ?? "",
      query: this.$localStorage.get("city") ?? "",
      activeModalWindowService: false,
      city: "",
      cityCoords: [55.7540471, 37.620405], //Координаты города Москва
      salonName: "",
      recordingDate: "",
    };
  },
  methods: {
    clearService() {
      this.service = "";
    },
    hideActiveModalWindowService() {
      this.activeModalWindowService = false;
    },
    changeDeskbarIsActive(v) {
      this.isActiveTab = v;
    },
    onChangeSelectService(e) {
      this.service = e.target.value;
    },
    selectSuggestion(suggestion) {
      this.city = suggestion.value;
      this.cityCoords = [suggestion.data.geo_lat, suggestion.data.geo_lon];
    },
  },
  watch: {
    service(v) {
      this.$localStorage.set("service", v);
    },
    isActiveTab() {
      this.hideActiveModalWindowService();
    },
    city(value) {
      this.$localStorage.set("city", value);
    },
    cityCoords(value) {
      this.$localStorage.set("cityCoords", value);
    },
  },
  directives: {
    ClickOutside,
  },
  components: {
    "vue-dadata": VueDadata,
    DatePick,
  },
};
</script>
<style lang="sass">
.deskbar
  color: #1d1d1d
  box-sizing: border-box
  padding: 25px 13px
  width: 360px
  height: 290px
  background: white
  position: relative

  .vdpComponent.vdpWithInput>input
    padding-right: 0
    width: 100%
    height: 100%
    font-size: 14px
    font-weight: 500
    color: #1d1d1d
    &::placeholder
      color: #1d1d1d
      font-size: 14px
  .vdpClearInput
    z-index: 100
  .vdpFloating .vdpInnerWrap
    max-width: 34em
  .vdpPeriodControl_day
    select
      display: none
  .vdpPeriodControl_month
    select, option
      font-size: 15px
      width: 100px
      text-align: center
      font-family: 'Avenir'
      border: none
      outline: none
      padding: 0
      margin: 0
      &:focus, &:active, &:hover
        outline: 0
        outline-offset: 0
        border: 0
      &::selection
        background: transparent
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
    bottom: 25px
    width: calc(100% - 40px)
    left: 20px
    background: $palette-green
    color: $palette-white
    font-weight: 600
    height: 25px
    font-size: 15px
    cursor: pointer
  &__option
    position: relative
    color: #1d1d1d
    &::before
      content: ''
      width: 10px
      height: 10px
      right: 10px
      top: 50%
      transform: translateY(-50%)
      position: absolute
      border: 2px solid #d1d1d1
      border-radius: 100%
    &:nth-child(1)
      font-weight: 600
      font-size: 14.5px
      color: #1d1d1d
      display: block
      pointer-events: none
      &::before
        position: static
        content: ''
        border: 0
        font-size: 0
        width: 0px
        height: 0px
    &_active
      &::before
        content: '•'
        font-size: 16px
        display: flex
        justify-content: center
        align-items: center
        color: $palette-green
        border: 2px solid $palette-green
      &:nth-child(1)
        &::before
          position: static
          content: ''
          border: 0
          font-size: 0
          width: 0px
          height: 0px
  &__select
    position: absolute
    width: calc(100% - 12px)
    left: 5px
    top: 46px
    height: 200px
    z-index: 100
    border: none
    option
      padding: 12px 10px
      font-size: 15px
      position: relative
      cursor: pointer
      &::after
        content: ''
        width: calc(100% - 20px)
        height: 1px
        background: #1d1d1d
        position: absolute
        bottom: 0
        left: 10px
        transform: scaleY(0.1)
      &:hover
        color: #1d1d1d
        &::after
          content: ''
          width: calc(100% - 20px)
          height: 1px
          background: #1d1d1d
          position: absolute
          bottom: 0
          left: 10px
          transform: scaleY(0.1)
      &:focus, &:active
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
        background-color: transparent
        color: #1d1d1d
  &__bookmark
    width: 22px
  &__home
    width: 25px
  &__wrapper
    margin-bottom: 15px
    .deskbar
      &__input
        width: 100%
        font-size: 14px
        position: relative
        .deskbar__date, .deskbar__city, .deskbar__service, .deskbar__name
          box-sizing: border-box
          width: calc(100% - 12px)
          color: #1d1d1d
          padding: 9px
          padding-right: 34px
          height: 36px
          margin: 5px
          border: 1px solid $palette-green
          padding-left: 35px
          &::placeholder
            color: #1d1d1d
            font-size: 14px
        .deskbar__city
          &_text
            background: rgba(0,0,0,0)
            color: #1d1d1d
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
                color: #1d1d1d
                &::placeholder
                  color: #1d1d1d
                  font-size: 14px
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
              &::before
                content: 'Выберите ваш населённый пункт'
                top: 14px
                font-weight: 600
                font-weight: 600
                font-size: 14.5px
                color: #1d1d1d
                height: 100%
                position: absolute
                left: 10px
              &-item
                background: white
                position: relative
                padding: 14px 10px
                &::after
                  content: ''
                  width: calc(100% - 20px)
                  height: 1px
                  background: #1d1d1d
                  position: absolute
                  bottom: 0
                  left: 10px
                  transform: scaleY(0.1)
                &:hover
                  color: #1d1d1d
                  background: rgba(0,0,0,0)
                  &::after
                    content: ''
                    width: calc(100% - 20px)
                    height: 1px
                    background: #1d1d1d
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
                    background: #1d1d1d
                    position: absolute
                    top: 0
                    left: 10px
                    transform: scaleY(0.1)
                    &:hover
                      color: #1d1d1d
                      background: rgba(0,0,0,0)
                      &::before
                        content: ''
                        width: calc(100% - 20px)
                        height: 1px
                        background: #1d1d1d
                        position: absolute
                        bottom: 0
                        left: 10px
                        transform: scaleY(0.1)
        &::before
          content: ""
          width: 18px
          height: 18px
          background-size: 18px 18px
          position: absolute
          left: 13px
          top: 50%
          transform: translateY(-50%)
          z-index: 10
        &:nth-child(1)
          &::before
            left: 15px
            width: 16px
            height: 16px
            background-size: 16px 16px
            background-image: url('../assets/img/icons/search.svg')
        &:nth-child(2)
          &::before
            background-image: url('../assets/img/icons/place.svg')
        &:nth-child(3)
          &::before
            left: 14px
            width: 16px
            height: 16px
            background-size: 16px 16px
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
            width: 1px
            background-color: black
          &:before
            transform: rotate(45deg)
          &:after
            transform: rotate(-45deg)

  &__inactive
    .deskbar
      &__bookmark, &__home, &__descr
        transition: all .2s ease-in-out
        filter: brightness(0) invert(0.7)
  &__selection
    display: flex
    margin-bottom: 10px
  &__request
    cursor: pointer
    width: 50%
    text-align: center
  &__descr
    color: $palette-green
    font-weight: 600
    padding-top: 5px
    &_1
      padding-top: 8px
.fade-enter-active, .fade-leave-active
  transition: opacity .2s ease-in-out

.fade-enter, .fade-leave-to
  opacity: 0
</style>
