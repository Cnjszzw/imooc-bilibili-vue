import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import InfiniteLoading from 'vue-infinite-loading'
//import Element from 'element-ui';
Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.use(InfiniteLoading);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
