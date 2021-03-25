<template>
  <!-- Icon whatsapp -->
  <a href="https://wa.me/000000000000" class="whatsapp" target="_blank">
    <div class="whatsapp-inner">
      <GSvg nameIcon="Whatsapp" title="Whatsapp" />
    </div>
  </a>
</template>

<script>
export default {
  name: "WhatsApp",
};
</script>

<style lang="scss">
//
.whatsapp {
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -40px;
  left: 20vw;
  width: 77px;
  height: 77px;
  background-color: rgba(map-get($themes, first), 0.3);
  border-radius: 50%;

  //
  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 85%;
    @include addTheme("background-color", first);
    border-radius: inherit;
  }

  //
  svg {
    fill: white;
    width: 40px;
    height: 40px;
  }
}
</style>
