<template>
    <div>
        <h1>Here I wanna to Search Something</h1>
        <input type="text" :placeholder="msg">
        <button>Search</button>
        <span v-if="cool">Large</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg : 'Search...',
            cool : false
        }
    }
}
</script>


<style>

</style>

