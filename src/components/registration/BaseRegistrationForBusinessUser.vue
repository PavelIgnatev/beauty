<template>
  <section class="business-registration">
    <base-registration-for-business-user-step-one
      @change-slide="changeSlide"
      v-show="slide === 1"
    />
    <base-registration-for-business-user-step-two
      @change-slide="changeSlide"
      v-show="slide === 2"
    />
    <base-registration-for-business-user-step-three
      @change-slide="changeSlide"
      v-show="slide === 3"
    />
    <base-registration-for-business-user-step-four v-show="slide === 4" />
  </section>
</template>
<script>
import BaseRegistrationForBusinessUserStepOne from "./BaseRegistrationForBusinessUserStepOne.vue";
import BaseRegistrationForBusinessUserStepTwo from "./BaseRegistrationForBusinessUserStepTwo.vue";
import BaseRegistrationForBusinessUserStepThree from "./BaseRegistrationForBusinessUserStepThree.vue";
import BaseRegistrationForBusinessUserStepFour from "./BaseRegistrationForBusinessUserStepFour.vue";
export default {
  name: "BaseRegistrationForBusinessUser",
  components: {
    BaseRegistrationForBusinessUserStepOne,
    BaseRegistrationForBusinessUserStepTwo,
    BaseRegistrationForBusinessUserStepThree,
    BaseRegistrationForBusinessUserStepFour,
  },
  data() {
    return {
      slide: 1,
    };
  },
  methods: {
    changeSlide(value) {
      console.log(value);
      this.slide = value;
    },
  },
};
</script>
<style lang="sass">
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
</style>
