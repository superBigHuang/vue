// 这是我们项目的js入口文件

//1.导入jquery
//由于ES6d的代码太高级了,浏览器解析不了，所以会报错
import $ from 'jquery'  //相当于 const $ = require('jquery')

$(function () {
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', function () {
            return 'yellow'
    })


})

