<template>
  <section class="testimonials">
    <h3>عملائنا</h3>

    <div class="testimonials__wrapper container">
      <div class="carousel__wrapper">
        <VueSlickCarousel v-bind="settings">
          <div class="testimonials__item" v-for="slide in 3" :key="slide">
            <p class="testimonials__item__quote">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص
            </p>

            <div class="testimonials__item__image">
              <img src="@/assets/images/testimonials/4.png" alt="1" />
            </div>

            <div class="testimonials__item__info">
              <p>محمد احمد</p>
              <p>استشاري تنميه بشريه</p>
            </div>
          </div>
        </VueSlickCarousel>
      </div>

      <!--  -->
      <div class="testimonials__all-images">
        <img src="@/assets/images/testimonials/1.png" alt="1" />
        <img src="@/assets/images/testimonials/2.png" alt="2" />
        <img src="@/assets/images/testimonials/3.png" alt="3" />
        <img src="@/assets/images/testimonials/4.png" alt="4" />
        <img src="@/assets/images/testimonials/3.png" alt="3" />
        <img src="@/assets/images/testimonials/1.png" alt="1" />
        <img src="@/assets/images/testimonials/2.png" alt="2" />
        <img src="@/assets/images/testimonials/4.png" alt="4" />
        <img src="@/assets/images/testimonials/2.png" alt="2" />
        <img src="@/assets/images/testimonials/4.png" alt="4" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      settings: {
        lazyLoad: "ondemand",
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style lang="scss">
.testimonials {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 70.2rem;
  height: 70.2rem;
  text-align: center;
  @include addTheme("background-color", seventh);

  //
  &__wrapper {
    margin-top: 8rem;
    padding: 1rem 0;
  }

  //
  h3 {
    position: relative;
    @include addTheme("color", ninth);
    @include addFontSize(map-get($font-size, 35));

    //
    &::after,
    &::before {
      content: "";
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    //
    &::before {
      background-image: url("~@/assets/icons/quote.png");
      top: -7.3rem;
      width: 7.3rem;
      height: 7.3rem;
    }

    //
    &::after {
      background-image: url("~@/assets/icons/quote2.png");
      top: 7.3rem;
      width: 3.2rem;
      height: 2.6rem;
    }
  }

  //
  &__item {
    //
    &__quote {
      @include addTheme("color", fourth);
      @include addFontSize(map-get($font-size, 16));
      font-weight: 300;
    }

    &__image {
      width: 80px;
      margin: 3rem auto 0 auto;

      img {
        width: 100%;
      }
    }

    &__info {
      margin-top: -20px;
      p {
        &:nth-of-type(1) {
          @include addTheme("color", sixtenth);
          @include addFontSize(map-get($font-size, 18));
          font-weight: 300;
        }
        &:nth-of-type(2) {
          @include addTheme("color", sixth);
          @include addFontSize(map-get($font-size, 16));
        }
      }
    }

    //
    &:focus {
      outline: none;
    }
  }

  //
  &__all-images {
    img {
      position: absolute;

      //
      @media (max-width: 1204px) {
        display: none;
      }

      //
      &:nth-of-type(1) {
        top: 20rem;
        right: 2rem;
      }
      &:nth-of-type(2) {
        top: 40rem;
        right: 10rem;
      }
      &:nth-of-type(3) {
        top: 60rem;
        right: 5rem;
      }
      &:nth-of-type(4) {
        top: 50rem;
        left: 5rem;
      }
      &:nth-of-type(5) {
        top: 30rem;
        left: 10rem;
      }
      &:nth-of-type(6) {
        top: 20rem;
        left: 30rem;
      }
      &:nth-of-type(7) {
        top: 44rem;
        left: 30rem;
      }
      &:nth-of-type(8) {
        top: 50rem;
        right: 30rem;
      }
      &:nth-of-type(9) {
        top: 10rem;
        right: 30rem;
      }
      &:nth-of-type(10) {
        top: 10rem;
        left: 10rem;
      }
    }
  }

  ///////////////////////
  //
  .carousel__wrapper {
    width: 40rem;
    margin: 0 auto;
    height: 100%;

    // Slick slider
    .slick-dots {
      position: initial;
      margin-top: 3rem;
      top: auto;
      text-align: center;

      //
      li {
        display: inline-block;
        margin: 0 0.5rem;
      }

      .slick-active {
        //
        button {
          background-color: #dd1b24;
        }
      }
    }
  }
}
</style>
