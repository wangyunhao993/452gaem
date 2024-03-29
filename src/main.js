import Vue from 'vue'
import App from './App.vue'

// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.use(ElementUI);


// 全局样式
import './assets/base.less'

Vue.config.productionTip = false

// 路由
import router from './router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
