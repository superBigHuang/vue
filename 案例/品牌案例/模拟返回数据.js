const http = require("http")

const server = http.createServer();

server.on("request", function (request, response) {
    var data = [
        {id: 1, name: '奔驰', ctime: new Date()},
        {id: 2, name: '奥迪', ctime: new Date()},
        {id: 3, name: '奥托', ctime: new Date()},
        {id: 4, name: '宝马', ctime: new Date()},
    ]
    response.end(JSON.stringify(data))

})

server.listen(3000, function () {
    console.log("服务器开启成功")
})