<template>
    <div>
        <h1>hello {{ name }}</h1>
        <v-title title="Vue组件化title"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
    </div>

</template>

<script>
    import vTitle from './title.vue';
    import vButton from './button.vue';

    export default {
        data() {
            return {
                name: 'Vue.js'
            }
        },
        components: {
            vTitle,
            vButton
        },
        methods: {
            handleClick(e) {
                alert('点击按钮');
            }
        }
    }
</script>

<style scoped>
    div {
        color: #f60;
        font-size: 24px;
    }
</style>