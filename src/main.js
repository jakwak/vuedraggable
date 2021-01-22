import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
// import './styles/style.css'

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    dark: "#141414",
    error: "#E50914"
  },
  iconfont: "fa"
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
