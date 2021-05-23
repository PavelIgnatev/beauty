<template>
  <form
    class="business-registration__main-step"
    @submit.prevent="submitHandler"
  >
    <div class="business-registration__header">
      Начните работу с comfortreat
    </div>
    <div class="business-registration__step">Шаг регистрации 1 из 4</div>
    <div class="business-registration__wrapper">
      <div
        class="business-registration__field"
        :class="{
          invalid:
            ($v.salonName.$dirty && !$v.salonName.required) ||
            ($v.salonName.$dirty && !$v.salonName.maxLength),
        }"
      >
        <label
          for="business-registration__name-salon"
          class="business-registration__label"
          >Название салона:</label
        >
        <input
          type="text"
          id="business-registration__name-salon"
          class="business-registration__input"
          v-model.trim="salonName"
          autocomplete="off"
        />
      </div>
      <div
        class="business-registration__field"
        :class="{
          invalid:
            ($v.companyName.$dirty && !$v.companyName.required) ||
            ($v.companyName.$dirty && !$v.companyName.maxLength),
        }"
      >
        <label
          for="business-registration__name-company"
          class="business-registration__label"
          >Название компании:</label
        >
        <input
          type="text"
          id="business-registration__name-company"
          class="business-registration__input"
          v-model.trim="companyName"
          autocomplete="off"
        />
      </div>
      <div
        class="business-registration__field"
        :class="{
          invalid:
            ($v.staff.$dirty && !$v.staff.required) ||
            ($v.staff.$dirty && !$v.staff.numeric) ||
            ($v.staff.$dirty && !$v.staff.maxLength),
        }"
      >
        <label
          for="business-registration__staff"
          class="business-registration__label"
          >Количество сотрудников:</label
        >
        <input
          type="text"
          id="business-registration__staff"
          class="business-registration__input"
          v-model.trim="staff"
          autocomplete="off"
        />
      </div>
      <div class="business-registration__field-association">
        <div
          class="business-registration__field"
          :class="{
            invalid:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.name.$dirty && !$v.name.minLength),
          }"
        >
          <label
            for="business-registration__name"
            class="business-registration__label"
            >Имя представителя:</label
          >
          <input
            type="text"
            id="business-registration__name"
            class="business-registration__input"
            v-model.trim="name"
            autocomplete="off"
          />
        </div>
        <div
          class="business-registration__field"
          :class="{
            invalid:
              ($v.surname.$dirty && !$v.surname.required) ||
              ($v.surname.$dirty && !$v.surname.minLength),
          }"
        >
          <label
            for="business-registration__surname"
            class="business-registration__label"
            >Фамилия представителя:</label
          >
          <input
            type="text"
            id="business-registration__surname"
            class="business-registration__input"
            v-model.trim="surname"
            autocomplete="off"
          />
        </div>
      </div>
      <div
        class="business-registration__field"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      >
        <label
          for="business-registration__mail"
          class="business-registration__label"
          >Электронная почта:</label
        >
        <input
          type="text"
          id="business-registration__mail"
          class="business-registration__input"
          v-model.trim="email"
          autocomplete="off"
        />
      </div>
      <div
        class="business-registration__field"
        :class="{
          invalid:
            ($v.phone.$dirty && !$v.phone.required) ||
            ($v.phone.$dirty && !isValidByLibPhoneNumberJs),
        }"
      >
        <label
          for="business-registration__phone"
          class="business-registration__label"
          >Номер телефона:</label
        >
        <phone-mask-input
          v-model.trim="phone"
          autoDetectCountry
          showFlag
          @onValidate="onValidate"
          wrapperClass="wrraper-example"
          inputClass="input-example"
          flagClass="flag-example"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="business-registration__privacy-policy">
      Продолжая регистрацию, вы соглашаетесь с правилами
      <router-link
        class="business-registration__link"
        to="/privat-policy"
        target="_blank"
        >политики конфиденциальности.</router-link
      >
    </div>
    <button type="submit" class="business-registration__button">
      Начать регистрацию салона
    </button>
  </form>
</template>
<script>
import {
  email,
  required,
  numeric,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
import PhoneMaskInput from "vue-phone-mask-input";
export default {
  name: "BaseRegistrationForBusinessUserStepOne",
  data() {
    return {
      salonName: "",
      companyName: "",
      staff: "",
      name: "",
      surname: "",
      email: "",
      phone: "",
      isValidByLibPhoneNumberJs: false,
    };
  },
  validations: {
    salonName: { required, maxLength: maxLength(33) },
    companyName: { required, maxLength: maxLength(33) },
    staff: { required, numeric, maxLength: maxLength(4) },
    name: { required, minLength: minLength(2) },
    surname: { required, minLength: minLength(2) },
    email: { email, required },
    phone: { required },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid || !this.isValidByLibPhoneNumberJs) {
        this.$v.$touch();
        return;
      }
      const FormData = {
        salonName: this.salonName,
        companyName: this.companyName,
        staff: this.staff,
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
      };
      this.$emit("change-slide", 2, FormData);
    },
    onValidate(e) {
      this.isValidByLibPhoneNumberJs = e.isValidByLibPhoneNumberJs;
    },
  },
  components: { PhoneMaskInput },
};
</script>
<style lang="sass">
.flag-example
  position: absolute
  top: calc(50% - 6px)
  right: 10px
  transform: translateX(-50%)
.business-registration
  &__wrapper, &__privacy-policy, &__button
    max-width: 394px
    margin: 0 auto
  &__field
    margin-top: 15px
    label
      font-weight: 600
      font-size: 13px
      line-height: 16px
      color: #000145
    input
      display: block
      margin-top: 6px
      background: #FFFFFF
      border: 1px solid #000145
      box-sizing: border-box
      height: 35px
      width: 100%
      padding: 0 36px 0 12px
      font-size: 15px
      line-height: 16px
      color: #000145
    &-association
      display: flex
      align-items: center
      .business-registration__field
        &:nth-child(1)
          margin-right: 7px
        &:nth-child(2)
          margin-left: 7px
  &__privacy-policy
    font-size: 14px
    line-height: 16px
    color: $palette-blue
    margin-top: 25px
  &__button
    display: block
    cursor: pointer
    height: 40px
    margin: 0 auto
    margin-top: 25px
    width: 100%
    color: white
    transition: 0.2s ease-in-out
    background: rgba(189,60,43, .9)
    &:hover
      background: $palette-red
@media (max-width: 410px)
  .business-registration
    &__field
      margin-right: 0px !important
      margin-left: 0px !important
      &-association
        display: block
.invalid
  label
    color: $palette-red !important
  input
    border: 1px solid $palette-red !important
</style>
