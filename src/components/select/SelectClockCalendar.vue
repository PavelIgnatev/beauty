<template>
  <div class="select-clock__calendar"></div>
</template>
<script>
export default {
  name: "select-clock-calendar",
};
</script>
<style lang="sass">
.select-clock
  &__calendar
    top: 0
    height: 100%
    width: calc(100% - 12px)
    position: absolute
    background: white
    left: calc(100% - 7px)
    z-index: 100
</style>
