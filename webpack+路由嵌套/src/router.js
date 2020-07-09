import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'
import login from './subcom/Login.vue'
import register from './subcom/Register.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register}
            ]
        }
    ]
});

//把路由对象暴露出去
export default router