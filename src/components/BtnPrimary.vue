<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "BtnPrimary",
  props: ["text"],
};
</script>

<style scoped>
button {
  border: 0;
  cursor: pointer;
}
</style>
