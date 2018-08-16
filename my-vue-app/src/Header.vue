<template>
    <div>
        <h1>Here I wanna to Search Something</h1>
        <input type="text" :placeholder="msg" v-model="message" @keyup.13="gotoSubmit">
        <button v-on:click="search">Search</button>
        <span v-if="cool">{{message}}</span>
    </div>
</template>

<script>
export default {
    props:{},
    data () {
        return {
            counter: 0,
            msg : 'Search...',
            cool : true,
            message:''
        }
    },
    methods:{
        search : function(){
            this.message = 'click ' + (this.counter++) + ' times';
        },
        gotoSubmit:function(){
            this.message = 'Submited!';
        }
    }
}
</script>


<style>

</style>

