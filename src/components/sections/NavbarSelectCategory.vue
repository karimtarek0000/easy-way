<template>
  <nav>
    <ul>
      <li
        v-for="(level, i) in levels"
        :key="level"
        :class="{ 'active-select': i === selectIndex }"
        @click="selectIndex = i"
      >
        {{ $t(`navbarCategorySelected.${level}`) }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarSelectCategory",
  data() {
    return {
      levels: ["all", "beginner", "intermated", "advanced"],
      selectIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  margin-bottom: 5rem;

  //
  ul {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    list-style: none;

    //
    li {
      position: relative;
      margin: 0 2rem;
      @include addFontSize(map-get($font-size, 20));
      font-weight: 300;
      @include addTheme("color", eleventh);
      transition: color 0.5s ease-in-out;
      cursor: pointer;

      @media (max-width: 29.375em) {
        flex-basis: calc(99% / 2);
        margin: 1rem 0;
      }

      //
      &::after {
        content: "";
        position: absolute;
        width: 0%;
        bottom: -4px;
        right: 0;
        height: 3px;
        @include addTheme("background-color", first);
        transition: width 0.5s ease-in-out;
        will-change: width;
      }
    }

    //
    .active-select {
      @include addTheme("color", first);

      //
      &::after {
        width: 100%;
        //
        @media (max-width: 29.375em) {
          width: 60%;
        }
      }
    }
  }
}
</style>
