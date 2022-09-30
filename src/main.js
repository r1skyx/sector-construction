import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import VueSilentbox from "vue-silentbox";
Vue.use(VueSilentbox);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
