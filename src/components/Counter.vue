<template>
  <div class="counter">
    <div class="counter__wrapper counter__wrapper--day">
      <span class="counter__number">{{ days | formatTime }}</span>
      <span class="counter__title">{{ $t("counter.day") }}</span>
    </div>
    <div class="counter__wrapper counter__wrapper--hour">
      <span class="counter__number">{{ hours | formatTime }}</span>
      <span class="counter__title">{{ $t("counter.hour") }}</span>
    </div>
    <div class="counter__wrapper counter__wrapper--minut">
      <span class="counter__number">{{ minutes | formatTime }}</span>
      <span class="counter__title">{{ $t("counter.minut") }}</span>
    </div>
    <div class="counter__wrapper counter__wrapper--second">
      <span class="counter__number">{{ seconds | formatTime }}</span>
      <span class="counter__title">{{ $t("counter.second") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    deadline: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      currentTime: null,
    };
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
  computed: {
    seconds() {
      return Math.floor((this.currentTime / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.currentTime / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.currentTime / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.currentTime / (1000 * 60 * 60 * 24));
    },
  },
  filters: {
    formatTime(value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    },
  },
  methods: {
    countdown() {
      this.currentTime = Date.parse(this.deadline) - Date.parse(new Date());
      if (this.currentTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  //
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 1.8rem;
    @include addTheme("background-color", second);
    min-width: 11.3rem;

    //
    @media (max-width: 28.125em) {
      width: 10rem;
      min-width: 5rem;
    }

    //
    &:not(:first-child) {
      margin-inline-start: 40px;
    }

    //
    &:not(:last-child) {
      &::after {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='18'%3E%3Ccircle data-name='Ellipse 1' cx='4' cy='4' r='4' fill='%23ff0303'/%3E%3Ccircle data-name='Ellipse 2' cx='4' cy='4' r='4' transform='translate(0 10)' fill='%23ff0303'/%3E%3C/svg%3E");
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -23px;
      }
    }
  }

  //
  &__number {
    font-family: "Tajawal", sans-serif;
    color: map-get($themes, first);
    @include addFontSize(map-get($font-size, 62));
    font-weight: 800;

    @media (max-width: 28.125em) {
      @include addFontSize(map-get($font-size, 30));
    }
  }

  //
  &__title {
    @include addFontSize(map-get($font-size, 18));
    margin-top: -22px;
    color: map-get($themes, sixth);
    font-weight: 300;

    @media (max-width: 28.125em) {
      margin-top: -10px;
    }
  }
}
</style>
