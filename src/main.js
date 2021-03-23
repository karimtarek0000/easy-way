import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";
import { Trans } from "./plugins/Translation";
//
import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import BtnPrimary from "@/components/BtnPrimary";
//
Vue.config.productionTip = false;

Vue.component("BtnPrimary", BtnPrimary);
Vue.component("VueSlickCarousel", VueSlickCarousel);

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
