<template>
    <div>
        <h1>这是Account组件</h1>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>
<!--普通的style标签，只支持普通的样式-->
<style scoped>
    div{
        font-style: italic;
    }
</style>