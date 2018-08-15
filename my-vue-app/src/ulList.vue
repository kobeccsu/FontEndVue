<template>
    <li v-bind:data-group="group">{{todo.text}}</li>
</template>

<script>
    export default{
        props : ['todo', 'group'],
        data(){
            return{
                
            }
        }
    }
</script>