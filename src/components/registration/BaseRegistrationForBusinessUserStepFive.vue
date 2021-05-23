<template>
  <section>
    <h1>Теперь ты точно будешь зареган!</h1>
    А вот твои данные:
    {{ formData }}
  </section>
</template>
<script>
export default {
  name: "BaseRegistrationForBusinessUserStepFive",
  props: { formData: Object },
};
</script>
