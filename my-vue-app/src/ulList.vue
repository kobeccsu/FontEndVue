<template>
    <li v-bind:data-group="group" v-bind:data-name="c">{{todo.text}}</li>
</template>

<script>
    import {a,b} from './Alpha';

    export default{
        props : ['todo', 'group'],
        data(){
            return{
                a: a,
                b: b,
                c: a+b
            }
        }
    }
</script>