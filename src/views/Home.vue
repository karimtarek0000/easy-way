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
    <!--  -->
    <Category />
    <!--  -->
    <OtherCourses />
    <!--  -->
    <Videos />
    <!--  -->
    <Courses />
    <!--  -->
    <Banar />
    <!--  -->
    <Blog />
    <!--  -->
    <Testimonials />
    <!--  -->
    <Customars />
  </main>
</template>

<script>
import Header from "@/components/layout/Header";
import TimeRegister from "@/components/TimeRegister";
import Counter from "@/components/Counter";
import Services from "@/components/sections/Services";
import Category from "@/components/sections/Category";
import OtherCourses from "@/components/sections/OtherCourses";
import Courses from "@/components/sections/Courses";
import Videos from "@/components/sections/Videos";
import Banar from "@/components/sections/Banar";
import Testimonials from "@/components/sections/Testimonials";
import Customars from "@/components/sections/Customars";
import Blog from "@/components/sections/Blog";
//
export default {
  name: "Home",
  data() {
    return {
      dataSlider: [
        {
          id: 1,
          linkImg: "https://i.ibb.co/mH6X22Y/image-min.png",
        },
        {
          id: 2,
          linkImg:
            "https://i.ibb.co/PzmCmCk/neonbrand-z-FSo6bn-ZJTw-unsplash.jpg",
        },
        {
          id: 3,
          linkImg: "https://i.ibb.co/mH6X22Y/image-min.png",
        },
        {
          id: 4,
          linkImg:
            "https://i.ibb.co/PzmCmCk/neonbrand-z-FSo6bn-ZJTw-unsplash.jpg",
        },
      ],
    };
  },
  components: {
    Header,
    TimeRegister,
    Counter,
    Services,
    Category,
    OtherCourses,
    Courses,
    Videos,
    Banar,
    Testimonials,
    Customars,
    Blog,
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
