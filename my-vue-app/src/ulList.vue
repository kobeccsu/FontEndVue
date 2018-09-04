<template>
    <li v-bind:data-group="group" v-bind:data-name="a">{{todo.text}}</li>
</template>

<script>
    import {a,c} from './Alpha';
    export default{
        props : ['todo', 'group'],
        data(){
            return{
                a: a,
                c: c
            }
        }
    }
</script>