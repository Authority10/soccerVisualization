import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { Button,Input,Tabs,TabPane,Form,FormItem,Message} from 'element-ui';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.prototype.$message = Message;

Vue.use(Button).use(Input).use(Tabs).use(TabPane).use(Form).use(FormItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
