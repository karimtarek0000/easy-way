import Vue from "vue";
import VueI18n from "vue-i18n";
import ar from "@/locales/ar.json";
Vue.use(VueI18n);

//
const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
    },
  },
  ar: {
    currency: {
      style: "currency",
      currency: "EGP",
      currencyDisplay: "symbol",
    },
  },
};
//
const setTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "2-digit",
  },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  },
};
//
const dateTimeFormats = {
  en: setTimeFormats,
  ar: setTimeFormats,
};

//
export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "ar",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "ar",
  messages: { ar },
  dateTimeFormats,
  numberFormats,
});
