<template>
  <form
    class="business-registration__main-step"
    @submit.prevent="submitHandler"
  >
    <div class="business-registration__header">Какое у вас заведение?</div>
    <div class="business-registration__step" style="margin-bottom: 12px">
      Шаг регистрации 3 из 4
    </div>
    <transition name="fade">
      <div
        class="business-registration__subheader"
        v-if="activeServiceHome === 'no'"
      >
        Выберите тип вашего заведения, <br />
        оно является специализированным или домашним?
      </div>
    </transition>
    <div class="business-registration__services" style="max-width: 372px">
      <div
        class="business-registration__service"
        @click="activeServiceHome = true"
        :class="{
          'business-registration__service_active': activeServiceHome == true,
        }"
      >
        <div class="business-registration__img">
          <svg
            width="80"
            height="75"
            viewBox="0 0 80 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M67 24.8999H12.3C10.3 24.8999 8.69995 26.4999 8.69995 28.4999V63.4999C8.69995 65.4999 10.3 67.0999 12.3 67.0999H45.7V37.1999C45.7 35.5999 47 34.1999 48.7 34.1999H59.7C61.3 34.1999 62.7 35.4999 62.7 37.1999V66.8999H67C69 66.8999 70.5999 65.2999 70.5999 63.2999V28.2999C70.4999 26.4999 68.9 24.8999 67 24.8999Z"
                :stroke="
                  activeServiceHome == false || activeServiceHome == 'no'
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path
                d="M38.2999 51.1H15.7999C14.7999 51.1 13.8999 50.3001
              13.8999 49.2001V36.2001C13.8999 35.2001 14.6999 34.3 15.7999
              34.3H38.2999C39.2999 34.3 40.1999 35.1001 40.1999
              36.2001V49.2001C40.1999 50.2001 39.2999 51.1 38.2999 51.1Z"
                :stroke="
                  activeServiceHome == false || activeServiceHome == 'no'
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path
                d="M72 18.3V13.8C72 10.2 68.5 7.30005 64.2 7.30005H14.3C10 7.30005 6.50005 10.2 6.50005 13.8V18.8L1.30005 29.7001C1.30005 29.7001 1.30005 29.7 1.30005 29.8C1.50005 30 2.40005 30.9 4.10005 31C5.20005 31 6.30005 30.7 7.00005 30.1C7.10005 30 7.40005 30 7.60005 30.1C8.00005 30.4 8.80005 30.9 10 31C11.1 31 12.2 30.7 12.9 30.1C13 30 13.3 30 13.5 30.1C13.9 30.4 14.7 31 16 31C17.1 31 18.2 30.7 18.9 30.1C19 30 19.3 30 19.5 30.1C19.9 30.4 20.7001 31 22 31C23.1 31 24.2 30.7 24.9 30.1C25 30 25.3 30 25.5 30.1C25.9 30.4 26.7001 31 28 31C29.1 31 30.2 30.7 30.9 30.1C31 30 31.3 30 31.5 30.1C31.9 30.4 32.7001 31 34 31C35.1 31 36.2001 30.7 36.9001 30.1C37 30 37.3 30 37.5 30.1C37.9001 30.4 38.7001 31 40 31C41.1 31 42.2001 30.7 42.9001 30.1C43 30 43.3 30 43.5 30.1C43.9001 30.4 44.7001 31 46 31C47.1 31 48.2001 30.7 48.9001 30.1C49 30 49.3 30 49.5 30.1C49.9001 30.4 50.7001 31 52 31C53.1 31 54.2001 30.7 54.9001 30.1C55 30 55.3 30 55.5 30.1C55.9001 30.4 56.7001 31 58 31C59.1 31 60.2001 30.7 60.9001 30.1C61 30 61.3 30 61.5 30.1C61.9001 30.4 62.7001 31 64 31C65.1 31 66.2001 30.7 66.9 30.1C67 30 67.3 30 67.5 30.1C67.9 30.4 68.7 31 70 31C71.1 31 72.2001 30.7 72.9 30.1C73 30 73.3 30 73.5 30.1C73.9 30.4 74.7 31 76 31C77.3 31 78.5 30.6 79.1 29.8C79.1 29.8 79.1 29.8001 79.1 29.7001L72 18.3Z"
                fill="white"
                :stroke="
                  activeServiceHome == false || activeServiceHome == 'no'
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path
                d="M71.8001 17.8H29.1001"
                :stroke="
                  activeServiceHome == false || activeServiceHome == 'no'
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45.8 66.8999H53.3"
                :stroke="
                  activeServiceHome == false || activeServiceHome == 'no'
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path
                d="M28.4999 49.3H14.3999V52.9001H28.4999V49.3Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="79.8" height="74.7" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="business-registration__description">Салон</div>
      </div>
      <div
        class="business-registration__service"
        @click="activeServiceHome = false"
        :class="{
          'business-registration__service_active': activeServiceHome == false,
        }"
      >
        <div class="business-registration__img">
          <svg
            width="84"
            height="75"
            viewBox="0 0 84 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M69.0999 28.8999H14.4999C12.4999 28.8999 10.8999 30.4999 10.8999 32.4999V67.4999C10.8999 69.4999 12.4999 71.0999 14.4999 71.0999H47.9999V41.1999C47.9999 39.5999 49.2999 38.1999 50.9999 38.1999H61.9999C63.5999 38.1999 64.9999 39.4999 64.9999 41.1999V70.8999H69.1999C71.1999 70.8999 72.7999 69.2999 72.7999 67.2999V32.2999C72.6999 30.4999 71.0999 28.8999 69.0999 28.8999Z"
                :stroke="
                  activeServiceHome == true || activeServiceHome
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path
                d="M40.6 55H17.7C16.8 55 16 54.1999 16 53.2999V39.9C16 39 16.8 38.2 17.7 38.2H40.6C41.5 38.2 42.3 39 42.3 39.9V53.2999C42.3 54.2999 41.5 55 40.6 55Z"
                :stroke="
                  activeServiceHome == true || activeServiceHome
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path
                d="M82.2999 32.5999L62.9999 18.5999V4.5999C62.9999 4.0999 62.5999 3.7999 61.9999 3.7999H52.9999C52.4999 3.7999 51.9999 4.1999 51.9999 4.5999V10.6999L42.5999 3.9999C42.1999 3.6999 41.4999 3.6999 41.0999 3.9999L1.49989 32.5999C0.799892 33.0999 1.29989 33.9999 2.29989 33.9999H81.5999C82.4999 33.9999 82.9999 33.0999 82.2999 32.5999Z"
                fill="white"
                :stroke="
                  activeServiceHome == true || activeServiceHome
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path d="M43.3 29.8999H17V34.9999H43.3V29.8999Z" fill="white" />
              <path
                d="M48 70.8999H56.2"
                :stroke="
                  activeServiceHome == true || activeServiceHome
                    ? '#1E3958'
                    : '#bd3c2b'
                "
                stroke-miterlimit="10"
              />
              <path d="M30.6 53.2H16.5V56.7999H30.6V53.2Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="83.5" height="74.7" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="business-registration__description">Дом</div>
      </div>
    </div>
    <div class="business-registration__wrapper">
      <div
        class="business-registration__field"
        :class="{
          invalid: $v.adress.$dirty && !$v.adress.required,
        }"
      >
        <label
          for="business-registration__adress"
          class="business-registration__label"
          >Введите адрес заведения:</label
        >
        <input
          type="text"
          contextmenu="false"
          id="business-registration__adress"
          name="busss"
          class="business-registration__input"
          v-model="adress"
          @input="activeModalWindowCity = true"
          @click="activeModalWindowCity = true"
          v-click-outside="hideActiveModalWindowCity"
          autocomplete="off"
        />
        <transition name="fade">
          <div
            class="business-registration__select"
            v-if="activeModalWindowCity"
          >
            <div
              :key="request.value"
              @click="selectSuggestion(request.suggestion)"
              v-for="request in Object.values(
                $store.state.DadataApi.dadata
                  ? JSON.parse($store.state.DadataApi.dadata)
                  : [{}]
              )[0].length
                ? Object.values(
                    $store.state.DadataApi.dadata
                      ? JSON.parse($store.state.DadataApi.dadata)
                      : [[]]
                  )[0].map((item) =>
                    item
                      ? { value: item.value, suggestion: item }
                      : { value: '', data: '' }
                  )
                : $store.state.BasicData.PopularQueriesDeskbarInputCity"
            >
              {{ request.value }}
            </div>
          </div>
        </transition>
        <div
          class="deskbar__select_exit"
          v-if="adress"
          @click="clearCity"
        ></div>
      </div>
      <div class="business-registration__field-association">
        <div
          class="business-registration__field"
          :class="{
            invalid:
              ($v.house.$dirty && !$v.house.required) ||
              ($v.house.$dirty && this.house === 'Не определено'),
          }"
        >
          <label
            for="business-registration__house"
            class="business-registration__label"
            >Дом:</label
          >
          <input
            type="text"
            id="business-registration__house"
            class="business-registration__input"
            v-model="house"
            readonly
            autocomplete="off"
            style="user-select: none; cursor: not-allowed"
          />
        </div>
        <div
          class="business-registration__field"
          :class="{
            invalid:
              ($v.index.$dirty && !$v.index.required) ||
              ($v.index.$dirty && !$v.index.minLength) ||
              ($v.index.$dirty && !$v.index.maxLength),
          }"
        >
          <label
            for="business-registration__index"
            class="business-registration__label"
            >Почтовый индекс:</label
          >
          <input
            type="text"
            id="business-registration__index"
            class="business-registration__input"
            v-model="index"
            autocomplete="off"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="business-registration__button">
      Продолжить регистрацию
    </button>
  </form>
</template>
<script>
import _ from "lodash";
import { mapActions } from "vuex";
import ClickOutside from "vue-click-outside";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
export default {
  name: "BaseRegistrationForBusinessUserStepThree",
  data() {
    return {
      activeServiceHome: "no",
      adress: "",
      house: "",
      index: "",
      activeModalWindowCity: false,
    };
  },
  validations: {
    adress: { required },
    house: { required },
    index: { required, minLength: minLength(6), maxLength: maxLength(6) },
  },
  methods: {
    ...mapActions(["getCity"]),
    updatePossibleCity: _.debounce(function (value) {
      this.getCity(value);
    }, 200),
    selectSuggestion(suggestion) {
      this.adress = suggestion.value;
      console.log(suggestion.value.split("д "));
      this.house =
        suggestion.value.split(" д ").length > 1
          ? suggestion.value
              .split("д ")
              [suggestion.value.split(" д ").length - 1].replace(", ", " ")
              .split(" ")[0]
          : "Не определено" ?? "Не определено";
    },
    hideActiveModalWindowCity() {
      this.activeModalWindowCity = false;
    },
    clearCity() {
      this.house = "";
      this.adress = "";
    },
    submitHandler() {
      if (this.$v.$invalid || this.activeServiceHome === "no") {
        this.$v.$touch();
        return;
      }
      const FormData = {
        adress: this.adress,
        house: this.house,
        index: this.index,
      };
      this.$emit("change-slide", 4, FormData);
    },
  },
  watch: {
    adress(value) {
      this.getCity(value);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="sass">
.deskbar__select_exit
  position: absolute
  top: 42%
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

.business-registration
  &__field
    position: relative
  &__subheader
    font-size: 16px
    line-height: 18px
    text-align: center
    color: $palette-red
    margin-bottom: 8px
  &__select
    max-height: 260px
    box-sizing: border-box
    border-left: 1px solid $palette-blue
    border-right: 1px solid $palette-blue
    position: absolute
    background: white
    z-index: 100
    width: 100%
    text-align: left
    overflow: auto
    div
      cursor: pointer
      padding: 15px 0
      font-size: 14px
      padding-left: 12px
      position: relative
      color: rgba(0,1,68, .9)
      transition: 0.1s ease-in-out
      &::after
        content: ''
        width: calc(100% + 15px)
        height: 1px
        background: $palette-blue
        bottom: 0
        left: -15px
        position: absolute
      &:hover
        background: rgba(0,0,0,.1)
</style>
