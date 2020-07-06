const http = require("http")
//导入解析url地址的核心模块 拿到pathname和query
const urlModule = require("url")

const server = http.createServer();

server.on("request", function (request, response) {
    // const url = request.url
    const {pathname: url, query} = urlModule.parse(request.url, true)

    if (url === '/getscript') {
        var data = {
            name: "xdd",
            age: 19,
            gender: "男"
        }
        //拼接一个合法的js脚本，里面拼接的是一个方法的调用
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        //客户端吧这个字符串当作js调用
        response.end(scriptStr)
    } else {
        console.log('404 not found')
    }
})

server.listen(3000, function () {
    console.log("服务器开启成功")
})