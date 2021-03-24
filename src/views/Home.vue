<template>
  <main>
    <!-- Header -->
    <Header :data="dataSlider" />
    <!-- Counter -->
    <TimeRegister>
      <!--  -->
      <Counter deadline="05/20/2021" />
      <!--  -->
      <BtnPrimary
        namePage="Sections"
        class="join"
        :text="$t('buttons.joinUs')"
      />
    </TimeRegister>
    <!-- Services -->
    <Services />
  </main>
</template>

<script>
import Header from "@/components/layout/Header";
import TimeRegister from "@/components/TimeRegister";
import Counter from "@/components/Counter";
import Services from "@/components/sections/Services";
//
export default {
  name: "Home",
  data() {
    return {
      dataSlider: [
        {
          id: 1,
          linkImg: "https://i.postimg.cc/52VG4NtS/image-min.png",
        },
        {
          id: 2,
          linkImg:
            "https://i.postimg.cc/vTHQ4LXb/neonbrand-z-FSo6bn-ZJTw-unsplash.jpg",
        },
        {
          id: 3,
          linkImg: "https://i.postimg.cc/52VG4NtS/image-min.png",
        },
        {
          id: 4,
          linkImg:
            "https://i.postimg.cc/vTHQ4LXb/neonbrand-z-FSo6bn-ZJTw-unsplash.jpg",
        },
      ],
    };
  },
  components: {
    Header,
    TimeRegister,
    Counter,
    Services,
  },
};
</script>

<style lang="scss" scoped>
//
.join {
  background-color: map-get($themes, eighth);
  width: 20.3rem;
  height: 5.9rem;
  @include addFontSize(map-get($font-size, 16));
  margin: 5rem auto;

  //
  @media (hover: hover) {
    &:hover {
      background-color: rgba(map-get($themes, eighth), 0.9);
    }
  }
}
</style>
