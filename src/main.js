import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import InfiniteLoading from 'vue-infinite-loading'
import Element from 'element-ui';
Element.Dialog.props.lockScroll.default=false;
import store from '@/vuex/index'


Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.use(InfiniteLoading);


new Vue({

  router,store,
  render: h => h(App),
}).$mount('#app')
