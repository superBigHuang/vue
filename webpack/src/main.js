// 这是我们项目的js入口文件

//1.导入jquery
//由于ES6d的代码太高级了,浏览器解析不了，所以会报错
import $ from 'jquery'  //相当于 const $ = require('jquery')

// 使用import语法，写入css样式表
import './css/index.css'
import './css/index2.less'
import './css/url.css'
// 如果通过路径形式，去引入node_modules 中相关文件，可以直接省路径前面的node_modules这一层目录，直接写包名
import 'bootstrap/dist/css/bootstrap.css'
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

// class Person {
//     static info = {name: '张三', age: 123}
// }
// 访问person上的info静态属性
// console.log(Person.info)
// 在webpack中，默认只能处理一部分的ES6语法
// 通过Babel,可以帮我们将高级的语法转换为低级的语法
// 在webpack中，可以运行如下两套命令啊，安装babel相关的loader功能
// 1.1. cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2. cnpm i babel-preset-env babel-preset-stage-0 -D
// 2 打开webpack配置文件，添加行的匹配规则
// 3 在项目的根目录中新建一个.babelrc 的babel配置文件，属于json格式

