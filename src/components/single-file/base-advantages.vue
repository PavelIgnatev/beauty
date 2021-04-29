<template>
  <div class="advantages__wrapper">
    <div
      class="advantages__bg"
      :style="{
        background:
          'url(' +
          require(`../../assets/img/icons/${source}`) +
          ') center center/cover no-repeat',
      }"
    ></div>
    <div class="advantages__title">{{ title }}</div>
    <div class="advantages__subtitle">{{ subtitle }}</div>
  </div>
</template>
<script>
export default {
  name: "advantages",
  props: { source: String, title: String, subtitle: String },
};
</script>
<style lang="sass">
.advantages
  &__wrapper
    width: 30%
    height: 200px
    text-align: center
  &__bg
    display: block
    justify-content: center
    width: 140px
    margin: 0 auto
    height: 100px
    font-size: 26px
    color: white
    box-sizing: border-box
    align-items: center
  &__title
    font-weight: 600
  &__title, &__subtitle
    margin-top: 10px
    color: $palette-black
</style>
