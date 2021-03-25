<template>
  <section class="banar">
    <!--  -->
    <div class="banar__wrapper container">
      <!-- Slider -->
      <div class="carousel__wrapper">
        <VueSlickCarousel v-bind="settings">
          <div class="banar__item" v-for="slide in 3" :key="slide">
            <p>أفضل الدورات والدورات التدريبية على موقعنا</p>
            <!--  -->
            <BtnPrimary namePage="Sections" class="banar__view" text="شاهد" />
          </div>
        </VueSlickCarousel>
      </div>
      <!-- Image -->
      <div class="banar__image">
        <img src="@/assets/images/other4.png" alt="other4" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banar",
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
//
.banar {
  @include addTheme("background-color", thirtenth);
  height: 545px;

  //
  &__wrapper {
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;

    > * {
      flex: 1 1 calc(99% / 2);
    }
  }

  //
  &__image {
    text-align: center;

    //
    img {
      transform: translateY(40px);
    }

    @include BreakPoint("tablet-p") {
      display: none;
    }
  }

  //
  &__item {
    justify-content: center;
    @include addFontSize(map-get($font-size, 40));
    @include addTheme("color", second);
    text-align: center;

    //
    &:focus {
      outline: none;
    }
  }

  //
  &__view {
    width: 16.7rem;
    height: 5.1rem;
    border-radius: 5px !important;
    @include addTheme("background-color", first);
    @include addFontSize(map-get($font-size, 20));
    margin: 2rem auto;

    //
    @media (hover: hover) {
      &:hover {
        background-color: rgba(map-get($themes, first), 0.7);
      }
    }
  }

  /////////////////////////////
  //
  .carousel__wrapper {
    background-color: transparent;
    overflow: hidden;
    height: 100%;

    //
    .slick-slider,
    .slick-list,
    .slick-track {
      height: 100%;
    }

    .slick-track {
      align-items: center;
      justify-content: center;
    }

    // Slick slider
    .slick-dots {
      top: auto;
      bottom: 150px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;

      //
      @include BreakPoint("tablet-l") {
      }

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
