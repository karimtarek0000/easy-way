import { i18n } from "../i18n";

const Trans = {
  //
  get defaultLocale() {
    const getLang = localStorage.getItem("lang");
    if (getLang && getLang !== null) return getLang;

    return process.env.VUE_APP_I18N_LOCALE;
  },
  //
  get supportedLocales() {
    return process.env.VUE_APP_I18M_ALL_LANGUAGE.split(",");
  },
  //
  get currentLocale() {
    return i18n.locale;
  },
  //
  set currentLocale(locale) {
    i18n.locale = locale;
  },
  //
  getUserSupportedLocale() {
    const userPreferredLocale = Trans.getUserLocale();

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoISO)) {
      return userPreferredLocale.localeNoISO;
    }

    return Trans.defaultlocale;
  },
  //
  getUserLocale() {
    const locale =
      window.navigator.language ||
      window.navigator.userLanguage ||
      Trans.defaultLocale;
    return {
      locale: locale,
      localeNoISO: locale.split("-")[0],
    };
  },
  //
  setI18nLocaleInServices(locale) {
    let setDir = null;
    Trans.currentLocale = locale;

    locale === "ar" ? (setDir = "rtl") : (setDir = "ltr");
    document.querySelector("html").setAttribute("lang", locale);
    document.querySelector("html").setAttribute("dir", setDir);
    return locale;
  },
  //
  changeLocale(locale) {
    if (!Trans.isLocaleSupported(locale))
      return Promise.reject(new Error("Locale not supported"));
    return Trans.loadLocaleFile(locale).then((msgs) => {
      i18n.setLocaleMessage(locale, msgs.default || msgs);
      return Trans.setI18nLocaleInServices(locale);
    });
  },
  //
  loadLocaleFile(locale) {
    return import(`@/locales/${locale}.json`);
  },
  //
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale);
  },
  //
  routeMiddleware(to, from, next) {
    const locale = to.params.locale;

    //
    if (!Trans.isLocaleSupported(locale)) {
      return next(Trans.getUserSupportedLocale());
    }
    //
    localStorage.setItem("lang", locale);

    //
    return Trans.changeLocale(locale).then(() => next());
  },
  //
  i18nRoute(to) {
    return {
      ...to,
      params: {
        locale: this.currentLocale,
        ...to.params,
      },
    };
  },
};

export { Trans };
