<template>
  <router-link
    :to="$i18nRoute({ name: namePage })"
    v-slot="{ navigate }"
    custom
  >
    <button @click="navigate">{{ text }}</button>
  </router-link>
</template>

<script>
export default {
  name: "BtnPrimary",
  props: {
    text: {
      type: String,
      default: "click",
    },
    namePage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  @extend %btn;
}
</style>
