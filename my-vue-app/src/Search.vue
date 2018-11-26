<template>
    <div class="main-top-search">
        <div class="top-wrap">
            <input type="text" class="search" :placeholder="searchMsg" />
        </div>
    </div>
</template>
<script>
  export default{
      data(){
          return {
              searchMsg : '请输入'
          }
      }
  }
</script>
<style>
    .top-wrap{
        width: 100%;
        height: 1rem;
    }
    .search{
        width: 100%;
    }
</style>
