import Vue from 'vue'
// 1.导入vue-loader包
import VueRouter from 'vue-router'
import app from './app.vue'

// 导入自定义路由模块
import router from './router'

// 2.手动安装VueRouter
Vue.use(VueRouter)

//3.创建路由对象


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    // 4.将路由对象挂载到vm上
    router
})