//webpack配置文件

const path = require('path')

module.exports = {
    //手动指定入口和出口
    entry: path.join(__dirname, './src/main.js'), //入口，表示webpack要打包哪个文件
    output: { //出口
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js' //指定输出的名称
    }

}