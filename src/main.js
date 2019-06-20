import Vue from 'vue'
import App from './App.vue'

// 全局样式
import './assets/base.less'

Vue.config.productionTip = false

// 路由
import router from './router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
