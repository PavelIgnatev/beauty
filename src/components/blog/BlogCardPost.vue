<template>
  <router-link :to="href" class="block-information">
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
      <div class="block-information__btn">{{ btntext }}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "block-information",
  props: {
    name: String,
    description: String,
    source: String,
    btntext: String,
    href: String,
  },
};
</script>
<style lang="sass">
.block-information
  text-decoration: none
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
    text-decoration: none
    position: absolute
    bottom: 0
    display: block
    padding: 5px 25px
    margin-top: 15px
    background: $palette-green
    color: white
    cursor: pointer
</style>
