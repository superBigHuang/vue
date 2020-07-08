// 如何在webpack 构建的项目中，使用Vue开发
// 注意：在webpack中 使用  var vm = new Vue 导入的Vue构造函数，功能不完整
import Vue from 'vue'
// 如果要使用最全的vue可以使用手动导入
// import Vue from "../node_modules/vue/dist/vue"
// 或者修改 webpack.config.js 中的 resolve 属性

// var login = {
//     template: '<h1>这是模板</h1>'
// }

import login from './login.vue'
// 默认webpack无法打包.vue文件，需要安装相关的loader
// cnpm i vue-loader vue-template-compiler -D

var vm = new Vue({
    el: '#app',
    data: {
        msg: 1234
    },
    // components: {
    //     login
    // }
    render: function (createElement) {
        return createElement(login)
    }
})


import m1, {tittle as ti} from './test'

console.log(m1.name)
console.log(login.data().age)
console.log(ti)