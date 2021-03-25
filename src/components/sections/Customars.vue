<template>
  <section class="customars">
    <h3>قائمه العملاء</h3>

    <div class="customars__list container">
      <div class="customars__image">
        <img src="@/assets/images/customars/1.png" alt="1" />
      </div>
      <div class="customars__image">
        <img src="@/assets/images/customars/2.png" alt="2" />
      </div>
      <div class="customars__image">
        <img src="@/assets/images/customars/3.png" alt="3" />
      </div>
      <div class="customars__image">
        <img src="@/assets/images/customars/4.png" alt="4" />
      </div>
      <div class="customars__image">
        <img src="@/assets/images/customars/5.png" alt="5" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Customars",
};
</script>

<style lang="scss">
//
.customars {
  text-align: center;
  margin-top: 4rem;

  //
  h3 {
    @include addTheme("color", thirtenth);
    @include addFontSize(map-get($font-size, 40));
  }

  &__list {
    display: flex;
    flex-flow: wrap row-reverse;
    justify-content: space-between;
    margin-top: 3rem;

    //
    @include BreakPoint("phone") {
      > * {
        flex-basis: 50%;
      }
    }
  }

  &__image {
    width: 20rem;
    height: 16rem;

    //
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
