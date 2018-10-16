import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Foo = { template: "<div>Foo component</div>" };
const Bar = { template: "<div>Bar component</div>" };

const User = {
  template: "<div>User {{$route.params.username}}</div>",
  watch:{
    '$route' (to, from){
      console.log('from ' + from.params.username + ' to ' + to.params.username);
    }
  }
};

const routes = [
  { path: '/foo', component: Foo }, 
  { path: '/bar', component: Bar },
  { path: '/user/:username', component: User }
];

var router = new VueRouter({ routes });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
