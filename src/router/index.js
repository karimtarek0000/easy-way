import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sections from "../views/Sections.vue";
import { Trans } from "@/plugins/Translation";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:locale",
    component: {
      render: (h) => h("router-view"),
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "sections",
        name: "Sections",
        component: Sections,
      },
      {
        path: "about-academy",
        name: "AboutAcademy",
        component: Home,
      },
      {
        path: "membership",
        name: "Membership",
        component: Home,
      },
      {
        path: "credence",
        name: "Credence",
        component: Home,
      },
      {
        path: "join-us",
        name: "JoinUs",
        component: Home,
      },
      {
        path: "request-a-consultation",
        name: "RequestAConsultation",
        component: Home,
      },
      {
        path: "certificate-verification",
        name: "CertificateVerification",
        component: Home,
      },
    ],
  },
  {
    path: "*",
    redirect() {
      return Trans.defaultLocale;
    },
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active-class",
  linkExactActiveClass: "exact-active-class",
  base: process.env.BASE_URL,
  routes,
});

export default router;
