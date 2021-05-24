<template>
  <form
    class="business-registration__main-step"
    @submit.prevent="submitHandler"
  >
    <div class="business-registration__header">Выберите способ регистрации</div>
    <div class="business-registration__step">Шаг регистрации 4 из 4</div>
    <div class="business-registration__subheader" style="color: #000144">
      Придумайте пароль для входа самостоятельно, <br />
      или же позвольте сделать это нам
    </div>
    <div class="business-registration__services" style="max-width: 372px">
      <div
        class="business-registration__service"
        @click="activePassword = true"
        :class="{
          'business-registration__service_active': activePassword == true,
        }"
      >
        <div class="business-registration__img">
          <svg
            width="98"
            height="88"
            viewBox="0 0 98 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M79.3388 39.3467H16.1963C13.6143 39.3467 11.5017 37.2262 11.5017 34.6345V30.8648C11.5017 28.2731 13.6143 26.1526 16.1963 26.1526H79.2215C81.8035 26.1526 83.9161 28.2731 83.9161 30.8648V34.6345C84.0334 37.2262 81.9209 39.3467 79.3388 39.3467Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.3388 62.083H16.1963C13.6143 62.083 11.5017 59.9625 11.5017 57.3708V53.6011C11.5017 51.0094 13.6143 48.8889 16.1963 48.8889H79.2215C81.8035 48.8889 83.9161 51.0094 83.9161 53.6011V57.3708C84.0334 59.9625 81.9209 62.083 79.3388 62.083Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.7174 34.7525C21.0138 34.7525 22.0647 33.6976 22.0647 32.3964C22.0647 31.0951 21.0138 30.0403 19.7174 30.0403C18.421 30.0403 17.3701 31.0951 17.3701 32.3964C17.3701 33.6976 18.421 34.7525 19.7174 34.7525Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M46.4767 34.7525C47.7731 34.7525 48.824 33.6976 48.824 32.3964C48.824 31.0951 47.7731 30.0403 46.4767 30.0403C45.1803 30.0403 44.1294 31.0951 44.1294 32.3964C44.1294 33.6976 45.1803 34.7525 46.4767 34.7525Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M58.2133 34.7525C59.5097 34.7525 60.5606 33.6976 60.5606 32.3964C60.5606 31.0951 59.5097 30.0403 58.2133 30.0403C56.9169 30.0403 55.866 31.0951 55.866 32.3964C55.866 33.6976 56.9169 34.7525 58.2133 34.7525Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M69.9496 34.7525C71.246 34.7525 72.2969 33.6976 72.2969 32.3964C72.2969 31.0951 71.246 30.0403 69.9496 30.0403C68.6532 30.0403 67.6023 31.0951 67.6023 32.3964C67.6023 33.6976 68.6532 34.7525 69.9496 34.7525Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M40.9606 37.2263H22.6516V41.7029H40.9606V37.2263Z"
              fill="white"
            />
            <path
              d="M39.2001 46.6506H20.8911V51.1272H39.2001V46.6506Z"
              fill="white"
            />
            <path
              d="M76.7569 46.6506H52.345V51.1272H76.7569V46.6506Z"
              fill="white"
            />
            <path
              d="M44.012 15.3147L45.4204 9.77789C46.2419 6.83277 44.3641 3.76985 41.4299 2.94522C38.4958 2.12059 35.4443 4.00546 34.6227 6.95058L33.2144 12.4874L44.012 15.3147Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M35.5617 47.4753C33.5665 53.9545 29.3413 57.6065 27.2287 57.0175C25.1162 56.4284 23.3557 51.245 24.8814 44.648C27.3461 35.2236 29.8108 25.6814 32.2754 16.2571L42.9557 19.0844L35.5617 47.4753Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M17.8396 48.8889H30.7498"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.6133 48.8889H51.5235"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M40.843 39.3467H53.7532"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M49.4109 48.8889H53.7534"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M75.9353 48.8889H78.0479"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9006 39.3467H22.0647"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M64.9029 46.0615C58.7999 46.0615 53.8706 51.0093 53.8706 57.1352V71.1539H75.9353V57.1352C75.9353 51.0093 71.0059 46.0615 64.9029 46.0615Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
            />
            <path
              d="M64.9028 50.1846C61.0298 50.1846 57.9783 53.4831 57.9783 57.4885V66.795H71.8274V57.4885C71.8274 53.4831 68.7759 50.1846 64.9028 50.1846Z"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
            />
            <path
              d="M75.7005 85.526H54.1053C51.5233 85.526 49.5281 83.4055 49.5281 80.9316V64.5568C49.5281 61.9651 51.6406 59.9624 54.1053 59.9624H75.5832C78.1652 59.9624 80.1604 62.0829 80.1604 64.5568V80.9316C80.2778 83.5233 78.1652 85.526 75.7005 85.526Z"
              fill="white"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M68.4239 70.5648C68.4239 68.6799 66.8981 67.1484 65.0203 67.1484C63.1424 67.1484 61.6167 68.6799 61.6167 70.5648C61.6167 71.9784 62.4383 73.0387 63.4945 73.6277V78.3399H66.546V73.6277C67.6023 73.0387 68.4239 71.8606 68.4239 70.5648Z"
              :stroke="
                activePassword == false || activePassword == 'no'
                  ? '#1E3958'
                  : '#bd3c2b'
              "
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div class="business-registration__description" style="width: 100%">
          Вручную
        </div>
      </div>
      <div
        class="business-registration__service"
        @click="activePassword = false"
        :class="{
          'business-registration__service_active': activePassword == false,
        }"
      >
        <div class="business-registration__img">
          <svg
            width="96"
            height="86"
            viewBox="0 0 96 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85.0779 77.4805H12.9917C12.1869 77.4805 11.4971 76.7897 11.4971 75.9838V60.0963C11.4971 59.2904 12.1869 58.5996 12.9917 58.5996H85.0779C85.8827 58.5996 86.5725 59.2904 86.5725 60.0963V75.9838C86.5725 76.7897 85.8827 77.4805 85.0779 77.4805Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M81.7438 25.4431C81.7438 25.4431 81.6288 25.4431 81.7438 25.4431C60.0144 25.4431 38.1701 25.4431 16.4408 25.4431C14.8312 37.071 13.1067 48.5837 11.4971 60.2115H16.4408H81.6288H86.5725C84.9629 48.5837 83.3534 36.9558 81.7438 25.4431Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M75.8802 32.1204C71.9712 32.1204 68.1772 32.1204 64.3832 32.1204C54.1508 32.1204 44.0335 32.1204 33.8011 32.1204C30.0071 32.1204 26.0981 32.1204 22.3041 32.1204C21.3844 38.2221 20.4646 44.3238 19.5448 50.5407C19.3149 52.1525 20.5796 53.6491 22.3041 53.6491H30.6969H33.9161H64.3832H67.6023H75.8802C77.6047 53.6491 78.8694 52.1525 78.6395 50.5407C77.7197 44.3238 76.7999 38.2221 75.8802 32.1204Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.0203 44.7844H62.8885"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M63.9233 29.9331H35.8706V37.1861H63.9233V29.9331Z"
              fill="white"
            />
            <path
              d="M45.988 45.5904V40.6399V35.8046V12.0884H52.1964V35.8046H58.0599V40.6399H52.1964V45.5904H58.0599V50.1955H45.988V45.5904Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
            />
            <path
              d="M28.3977 32.1204H41.0444"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58.8647 32.1204H71.5114"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M63.9233 45.3601H35.8706V51.1165H63.9233V45.3601Z"
              fill="white"
            />
            <path
              d="M66.6825 21.6438H31.3867V28.8968H66.6825V21.6438Z"
              fill="white"
            />
            <path
              d="M67.4875 14.8513H32.1917V22.1043H67.4875V14.8513Z"
              fill="white"
            />
            <path
              d="M49.0923 29.818C56.0768 29.818 61.739 24.1481 61.739 17.154C61.739 10.1599 56.0768 4.48999 49.0923 4.48999C42.1077 4.48999 36.4456 10.1599 36.4456 17.154C36.4456 24.1481 42.1077 29.818 49.0923 29.818Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
            />
            <path
              d="M49.0923 24.0616C52.9021 24.0616 55.9905 20.9689 55.9905 17.154C55.9905 13.339 52.9021 10.2463 49.0923 10.2463C45.2825 10.2463 42.1941 13.339 42.1941 17.154C42.1941 20.9689 45.2825 24.0616 49.0923 24.0616Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
            />
            <path
              d="M62.8887 25.4431H75.4204"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.1892 25.4431H34.7209"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.3496 70.573H35.8706"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M51.5067 26.0188H46.448V32.8113H51.5067V26.0188Z"
              fill="white"
            />
            <path
              d="M46.9077 70.4578C46.9077 72.6452 49.3221 74.257 51.6215 72.8754C51.8514 72.7603 52.1963 72.4149 52.3113 72.1847C53.346 70.3426 52.6562 68.6157 51.1616 67.8098V63.8955H48.5173V67.8098C47.5975 68.2703 46.9077 69.3065 46.9077 70.4578Z"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
            />
            <path
              d="M66.4796 68.1333C67.032 67.3564 66.8508 66.2782 66.075 65.725C65.2991 65.1718 64.2223 65.3532 63.6699 66.1301C63.1175 66.907 63.2986 67.9853 64.0745 68.5385C64.8504 69.0916 65.9271 68.9103 66.4796 68.1333Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M72.8804 68.1526C73.4329 67.3757 73.2517 66.2975 72.4759 65.7443C71.7 65.1911 70.6232 65.3725 70.0708 66.1494C69.5184 66.9263 69.6995 68.0046 70.4754 68.5578C71.2512 69.1109 72.328 68.9295 72.8804 68.1526Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.3358 68.0948C79.8882 67.3178 79.707 66.2396 78.9312 65.6864C78.1553 65.1332 77.0785 65.3146 76.5261 66.0916C75.9737 66.8685 76.1548 67.9467 76.9307 68.4999C77.7066 69.0531 78.7833 68.8717 79.3358 68.0948Z"
              fill="white"
              :stroke="
                activePassword == true || activePassword ? '#1E3958' : '#bd3c2b'
              "
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="business-registration__description">Автоматически</div>
      </div>
    </div>
    <div class="business-registration__wrapper">
      <div
        class="business-registration__field"
        :class="{
          invalid:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.containsUppercase) ||
            ($v.password.$dirty && !$v.password.containsLowercase) ||
            ($v.password.$dirty && !$v.password.containsNumber) ||
            ($v.password.$dirty && !$v.password.minLength),
        }"
      >
        <label
          for="business-registration__password"
          class="business-registration__label"
          >Пароль:</label
        >
        <input
          v-model.trim="password"
          type="text"
          id="business-registration__password"
          class="business-registration__input"
          autocomplete="off"
          :readonly="activePassword ? false : true"
          :style="activePassword ? '' : 'pointer-events: none'"
        />
        <small
          style="margin-top: 10px; text-align: left"
          v-if="
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.containsUppercase) ||
            ($v.password.$dirty && !$v.password.containsLowercase) ||
            ($v.password.$dirty && !$v.password.containsNumber) ||
            ($v.password.$dirty && !$v.password.minLength)
          "
          >Ваш пароль должен быть длиной не менее 8-ми символов, содержать как
          минимум одну цифру,а также иметь латинские буквы как в нижнем, так и в
          верхнем регистре.</small
        >
      </div>
      <div
        class="business-registration__field"
        :class="{
          invalid:
            ($v.repeatPassword.$dirty && !$v.repeatPassword.required) ||
            ($v.repeatPassword.$dirty && repeatPassword !== password) ||
            ($v.repeatPassword.$dirty && !$v.repeatPassword.minLength),
        }"
      >
        <label
          for="business-registration__repeatpassword"
          class="business-registration__label"
          >Повторите пароль:</label
        >
        <input
          v-model.trim="repeatPassword"
          type="text"
          id="business-registration__repeatpassword"
          class="business-registration__input"
          autocomplete="off"
          :readonly="activePassword ? false : true"
          :style="activePassword ? '' : 'pointer-events: none'"
        />
        <small
          style="margin-top: 10px; text-align: left"
          v-if="
            ($v.repeatPassword.$dirty && !$v.repeatPassword.required) ||
            ($v.repeatPassword.$dirty && repeatPassword !== password) ||
            ($v.repeatPassword.$dirty && !$v.repeatPassword.minLength)
          "
          >Пароли должны совпадать</small
        >
      </div>
    </div>
    <button type="submit" class="business-registration__button">
      Завершить регистрацию
    </button>
  </form>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
import generator from "generate-password";
export default {
  name: "BaseRegistrationForBusinessUserStepFour",
  data() {
    return {
      password: "",
      repeatPassword: "",
      activePassword: "",
      pass: generator.generate({
        length: 10,
        numbers: true,
        uppercase: true,
        lowercase: true,
        strict: true,
      }),
    };
  },
  mounted() {
    this.activePassword = false;
  },
  props: { formData: Object },
  validations: {
    password: {
      required,
      minLength: minLength(8),
      containsUppercase: function (value) {
        return /[A-Z]/.test(value);
      },
      containsLowercase: function (value) {
        return /[a-z]/.test(value);
      },
      containsNumber: function (value) {
        return /[0-9]/.test(value);
      },
    },
    repeatPassword: { required, minLength: minLength(8) },
  },
  methods: {
    submitHandler() {
      console.log(this.repeatPassword === this.password);
      if (this.$v.$invalid || this.repeatPassword !== this.password) {
        this.$v.$touch();
        return;
      }

      const FormData = {
        password: this.password,
      };
      console.log(FormData);
      this.$emit("change-slide", 5, FormData);
    },
  },
  watch: {
    activePassword(v) {
      if (v === false) {
        this.password = this.pass;
        this.repeatPassword = this.pass;
      } else {
        this.password = "";
        this.repeatPassword = "";
      }
    },
  },
};
</script>
<style lang="sass"></style>
