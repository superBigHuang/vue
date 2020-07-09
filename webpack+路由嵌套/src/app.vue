<template>
    <div>
        <h1>这是app组件</h1>
        <mt-button type="primary" size="small" @click="show">primary</mt-button>
        <mt-button type="danger" disabled>danger</mt-button>
        <mt-button type="primary" size="large" plain>primary</mt-button>
        <br>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodsList">GoodsList</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    // 导入Toast组件
    import {Toast} from 'mint-ui';

    export default {
        data() {
        },
        methods: {
            show() {
                // Toast("哈哈哈哈")
                Toast({
                    message: '提示',
                    position: 'top',
                    duration: 1000,
                });
            }
        }
    }
</script>

<style scoped>

</style>