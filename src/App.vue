<template>
  <div id="app">
    <div id="nav">
      <div @click="geoPosition">GEOLOCATION</div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    geoPosition() {
      if (!navigator.geolocation) {
        console.log("Не поддерживается ваш браузер");
        return;
      }

      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
      });

      function success({ coords }) {
        const { latitude, longitude } = coords;
        const position = [latitude, longitude];
        console.log(position);
      }

      function error({ message }) {
        console.log(message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
