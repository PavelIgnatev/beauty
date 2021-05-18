<template>
  <div class="business-registration__main-step">
    <div class="business-registration__header">
      Начните работу с comfortreat
    </div>
    <div class="business-registration__step">Шаг регистрации 1 из 3</div>
    <div class="business-registration__wrapper">
      <div class="business-registration__field">
        <label
          for="business-registration__name-salon"
          class="business-registration__label"
          >Название салона:</label
        >
        <input
          type="text"
          id="business-registration__name-salon"
          class="business-registration__input"
          v-model="salonName"
        />
      </div>
      <div class="business-registration__field">
        <label
          for="business-registration__name-company"
          class="business-registration__label"
          >Название компании:</label
        >
        <input
          type="text"
          id="business-registration__name-company"
          class="business-registration__input"
          v-model="companyName"
        />
      </div>
      <div class="business-registration__field">
        <label
          for="business-registration__staff"
          class="business-registration__label"
          >Количество сотрудников:</label
        >
        <input
          type="text"
          id="business-registration__staff"
          class="business-registration__input"
          v-model="staff"
        />
      </div>
      <div class="business-registration__field-association">
        <div class="business-registration__field">
          <label
            for="business-registration__name"
            class="business-registration__label"
            >Имя представителя:</label
          >
          <input
            type="text"
            id="business-registration__name"
            class="business-registration__input"
            v-model="name"
          />
        </div>
        <div class="business-registration__field">
          <label
            for="business-registration__surname"
            class="business-registration__label"
            >Фамилия представителя:</label
          >
          <input
            type="text"
            id="business-registration__surname"
            class="business-registration__input"
            v-model="surname"
          />
        </div>
      </div>
      <div class="business-registration__field">
        <label
          for="business-registration__mail"
          class="business-registration__label"
          >Электронная почта:</label
        >
        <input
          type="text"
          id="business-registration__mail"
          class="business-registration__input"
          v-model="mail"
        />
      </div>
      <div class="business-registration__field">
        <label
          for="business-registration__phone"
          class="business-registration__label"
          >Номер телефона:</label
        >
        <input
          type="text"
          id="business-registration__phone"
          class="business-registration__input"
          v-model="phone"
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
    <button
      @click="$emit('change-slide', 2)"
      class="business-registration__button"
    >
      Начать регистрацию салона
    </button>
  </div>
</template>
<script>
export default {
  name: "BaseRegistrationForBusinessUserStepOne",
  data() {
    return {
      salonName: "",
      companyName: "",
      staff: "",
      name: "",
      surname: "",
      mail: "",
      phone: "",
    };
  },
  watch: {
    salonName(value) {
      this.$localStorage.set("salonName", value);
    },
    companyName(value) {
      this.$localStorage.set("companyName", value);
    },
    staff(value) {
      this.$localStorage.set("staff", value);
    },
    name(value) {
      this.$localStorage.set("name", value);
    },
    surname(value) {
      this.$localStorage.set("surname", value);
    },
    mail(value) {
      this.$localStorage.set("mail", value);
    },
    phone(value) {
      this.$localStorage.set("phone", value);
    },
  },
};
</script>
<style lang="sass">
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
</style>
