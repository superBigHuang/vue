<template>
    <div>
        <h1 @click="show">这是登录组件--{{name}}</h1>
    </div>
</template>

<script>
    /*在ES6中，使用export default和export向外暴露成员
    * 使用 import 模块名称 from 模块标识符 导入模块*/
    export default {
        methods: {
            show() {
                console.log('调用了login.vue中的show方法')
            }
        },
        data() {
            return {name: 'zs', age: 123}
        }
    }
</script>

<style scoped>

</style>