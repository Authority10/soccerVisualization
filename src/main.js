import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './assets/css/global.css'
import {Button,Input,Tabs,TabPane,Form,FormItem,Message,Cascader} from 'element-ui';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.prototype.$message = Message;

Vue.use(Button).use(Input).use(Tabs).use(TabPane).use(Form).use(FormItem).use(Cascader);

/* eslint-disable no-foot */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
