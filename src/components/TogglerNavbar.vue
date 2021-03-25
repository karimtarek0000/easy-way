<template>
  <div class="toggler" @click.stop="toggler">
    <!-- Burger -->
    <div
      :class="['toggler__burger', { 'toggler__burger--active': toggleNavbar }]"
    >
      <span v-for="index of 5" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TogglerNavbar",
  data() {
    return {
      toggleNavbar: false,
    };
  },
  methods: {
    //
    toggler() {
      this.toggleNavbar = !this.toggleNavbar;
      this.$emit("toggler", this.toggleNavbar);
    },
  },
  mounted() {
    document.addEventListener("click", () => {
      this.toggleNavbar = false;
      this.$emit("toggler", this.toggleNavbar);
    });
  },
};
</script>

<style lang="scss">
// 4) - Toggler
.toggler {
  display: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  direction: rtl;
  overflow: hidden;

  // Responsive
  @media (max-width: 66.875em) {
    display: flex;
  }

  // 1) - Burger
  &__burger {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    // Span
    span {
      position: absolute;
      display: block;
      height: 4px;
      width: 40px;
      border-radius: 100px;
      transform-origin: center;
      opacity: 1;
      transition: opacity 0.6s ease-in-out;
      will-change: right, transform;
      background-color: #03608e;

      // 1)
      &:nth-of-type(1) {
        top: 8px;
        width: 30px;
        right: 5px;
        transition: all 0.6s ease-in-out;
      }
      // 2)
      &:nth-of-type(2) {
        width: 20px;
        top: 18px;
        right: 5px;
        transition: all 0.6s 0.2s ease-in-out;
      }
      // 3)
      &:nth-of-type(3) {
        width: 10px;
        top: 28px;
        right: 5px;
        transition: all 0.6s 0.4s ease-in-out;
      }
      // 4), 5)
      &:nth-of-type(4),
      &:nth-of-type(5) {
        right: -0.2px;
        top: 17.5px;
        opacity: 0;
      }
      // 4)
      &:nth-of-type(4) {
        transform: rotate(45deg) translate3d(-60px, 0, 0);
        transition: all 0.6s 0.8s ease-out, all 0.7s 0s ease-in;
      }
      // 5)
      &:nth-of-type(5) {
        transform: rotate(-45deg) translate3d(-60px, 0, 0);
        transition: all 0.6s 0.8s ease-out, all 0.7s 0s ease-in;
      }
    }

    //
    &--active {
      //
      span {
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3) {
          right: -40px;
          opacity: 0;
        }
        //
        &:nth-of-type(4),
        &:nth-of-type(5) {
          opacity: 1;
        }
        //
        &:nth-of-type(4) {
          transform: rotate(45deg) translate3d(0, 0, 0);
        }
        // 5)
        &:nth-of-type(5) {
          transform: rotate(-45deg) translate3d(0, 0, 0);
        }
      }
    }
  }
}
</style>
