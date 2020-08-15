import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import {Button,Search,Toast} from "vant";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

Vue.use(Button).use(Search).use(Toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
