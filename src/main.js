import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";
import { Trans } from "./plugins/Translation";
//
import VueSlickCarousel from "vue-slick-carousel";
import BtnPrimary from "@/components/BtnPrimary";
import GSvg from "@/components/shared/GSvg";
//
Vue.config.productionTip = false;

Vue.component("BtnPrimary", BtnPrimary);
Vue.component("VueSlickCarousel", VueSlickCarousel);
Vue.component("GSvg", GSvg);

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
