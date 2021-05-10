<template>
  <div class="block-information">
    <div class="block-information__wrapper">
      <div
        class="block-information__bg"
        :style="{
          background:
            'url(' +
            require(`../../assets/img/backrounds/${source}`) +
            ') center center/cover no-repeat',
        }"
      >
        {{ name }}
      </div>
      <div class="block-information__descr">{{ description }}</div>
      <button class="block-information__btn">{{ btntext }}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "block-information",
  props: ["name", "description", "source", "btntext"],
};
</script>
<style lang="sass">
.block-information
  cursor: pointer
  width: 48%
  height: 280px
  position: relative
  &__wrapper
    display: flex
    flex-direction: column
  &__bg
    white-space: pre-line
    display: flex
    justify-content: center
    height: 150px
    font-size: 26px
    color: white
    box-sizing: border-box
    align-items: center
  &__descr
    white-space: pre-line
    margin-top: 15px
    color: $palette-black
  &__btn
    position: absolute
    bottom: 0
    display: block
    padding: 5px 25px
    margin-top: 15px
    background: $palette-green
    color: white
    cursor: pointer
</style>
