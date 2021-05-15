<template>
  <div class="deskbar__select">
    <input
      type="text"
      class="deskbar__clock"
      placeholder="Любая Дата"
      @click="activeModalWindowDate = true"
      @tap="activeModalWindowDate = true"
      :value="
        recordingDate +
        (recordingDate && activeChooseTime ? ' ' : '') +
        (activeChooseTime ? `${from}-${to}` : '')
      "
      v-click-outside="hideActiveModalWindowDate"
      readonly
    />
    <div
      class="deskbar__select_exit"
      v-if="
        (
          recordingDate +
          (recordingDate && activeChooseTime ? ' ' : '') +
          (activeChooseTime ? `${from}-${to}` : '')
        ).length
      "
      @click="clearClock"
    ></div>
    <div
      class="select-clock"
      v-if="activeModalWindowDate"
      :style="{ minHeight: activeChooseDate ? '360px' : '320px' }"
    >
      <div class="select-clock__wrapper">
        <div class="select-clock__header">
          <img
            src="@/assets/img/icons/calendar.svg"
            class="select-clock__icon"
            alt="date"
          />
          <div class="select-clock__text">Выбрать дату</div>
        </div>
        <div class="select-clock__buttons">
          <button
            @click="сhangeRecordingDate('')"
            class="select-clock__button"
            :class="{
              'select-clock__button_active':
                (recordingDate === '' ||
                  recordingDate.split(' ')[0].split('/').length === 1) &&
                !activeChooseDate,
            }"
          >
            Любая Дата
          </button>
          <button
            @click="
              сhangeRecordingDate(
                `${('0' + Number(new Date().getDate())).slice(-2)}/${(
                  '0' + Number(new Date().getMonth() + 1)
                ).slice(-2)}/${new Date().getFullYear()}`
              )
            "
            class="select-clock__button"
            :class="{
              'select-clock__button_active':
                recordingDate.split(' ')[0] ===
                  `${('0' + Number(new Date().getDate())).slice(-2)}/${(
                    '0' + Number(new Date().getMonth() + 1)
                  ).slice(-2)}/${new Date().getFullYear()}` &&
                activeChooseDate != true,
            }"
          >
            Сегодня
          </button>
          <button
            @click="
              сhangeRecordingDate(
                `${('0' + Number(new Date().getDate() + 1)).slice(-2)}/${(
                  '0' + Number(new Date().getMonth() + 1)
                ).slice(-2)}/${new Date().getFullYear()}`
              )
            "
            :class="{
              'select-clock__button_active':
                recordingDate.split(' ')[0] ===
                  `${('0' + Number(new Date().getDate() + 1)).slice(-2)}/${(
                    '0' + Number(new Date().getMonth() + 1)
                  ).slice(-2)}/${new Date().getFullYear()}` &&
                activeChooseDate != true,
            }"
            class="select-clock__button"
          >
            Завтра
          </button>
          <button
            class="select-clock__button"
            @click="activeChooseDate = true"
            :class="{
              'select-clock__button_active': activeChooseDate === true,
            }"
          >
            Выбрать дату...
          </button>
        </div>
      </div>
      <transition name="fade">
        <select-calendar
          @update-clock="updateClock"
          @close-choose-data="closeChooseData"
          v-if="activeChooseDate"
        ></select-calendar>
      </transition>
      <div class="select-clock__wrapper">
        <div class="select-clock__header">
          <img
            src="@/assets/img/icons/clock.svg"
            class="select-clock__icon"
            alt="date"
          />
          <div class="select-clock__text">Выбрать время</div>
        </div>
        <div class="select-clock__buttons">
          <button
            class="select-clock__button"
            @click="activeChooseTime = false"
            :class="{
              'select-clock__button_active':
                !recordingDate.split(' ')[1] && activeChooseTime === false,
            }"
          >
            Любое время
          </button>
          <button
            class="select-clock__button"
            @click="activeChooseTime = true"
            :class="{
              'select-clock__button_active': activeChooseTime === true,
            }"
          >
            Выбрать время...
          </button>
          <transition name="fade">
            <div class="select-clock__time" v-if="activeChooseTime">
              <div class="select-clock__time__wrapper">
                <div class="select-clock__time_inputs">
                  <div class="select-clock__time_input">
                    <label class="select-clock__label" for="from">С</label>
                    <input
                      type="text"
                      id="from"
                      class="select-clock__button"
                      readonly
                      @click="activeFrom = true"
                      v-click-outside="hideActiveFrom"
                      v-model="from"
                      :class="{
                        'select-clock__button_active': activeFrom === true,
                      }"
                    />
                    <transition name="fade">
                      <div
                        class="select-clock__time_select select-clock__time_from"
                        v-if="activeFrom"
                      >
                        <div
                          class="select-clock__time_value"
                          v-for="i in 24"
                          :key="i"
                          @click="
                            from = ('0' + Number(i - 1)).slice(-2) + ':00'
                          "
                        >
                          {{ `${("0" + Number(i - 1)).slice(-2)}:00` }}
                        </div>
                      </div>
                    </transition>
                  </div>
                  <div class="select-clock__time_input">
                    <label class="select-clock__label" for="to">До</label>
                    <input
                      type="text"
                      class="select-clock__button"
                      readonly
                      id="to"
                      @click="activeTo = true"
                      v-click-outside="hideActiveTo"
                      v-model="to"
                      :class="{
                        'select-clock__button_active': activeTo === true,
                      }"
                    />
                    <transition name="fade">
                      <div
                        class="select-clock__time_select select-clock__time_to"
                        v-if="activeTo"
                      >
                        <div
                          class="select-clock__time_value"
                          v-for="i in 24"
                          :key="i"
                          @click="to = ('0' + Number(i)).slice(-2) + ':00'"
                        >
                          {{ `${("0" + Number(i)).slice(-2)}:00` }}
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <button class="select-clock__done" @click="activeModalWindowDate = false">
        Готово
      </button>
    </div>
  </div>
</template>
<script>
import SelectCalendar from "./SelectClockCalendar.vue";
import ClickOutside from "vue-click-outside";
export default {
  name: "select-clock",
  data() {
    return {
      activeModalWindowDate: false,
      activeChooseTime: false,
      activeChooseDate: false,
      activeBlockTime: false,
      activeCalendar: false,
      activeFrom: false,
      activeTo: false,
      from: "00:00",
      to: "24:00",
      recordingDate: "",
      today: `${("0" + Number(new Date().getDate())).slice(-2)}/${(
        "0" + Number(new Date().getMonth() + 1)
      ).slice(-2)}/${new Date().getFullYear()}`,
      tomorrow: `${("0" + Number(new Date().getDate() + 1)).slice(-2)}/${(
        "0" + Number(new Date().getMonth() + 1)
      ).slice(-2)}/${new Date().getFullYear()}`,
      fullDay: "",
      clock: this.$localStorage.get("clock")
        ? this.$localStorage.get("clock").split(" ")[0]
        : "",
    };
  },
  created() {
    this.getClockAfterUpdate();
    this.checkActiveChooseDate();
  },
  methods: {
    checkActiveChooseDate() {
      if (
        this.$localStorage.get("clock")
          ? this.$localStorage.get("clock").split(" ")[0].split("/").length ===
            3
          : false
      ) {
        if (
          this.$localStorage.get("clock").split(" ")[0] !== this.today &&
          this.$localStorage.get("clock").split(" ")[0] !== this.tomorrow
        ) {
          this.activeChooseDate = true;
        }
      }
    },
    closeChooseData(v) {
      this.activeChooseDate = v;
    },
    updateClock(v) {
      this.recordingDate = v;
    },
    getClockAfterUpdate() {
      const getRecordingDate = this.$localStorage.get("clock")?.split(" ") || [
        "",
      ];
      const date = getRecordingDate[0].split("/");
      const day = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      if (getRecordingDate.length === 2) {
        if (
          day <= Number(date[0]) &&
          month <= Number(date[1]) &&
          year <= Number(date[2])
        ) {
          this.recordingDate = getRecordingDate[0];
          this.from = getRecordingDate[1].split("-")[0];
          this.to = getRecordingDate[1].split("-")[1];
          this.activeChooseTime = true;
        } else {
          this.$localStorage.set("clock", "");
        }
      } else {
        if (getRecordingDate.length === 1) {
          if (getRecordingDate[0].split("/").length === 3) {
            if (
              day <= Number(date[0]) &&
              month <= Number(date[1]) &&
              year <= Number(date[2])
            ) {
              this.recordingDate = getRecordingDate[0];
            } else {
              this.$localStorage.set("clock", "");
            }
          } else {
            if (getRecordingDate[0].split("-").length === 2) {
              this.from = getRecordingDate[0].split("-")[0];
              this.to = getRecordingDate[0].split("-")[1];
              this.activeChooseTime = true;
            }
          }
        }
      }
    },
    clearClock() {
      this.recordingDate = "";
      this.activeChooseDate = false;
      this.activeChooseTime = false;
    },
    сhangeRecordingDate(date) {
      this.recordingDate = date;
      this.activeChooseDate = false;
    },
    hideActiveFrom() {
      this.activeFrom = false;
    },
    hideActiveTo() {
      this.activeTo = false;
    },
    hideActiveModalWindowDate(e) {
      const getClass = Object.values(e.path)[0]?.classList.value;
      if (
        getClass != "select-clock__icon" &&
        getClass != "select-clock__button" &&
        getClass != "select-clock__text" &&
        getClass != "select-clock" &&
        getClass != "select-clock__header" &&
        getClass != "select-clock__buttons" &&
        getClass != "select-clock__wrapper" &&
        getClass != "select-clock__button select-clock__button_active" &&
        getClass != "select-clock__time_value" &&
        getClass != "select-clock__label" &&
        getClass != "select-clock__time" &&
        getClass != "select-clock__calendar" &&
        getClass != "select-clock__time_input" &&
        getClass != "select-calendar__prev" &&
        getClass != "select-calendar__next" &&
        getClass != "select-calendar__img" &&
        getClass != "select-calendar" &&
        getClass != "select-calendar__header" &&
        getClass != "select-calendar__times" &&
        getClass != "calendar__week" &&
        getClass != "select-calendar__day-of-week" &&
        getClass != "select-calendar__week" &&
        getClass != "select-calendar__day" &&
        getClass != "select-calendar__day select-calendar__day_before" &&
        getClass != "select-calendar__day select-calendar__day_after" &&
        getClass != "select-calendar__wrapper" &&
        getClass != "select-calendar__day select-calendar__day_active" &&
        getClass !=
          "select-calendar__day select-calendar__day_before select-calendar__day_active" &&
        getClass !=
          "select-calendar__day select-calendar__day_after select-calendar__day_active" &&
        getClass != "select-calendar__p"
      ) {
        this.activeModalWindowDate = false;
      }
    },
  },
  watch: {
    from(v) {
      if (this.to <= v) {
        this.to = ("0" + (Number(v.split(":")[0]) + 1)).slice(-2) + ":00";
      }
      this.$localStorage.set(
        "clock",
        this.recordingDate +
          (this.recordingDate && this.activeChooseTime ? " " : "") +
          (this.activeChooseTime ? `${this.from}-${this.to}` : "")
      );
    },
    to(v) {
      if (this.from >= v) {
        this.from = ("0" + (Number(v.split(":")[0]) - 1)).slice(-2) + ":00";
      }
      this.$localStorage.set(
        "clock",
        this.recordingDate +
          (this.recordingDate && this.activeChooseTime ? " " : "") +
          (this.activeChooseTime ? `${this.from}-${this.to}` : "")
      );
    },
    recordingDate() {
      this.$localStorage.set(
        "clock",
        this.recordingDate +
          (this.recordingDate && this.activeChooseTime ? " " : "") +
          (this.activeChooseTime ? `${this.from}-${this.to}` : "")
      );
    },
    activeChooseTime() {
      this.$localStorage.set(
        "clock",
        this.recordingDate +
          (this.recordingDate && this.activeChooseTime ? " " : "") +
          (this.activeChooseTime ? `${this.from}-${this.to}` : "")
      );
    },
  },
  components: { SelectCalendar },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="sass">
.select
  &-clock
    box-sizing: border-box
    box-shadow: 0 40px 80px rgb(0 0 0 / 25%)
    width: calc(100% - 12px)
    top: 42px
    left: 5px
    min-height: 320px
    background: white
    position: absolute
    z-index: 100
    padding: 16px 12px
    &__time
      margin-top: 20px
      width: 100%
      margin-bottom: 50px
      &_select
        border: 1px solid #4d4d4d
        top: -602%
        background: white
        z-index: 1000
        width: calc(100% - 8px)
        height: 300px
        overflow: auto
        position: absolute
        .select-clock__time_value
          font-size: 15px
          padding: 5px 15px
          &:hover
            background: rgb(0,139,255)
            color: white
      &_to
        left: 6px
      &_input
        position: relative
        input
          width: 96% !important
        label
          position: absolute
          font-size: 14px
          top: -20px
        &:nth-child(2)
          input
            margin-left: auto
          label
            left: 7px
      &__wrapper
        width: 100%
      &_inputs
        justify-content: space-between
        width: 100%
        display: flex
    &__done
      cursor: pointer
      box-sizing: border-box
      position: absolute
      border-radius: 4px
      bottom: 18px
      width: calc(100% - 24px)
      text-align: center
      height: 40px
      background: rgb(0,1,68, .88)
      color: white
      font-weight: 600
      font-size: 16px
      transition: all .2s ease-in-out
      &:hover
        background: rgb(0,1,68, .9)
    &__header
      display: flex
      align-items: center
      img
        display: block
        width: 23px
    &__text
      font-size: 16px
      margin-left: 15px
    &__wrapper
      &:nth-child(2)
        margin-top: 8px
    &__buttons
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      margin-top: 18px
      .select-clock__button
        display: block
        font-size: 15px
        cursor: pointer
        border-radius: 4px
        height: 40px
        width: 48%
        color: #2d2d2d
        border: 2px solid #9d9d9d
        margin-bottom: 10px
        transition: all .2s ease-in-out
        &:hover
          background: rgba(0,110,70, .08)
      input
        box-sizing: border-box
        padding-left: 15px
        &:hover
          background: rgba(0,0,0,0) !important
      .select-clock__button_active
        border: 2px solid $palette-blue
        color: $palette-blue
        &:hover
          background: none
</style>
