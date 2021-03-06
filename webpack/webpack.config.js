//webpack配置文件

const path = require('path')
const webpack = require('webpack')
//导入在内存中生成HTML页面的插件
//只要是插件都一定要放到plugins节点中去
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    //手动指定入口和出口
    entry: path.join(__dirname, './src/main.js'), //入口，表示webpack要打包哪个文件
    output: { //出口
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js' //指定输出的名称
    },
    devServer: { //这是配置dev-server命令参数的第二种形式，相对来说麻烦一点
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的项目端口
        contentBase: 'src', //指定托管的根目录
        hot: true // 启用热更新 的 第一步

    },
    // 启动热更新的第二步
    plugins: [
        new webpack.HotModuleReplacementPlugin(),  //new 一个热更新的模块对象
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板页面,将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html', //指定页面的名称
        })
    ],
    module: { //这个节点用于配置所有的第三方模块加载器
        rules: [ // 所有第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},  // 配置处理css文件的第三方loader规则
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, // 配置处理less文件的第三方loader规则
            // limit 给定的值，是图片的大小，单位byte，如果我们引用的图片大于或者等于limit就不会被转为base64格式的字符串
            // name=[name].[ext] 不重命名图片名字
            // [hash:8] 去前八位的hash值
            {test: /\.(jpg|gif|png|bmp|jpeg)$/, use: 'url-loader?limit=144668&name=[hash:8]-[name].[ext]'},//配置处理图片的第三方loader规则
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, //配置处理字体的第三方loader规则
            //{test: /\.js$/,use: 'babel-loader', exclude:'/node_modules/'} // 配置处理ES高级语法的第三方loader规则
            //注意 :必须把node_modules目录通过exclude排除掉
        ]
    }

}