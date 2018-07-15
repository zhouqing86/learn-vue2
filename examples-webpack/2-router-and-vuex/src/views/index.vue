<template>
    <div>
        <h1>首页</h1>
        <router-link to="/about">跳转到about</router-link><br/>
        Count: {{count}} <br/>

        Mutation: <br/>
        <button @click="handleIncrement">+</button>
        <button @click="handleDecrease">-</button>
        <br/>

        Actions: <br/>
        <button @click="handleActionIncrement">+</button>
        <br/>

        Aysnc Actions: <br/>
        <button @click="handleAyncActionIncrement">+</button>

        <hr/>
        {{ list }}

        <hr/>
        Vuex Store module A <br/>
        {{ this.$store.state.a.message }}
        <br/>
    </div>

</template>

<script>
    export default {
        computed: {
            count: function() {
                return this.$store.state.count;
            },
            list: function () {
                return this.$store.getters.filteredList;
            }
        },
        methods: {
            handleIncrement: function () {
                this.$store.commit('increment');
            },
            handleDecrease: function () {
                this.$store.commit('decrease');
            },
            handleActionIncrement: function () {
                this.$store.dispatch('increment');
            },
            handleAyncActionIncrement: function () {
                this.$store.dispatch('asyncIncrement').then(() => {
                    console.log(this.$store.state.count);
                });
            }
        }
    }
</script>

<style scoped>
    div {
        color: #ff5500;
        background: #CCCCCC;
        font-size: 24px;
    }
</style>