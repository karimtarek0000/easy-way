<template>
  <nav class="navbar">
    <!-- Navbar wrapper -->
    <div class="navbar__wrapper container">
      <!-- Logo -->
      <router-link class="navbar__logo" :to="$i18nRoute({ name: 'Home' })">
        <img src="@/assets/logo.jpg" alt="logo" />
      </router-link>
      <!-- Navbar items -->
      <ul class="navbar__items">
        <router-link
          v-for="link in links"
          :key="link.text"
          v-slot="{ href, navigate, isActive, isExactActive }"
          :to="$i18nRoute({ name: link.namePage })"
          custom
          exact
          :title="link.text"
        >
          <li>
            <a
              :class="[
                'navbar__items__item',
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
      <BtnPrimary class="navbar__register" text="register" />
      <!--  -->
      <ChangeLang />
    </div>
  </nav>
</template>

<script>
import ChangeLang from "@/components/ChangeLang";
//
export default {
  name: "Navbar",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  components: {
    ChangeLang,
  },
};
</script>

<style lang="scss" scoped>
//
.navbar {
  background-color: var(--white);
  //
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: $height-navbar;
    background-color: inherit;
    @include addFontSize(map-get($font-size, 16));
    text-transform: capitalize;
  }

  //
  &__logo {
    width: 122px;
    height: 100%;

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
    //
    &__item {
      display: block;
      text-decoration: none;
      color: map-get($themes, fourth);
      font-weight: 300;
      margin-inline-start: 20px;
      padding: 0 5px;
    }
  }

  //
  &__register {
    text-align: center;
    width: 125px;
    height: 50px;
    border-radius: 200px;
    background-color: map-get($themes, first);
    font-size: inherit;
    color: map-get($themes, second);
    transition: background-color 0.5s;
    margin-inline-start: auto;
    text-transform: inherit;

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
