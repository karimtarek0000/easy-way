<template>
  <section class="time-register">
    <div class="time-register__info">
      <h2 class="time-register__info__title">
        التسجيل متاح الآن في دوراتنا القادمة والتي ستبدأ بتاريخ 15 مارس
      </h2>
      <p class="time-register__info__subtitle">ستبدأ الدورات خلال</p>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "TimeRegister",
};
</script>

<style lang="scss" scoped>
.time-register {
  background-color: map-get($themes, seventh);
  padding: 7rem 1rem 2rem 1rem;

  //
  &__info {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    text-align: center;

    //
    &__title {
      @include addFontSize(map-get($font-size, 30));
      flex-basis: 35vw;
      color: map-get($themes, fifth);
      font-weight: 400;

      @include BreakPoint("phone") {
        flex-basis: 100vw;
      }
    }

    //
    &__subtitle {
      @include addFontSize(map-get($font-size, 25));
      flex-basis: 100%;
      color: map-get($themes, sixth);
      font-weight: 300;
      margin-top: 2rem;
    }
  }
}
</style>
