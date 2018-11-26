<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Search></Search>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

      <Header></Header>

      <lilist v-for="item in groceryList" v-bind:group="msg" v-bind:key="item.id" v-bind:todo="item"></lilist>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
      <router-link :to="{name:'user', params:{username:'zhoulei'}}">User</router-link>
      <router-link to="/user/hezhaohui">User 1</router-link>
      <button @click="goBack">Go Back</button>

      <transition name="welcome" >
        <router-view></router-view>
      </transition>
  </div>

</template>

<script>
import Header from "./Header.vue"
import lilist from "./ulList.vue"
import Mutations from './Mutations'
import Search from './Search'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Lei',
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
  computed:{
    username(){
      return this.$router.params.username;
    }
  },
  methods:{
    goBack(){
      window.history.length > 1 ?
        this.$router.go(-1):
        this.$router.push('/');

        //this.$store.dispatch(Mutations.INCREMNET_ASYNC, {number:10});
        //this.$store.dispatch(Mutations.SHOW_HELLO).then(()=>{
        //  console.log('get the result');
        //});
        this.$store.dispatch(Mutations.FIGHT);
    }
  },
  components:{
    Header,
    lilist,
    Search
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


 /* Welcome Styles */
    .welcome-enter {
        transform: translateX(10px);
        opacity: 0;
    }
    .welcome-enter-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .welcome-leave-active, .welcome-leave-to {
        opacity: 0;
    }
</style>
