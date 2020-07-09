//webpack配置文件

const path = require('path')
const webpack = require('webpack')
//导入在内存中生成HTML页面的插件
//只要是插件都一定要放到plugins节点中去
const htmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //手动指定入口和出口
    entry: path.join(__dirname, './src/main.js'), //入口，表示webpack要打包哪个文件
    output: { //出
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
        }),
        // // 请确保引入这个插件！
        new VueLoaderPlugin(),
    ],
    module: { //这个节点用于配置所有的第三方模块加载器
        rules: [ // 所有第三方模块的匹配规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},

        ],

    },
    resolve: {
        alias: { //设置 vue 被导入时候包的路径
            // 'vue$': "vue/dist/vue.js"
        }
    }

}