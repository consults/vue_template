import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "index",
      component: ()=> import ("./views/index/index.vue")
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
