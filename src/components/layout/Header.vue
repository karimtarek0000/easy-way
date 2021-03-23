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
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: map-get($themes, second);
    text-transform: capitalize;
    z-index: 10;
    user-select: none;

    p {
      @include addFontSize(map-get($font-size, 23));
    }

    h1 {
      @include addFontSize(map-get($font-size, 35));
    }
  }
}

/////////////////////////////
// Slick slider
.slick-dots {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
  list-style: none;
  padding: 0;
  //
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin-bottom: 10px;
    transform: scale(0.7);
    transition: transform 0.5s ease;
    //
    button {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgb(192, 191, 191);
      color: transparent;
      appearance: none;
      border: 0;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .slick-active {
    button {
      background-color: #ffffff;
    }
    transform: scale(1);
    border-radius: 50%;
  }
}

.slick-track {
  display: flex;
}
</style>
