<template>
  <div id="app">
    <!--  -->
    <div class="only-responsive">
      <!--  -->
      <BtnPrimary
        namePage="Sections"
        class="navbar__register"
        :text="$t('buttons.register')"
      />
      <ChangeLang />
    </div>
    <!--  -->
    <Navbar :links="navbarItems" />
    <!--  -->
    <router-view />
    <!--  -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChangeLang from "@/components/ChangeLang";
//
export default {
  name: "App",
  data() {
    return {
      navbarItems: [
        {
          namePage: "Home",
          text: "home",
        },
        {
          namePage: "Sections",
          text: "sections",
        },
        {
          namePage: "AboutAcademy",
          text: "about academy",
        },
        {
          namePage: "Membership",
          text: "membership",
        },
        {
          namePage: "Credence",
          text: "credence",
        },
        {
          namePage: "JoinUs",
          text: "join us",
        },
        {
          namePage: "RequestAConsultation",
          text: "request a consultation",
        },
        {
          namePage: "CertificateVerification",
          text: "certificate verification",
        },
      ],
    };
  },
  components: {
    Navbar,
    ChangeLang,
    Footer,
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;

  @include BreakPoint("desktop") {
    font-size: 56.25%; // 9px
  }

  @include BreakPoint("tablet-l") {
    font-size: 50%; // 8px
  }
}

//
body {
  font-family: DINNext;
  box-sizing: border-box;
  overflow-x: hidden;
}

//
.container {
  max-width: 1200px;
  padding: 0px 10px;
  margin: 0 auto;
}

//
.only-responsive {
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  //
  @media (min-width: 66.875em) {
    display: none;
  }
}

//
h1,
h2,
h3,
h4,
h5 {
  user-select: none;
}
</style>
