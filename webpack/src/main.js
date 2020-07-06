// 这是我们项目的js入口文件

//1.导入jquery
//由于ES6d的代码太高级了,浏览器解析不了，所以会报错
import $ from 'jquery'  //相当于 const $ = require('jquery')

// 使用import语法，写入css样式表
import './css/index.css'
import './css/index2.less'
// 注意：webpack默认只能打包处理js文件
// 如果要处理非JS文件，我们需要手动的安装一些第三方loader加载器
// 如果需要打包处理css 需要安装 npm i style-loader css-loader -D
// 打开webpack.config.js这个配置文件，在里面新增一个module节点

$(function () {
    $('li:odd').css('backgroundColor', 'black')
    $('li:even').css('backgroundColor', function () {
            return 'yellow'
    })


})

