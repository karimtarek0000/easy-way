<template>
  <div id="app">
    <Navbar :links="navbarItems" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
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

body {
  font-family: DINNext;
  box-sizing: border-box;
  height: 10000px;
}

//
.container {
  max-width: 1200px;
  padding: 0px 10px;
  margin: 0 auto;
}
</style>
