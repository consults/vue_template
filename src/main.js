import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import store from "./store";
import VueAxios from "vue-axios";
import http from "./http";
Vue.use(ElementUI);

Vue.use(VueAxios, http);

Vue.mixin({
  methods: {
    // register global methods
    formatString: require("string-format-obj"),
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
