<template>
    <div>
        <h1>这是app组件</h1>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodsList">GoodsList</router-link>

        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>