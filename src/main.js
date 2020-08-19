import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import {Button,Search,Toast,Sticky} from "vant";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

Vue.use(Button).use(Search).use(Toast).use(Sticky);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
