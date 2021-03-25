<template>
  <header class="carousel__wrapper">
    <VueSlickCarousel v-bind="settings">
      <div class="carousel__item" v-for="info in data" :key="info.id">
        <img :src="info.linkImg" />
        <div class="carousel__info container">
          <p>easy way institute for training</p>
          <h1>
            <bdi>
              تعلم الإنجليزية عن بعد في معهد easy way مع نخبة من مدرسين اللغة
              الإنجليزية تعلمها كأنك تتعلمها في موطنها
            </bdi>
          </h1>
        </div>
      </div>
    </VueSlickCarousel>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        lazyLoad: "ondemand",
        fade: true,
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
.carousel {
  width: 100%;
  //
  &__wrapper {
    position: relative;
    background-color: transparent;
    overflow: hidden;
    height: calc(100vh - #{$height-navbar});

    //
    @media (max-width: 66.875em) {
      height: calc(100vh - 120px);
    }
  }

  //
  &__item {
    //
    img {
      display: block;
      width: 100vw;
      height: 90vh;
      object-fit: cover;
      pointer-events: none;
    }
  }

  //
  &__info {
    text-align: center;
    top: 50%;
    width: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    position: absolute;
    color: map-get($themes, second);
    text-transform: capitalize;
    z-index: 10;
    user-select: none;

    //
    @include BreakPoint("tablet-l") {
      width: 100%;
    }

    p {
      @include addFontSize(map-get($font-size, 23));
    }

    h1 {
      font-weight: 400;
      @include addFontSize(map-get($font-size, 35));
    }
  }
}
</style>
