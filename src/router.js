import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import index from './components/index.vue'
// import indexs from './components/indexs.vue'

let routes = [
    { path: '/', component: index ,
        // children: [
        //     {
        //     path: '',
        //     redirect: 'index'
        //     },
        //     {
        //     path: '',
        //     component: indexs
        //     },
        // ]   
    },
    // { path: '/bar', component: Bar }
  ]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })


export default router