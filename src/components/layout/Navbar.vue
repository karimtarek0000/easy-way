<template>
  <nav class="navbar">
    <!-- Navbar wrapper -->
    <div class="navbar__wrapper container">
      <!-- Logo -->
      <router-link class="navbar__logo" :to="$i18nRoute({ name: 'Home' })">
        <img src="@/assets/logo.jpg" alt="logo" />
      </router-link>
      <!-- Navbar items -->
      <ul :class="['navbar__items', toggler && 'navbar__items--active']">
        <router-link
          v-for="link in links"
          :key="link.text"
          v-slot="{ href, navigate, isActive, isExactActive }"
          :to="$i18nRoute({ name: link.namePage })"
          custom
          exact
          :title="link.text"
        >
          <li class="navbar__items__item">
            <a
              :class="[
                isActive && 'active-class',
                isExactActive && 'exact-active-class',
              ]"
              :href="href"
              @click="navigate"
              >{{ $t(`navbar.${link.namePage}`) }}</a
            >
          </li>
        </router-link>
      </ul>
      <!--  -->
      <TogglerNavbar @toggler="toggler = $event" />
      <!--  -->
      <BtnPrimary
        v-if="remove"
        namePage="Sections"
        class="navbar__register"
        :text="$t('buttons.register')"
      />
      <!--  -->
      <ChangeLang v-if="remove" />
    </div>
  </nav>
</template>

<script>
import ChangeLang from "@/components/ChangeLang";
import TogglerNavbar from "@/components/TogglerNavbar";
//
export default {
  name: "Navbar",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      remove: true,
      toggler: false,
    };
  },
  components: {
    ChangeLang,
    TogglerNavbar,
  },
  methods: {
    //
    detectWindowSize() {
      if (window.innerWidth <= 1070) {
        this.remove = false;
      } else {
        this.remove = true;
      }
    },
  },
  mounted() {
    //
    this.detectWindowSize();
    //
    window.addEventListener("resize", () => this.detectWindowSize());
  },
};
</script>

<style lang="scss">
//
.navbar {
  background-color: var(--white);

  //
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: $height-navbar;
    background-color: inherit;
    text-transform: capitalize;
    @include addFontSize(map-get($font-size, 16));

    //
    @media (max-width: 66.875em) {
      height: 70px;
    }
  }

  //
  &__logo {
    width: $height-navbar;
    height: 100%;

    //
    @media (max-width: 66.875em) {
      width: 90px;
    }

    //
    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
    }
  }

  //
  &__items {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: inherit;
    flex-grow: 1;

    //
    @media (max-width: 66.875em) {
      position: fixed;
      justify-content: flex-start;
      top: 0;
      left: -50%;
      flex-direction: column;
      width: 50%;
      @include addTheme("background-color", second);
      height: 100vh;
      z-index: 20;
      padding: 1.5rem;
      font-size: 2rem;
      transition: all 0.6s ease-in-out;
      will-change: all;
    }

    //
    &--active {
      left: 0;
    }

    //
    &__item {
      //
      @media (max-width: 66.875em) {
        margin: 2rem 0;
      }
      //
      a {
        display: block;
        text-decoration: none;
        @include addTheme("color", fourth);
        font-weight: 300;
        padding: 0 5px;
      }
    }
  }

  //
  &__register {
    width: 12.5rem;
    height: 5rem;
    @include addTheme("background-color", first);
    font-size: inherit;
    margin: 0 1rem;
    text-transform: capitalize;
    //
    @media (hover: hover) {
      &:hover {
        background-color: rgba(map-get($themes, first), 0.9);
      }
    }
  }
}
///////////////////////////
//
.exact-active-class {
  color: map-get($themes, first);
  -webkit-text-shadow: 0 0 0.7px map-get($themes, first),
    0 0 0.7px map-get($themes, first);
  text-shadow: 0 0 0.7px map-get($themes, first),
    0 0 0.7px map-get($themes, first);
}
</style>
