<template>
    <li v-bind:data-group="group" v-bind:data-name="a">{{todo.text}}</li>
</template>

<script>
    import {a, b} from '../StaticData'
    export default{
        props : ['todo', 'group'],
        data(){
            return{
                a: b
            }
        }
    }
</script>