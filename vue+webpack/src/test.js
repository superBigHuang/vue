/*在ES6中，使用export default和export向外暴露成员
* 使用 import 模块名称 from 模块标识符 导入模块*/

var info =  {
    name: 'zs',
    age: 20
}
// 注意 export default 向外暴露成员，可以使用任意变量接收
// 注意 在一个模块中 export default 只允许向外暴露一次
export default info

// export default {
//     address: "北京"
// }
// 注意 在一个模块中可以同时使用 export default 和 export
// 注意 使用export向外暴露成员之恶能使用 {'变量名称'} 的形式来接收，这种形式叫做 按需导出
// 注意 export 可以向外暴露多个成员
// 注意 使用export导出的成员，必须严格按照导出时候的名称来使用
// 注意 使用export导出的成员，如果就想换个名称，可以使用as来取别名
export var tittle = '哈哈哈'