import Vue from "vue";
import App from "./App.vue";
import "@/assets/main.scss"
Vue.config.productionTip = false;
import router from './routes'

new Vue({
	router,
  render: h => h(App)
}).$mount("#app");
