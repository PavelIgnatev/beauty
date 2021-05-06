<template>
  <div class="select-calendar">
    <div class="select-calendar__header">
      <div
        class="select-calendar__prev"
        @click="monthNow--"
        :style="monthNow <= 0 ? styleObject : ''"
      >
        <svg
          class="select-calendar__img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: rotate(90deg)"
          :style="monthNow <= 0 ? styleObject : ''"
        >
          <g fill="none" class="select-calendar__img">
            <path
              class="select-calendar__img"
              stroke-width="2"
              d="M5 8l7 7 7-7"
              style="stroke: rgb(190, 190, 190)"
              :style="monthNow <= 0 ? styleObject : ''"
            ></path>
          </g>
        </svg>
      </div>
      <div class="select-calendar__times">
        {{ monthAndYear.split(" ").slice(0, 2).join(" ") }}
      </div>
      <div
        class="select-calendar__next"
        @click="monthNow++"
        :style="monthNow >= 3 ? styleObject : ''"
      >
        <svg
          class="select-calendar__img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          :style="monthNow >= 3 ? styleObject : ''"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: rotate(270deg)"
        >
          <g fill="none" class="select-calendar__img">
            <path
              :style="monthNow >= 3 ? styleObject : ''"
              class="select-calendar__img"
              stroke-width="2"
              d="M5 8l7 7 7-7"
              style="stroke: rgb(190, 190, 190)"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <div class="select-calendar__week">
      <div class="select-calendar__day-of-week" v-for="day in week" :key="day">
        {{ day }}
      </div>
    </div>
    <div class="select-calendar__wrapper">
      <template v-if="firstDayOfMonth !== -1">
        <div
          class="select-calendar__day select-calendar__day_before"
          v-for="day in firstDayOfMonth"
          :key="day * 333"
          :style="monthNow <= 0 ? styleObject : ''"
          :class="{
            'select-calendar__day_active':
              checkDay(
                dayBeforeOfMonth - firstDayOfMonth + day,
                new Date().getMonth() + monthNow,
                new Date(
                  yearNow,
                  new Date().getMonth() + monthNow - 1
                ).getFullYear()
              ) == clock,
          }"
          @click="
            updateDay(
              dayBeforeOfMonth - firstDayOfMonth + day,
              new Date().getMonth() + monthNow,
              new Date(
                yearNow,
                new Date().getMonth() + monthNow - 1
              ).getFullYear(),
              -1
            )
          "
        >
          <p class="select-calendar__p">
            {{ dayBeforeOfMonth - firstDayOfMonth + day }}
          </p>
        </div>
      </template>
      <template v-else>
        <div
          class="select-calendar__day select-calendar__day_before"
          v-for="day in 6"
          :key="day * 333"
          :style="monthNow <= 0 ? styleObject : ''"
          @click="
            updateDay(
              dayBeforeOfMonth + firstDayOfMonth - 5 + day,
              new Date().getMonth() + monthNow,
              new Date(
                yearNow,
                new Date().getMonth() + monthNow - 1
              ).getFullYear(),
              -1
            )
          "
          :class="{
            'select-calendar__day_active':
              checkDay(
                dayBeforeOfMonth + firstDayOfMonth - 5 + day,
                new Date().getMonth() + monthNow,
                new Date(
                  yearNow,
                  new Date().getMonth() + monthNow - 1
                ).getFullYear()
              ) == clock,
          }"
        >
          <p class="select-calendar__p">
            {{ dayBeforeOfMonth + firstDayOfMonth - 5 + day }}
          </p>
        </div>
      </template>
      <div
        class="select-calendar__day"
        v-for="day in dayOfMonth"
        :style="day < new Date().getDate() && monthNow === 0 ? styleObject : ''"
        @click="
          updateDay(
            day,
            new Date().getMonth() + monthNow + 1,
            monthAndYear.split(' ')[1],
            0
          )
        "
        :class="{
          'select-calendar__day_active':
            checkDay(
              day,
              new Date().getMonth() + monthNow + 1,
              monthAndYear.split(' ')[1]
            ) == clock,
        }"
        :key="day"
      >
        <p class="select-calendar__p">{{ day }}</p>
      </div>
      <template v-if="firstDayOfMonth !== -1">
        <div
          class="select-calendar__day select-calendar__day_after"
          v-for="day in 42 - (dayOfMonth + firstDayOfMonth)"
          :key="day * 34"
          :style="monthNow >= 3 ? styleObject : ''"
          :class="{
            'select-calendar__day_active':
              checkDay(
                day,
                new Date().getMonth() + monthNow + 2,
                new Date(
                  yearNow,
                  new Date().getMonth() + monthNow + 2
                ).getFullYear()
              ) == clock,
          }"
          @click="
            updateDay(
              day,
              new Date().getMonth() + monthNow + 2,
              new Date(
                yearNow,
                new Date().getMonth() + monthNow + 2
              ).getFullYear(),
              1
            )
          "
        >
          <p class="select-calendar__p">{{ day }}</p>
        </div>
      </template>
      <template v-else>
        <div
          class="select-calendar__day select-calendar__day_after"
          v-for="day in 42 - (dayOfMonth + 6)"
          :key="day * 34"
          :style="monthNow >= 3 ? styleObject : ''"
          @click="
            updateDay(
              day,
              new Date().getMonth() + monthNow + 2,
              new Date(
                yearNow,
                new Date().getMonth() + monthNow + 2
              ).getFullYear(),
              1
            )
          "
          :class="{
            'select-calendar__day_active':
              checkDay(
                day,
                new Date().getMonth() + monthNow + 2,
                new Date(
                  yearNow,
                  new Date().getMonth() + monthNow + 2
                ).getFullYear()
              ) == clock,
          }"
        >
          <p class="select-calendar__p">{{ day }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "select-clock-calendar",
  data() {
    return {
      week: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      monthNow: 0,
      yearNow: new Date().getFullYear(),
      styleObject: {
        cursor: "default",
        userSelect: "none",
        pointerEvents: "none",
        opacity: "0.85",
        color: "#8d8d8d",
      },
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
  computed: {
    monthAndYear() {
      return new Date(
        this.yearNow,
        new Date().getMonth() + this.monthNow
      ).toLocaleString("ru", {
        year: "numeric",
        month: "long",
      });
    },
    dayOfMonth() {
      return new Date(
        2021,
        new Date().getMonth() + this.monthNow + 1,
        0
      ).getDate();
    },
    dayBeforeOfMonth() {
      return new Date(2021, new Date().getMonth() + this.monthNow, 0).getDate();
    },
    firstDayOfMonth() {
      return (
        new Date(2021, new Date().getMonth() + this.monthNow, 1).getDay() - 1
      );
    },
  },
  created() {
    if (
      this.$localStorage.get("clock")
        ? this.$localStorage.get("clock").split(" ")[0].split("/").length === 3
        : false
    ) {
      if (
        this.$localStorage.get("clock").split(" ")[0] !== this.today &&
        this.$localStorage.get("clock").split(" ")[0] !== this.tomorrow
      ) {
        this.monthNow =
          Number(this.$localStorage.get("clock").split(" ")[0].split("/")[1]) -
          Number(new Date().getMonth() + 1);
      }
    }
  },
  methods: {
    updateDay(day, month, year, nextPage) {
      this.fullDay = `${("0" + day).slice(-2)}/${(
        "0" + (month > 12 ? month % 12 : month)
      ).slice(-2)}/${year}`;

      this.$emit("update-clock", this.fullDay);
      if (this.monthNow != -1 && this.monthNow != 4) {
        this.monthNow += nextPage;
      }
      if (this.fullDay === this.today || this.fullDay === this.tomorrow) {
        this.$emit("close-choose-data", false);
      }
    },
    checkDay(day, month, year) {
      return `${("0" + day).slice(-2)}/${(
        "0" + (month > 12 ? month % 12 : month)
      ).slice(-2)}/${year}`;
    },
  },
  watch: {
    fullDay() {
      this.clock = this.$localStorage.get("clock").split(" ")[0];
    },
  },
};
</script>
<style lang="sass">
.select-calendar
  display: flex
  flex-direction: column
  padding: 15px
  top: 0
  height: 100%
  width: calc(100% - 12px)
  position: absolute
  background: white
  left: calc(100% - 1px)
  z-index: 100
  box-sizing: border-box
  box-shadow: 50px 20px 60px rgb(0 0 0 / 25%)
  &__times
    text-transform: uppercase
  &__header
    margin-top: 5px
    user-select: none
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 10px
    color: #5d5d5d
  &__prev, &__next
    width: 24px
    height: 24px
    display: block
    cursor: pointer
  &__week
    margin-top: 12px
    display: flex
    color: gray
    color: #5d5d5d
    padding: 6px 0
    justify-content: space-around
    position: relative
    &::before, &::after
      content: ''
      position: absolute
      width: 100%
      height: 1px
      transform: scaleY(0.3)
      background: gray
    &::before
      top: 0
    &::after
      bottom: 0
  &__wrapper
    font-weight: 600
    display: flex
    flex-wrap: wrap
  &__day
    cursor: pointer
    display: flex
    align-items: center
    text-align: center
    justify-content: center
    width: calc(100% / 7)
    height: 42.83px
    user-select: none
    p
      font-weight: 600
      color: #5d5d5d
    &_active
      position: relative
      p
        color: white !important
        z-index: 100
      &::before
        content: ''
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
        background: $palette-blue
        border-radius: 50%
    &_before, &_after
      background-color: #f5f5f5
</style>
