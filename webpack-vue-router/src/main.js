import Vue from 'vue'
// 1.导入vue-loader包
import VueRouter from 'vue-router'
import app from './app.vue'
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'

// 2.手动安装VueRouter
Vue.use(VueRouter)

//3.创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/account', component: account},
        {path: '/goodsList', component: goodsList},
    ]
});

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    // 4.将路由对象挂载到vm上
    router
})