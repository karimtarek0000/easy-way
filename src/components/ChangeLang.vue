<template>
  <button @click="setLanguage(supportedLocales)">
    {{ supportedLocales }}
  </button>
</template>

<script>
import { Trans } from "@/plugins/Translation";

export default {
  name: "ChangeLang",
  data() {
    return {
      currentLang: this.$i18n.locale,
    };
  },
  computed: {
    supportedLocales() {
      return Trans.supportedLocales.filter((lang) => {
        return lang !== this.currentLang;
      })[0];
    },
  },
  methods: {
    //
    setLanguage(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        const to = this.$router.resolve({ params: { locale } });
        localStorage.setItem("lang", locale);
        return Trans.changeLocale(locale).then(() => {
          this.$router.push(to.location);
          location.reload();
        });
      }
    },
  },
  created() {
    this.currentLang = localStorage.getItem("lang");
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid map-get($themes, third);
  text-align: center;
  padding: 0;
  text-transform: uppercase;
  margin-inline-start: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>
