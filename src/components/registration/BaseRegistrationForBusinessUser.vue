<template>
  <section class="business-registration">
    <base-registration-for-business-user-step-one
      @change-slide="changeSlide"
      v-if="slide === 1"
    />
    <base-registration-for-business-user-step-two
      @change-slide="changeSlide"
      v-if="slide === 2"
    />
    <base-registration-for-business-user-step-three
      @change-slide="changeSlide"
      v-if="slide === 3"
    />
    <base-registration-for-business-user-step-four
      @change-slide="changeSlide"
      :formData="data"
      v-if="slide === 4"
    />
    <base-registration-for-business-user-step-five
      :formData="data"
      v-if="slide === 5"
    />
  </section>
</template>
<script>
import BaseRegistrationForBusinessUserStepOne from "./BaseRegistrationForBusinessUserStepOne.vue";
import BaseRegistrationForBusinessUserStepTwo from "./BaseRegistrationForBusinessUserStepTwo.vue";
import BaseRegistrationForBusinessUserStepThree from "./BaseRegistrationForBusinessUserStepThree.vue";
import BaseRegistrationForBusinessUserStepFour from "./BaseRegistrationForBusinessUserStepFour.vue";
import BaseRegistrationForBusinessUserStepFive from "./BaseRegistrationForBusinessUserStepFive.vue";
export default {
  name: "BaseRegistrationForBusinessUser",
  components: {
    BaseRegistrationForBusinessUserStepOne,
    BaseRegistrationForBusinessUserStepTwo,
    BaseRegistrationForBusinessUserStepThree,
    BaseRegistrationForBusinessUserStepFour,
    BaseRegistrationForBusinessUserStepFive,
  },
  data() {
    return {
      slide: 3,
      data: {},
    };
  },
  methods: {
    changeSlide(value, FormData) {
      this.slide = value;
      this.data = Object.assign(this.data, FormData);
    },
  },
};
</script>
<style lang="sass">
small
  display: block
  margin: 0 auto
  font-size: 90% !important
  color: $palette-red
.business-registration
  &__header
    margin-top: 40px
    font-weight: 600
    font-size: 24px
    line-height: 33px
    text-align: center
    color: $palette-blue
  &__step
    margin-top: 10px
    margin-bottom: 20px
    font-weight: 500
    font-size: 16px
    line-height: 22px
    text-align: center
    color: $palette-red
  &__main-step
    min-height: 60vh
</style>
