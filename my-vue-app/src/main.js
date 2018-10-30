import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Foo = { template: "<div>Foo component<router-link to='/foo/ju'>Ch1</router-link><router-view></router-view><router-view name='ch2'></router-view></div>" };
const Bar = { template: "<div>Bar component</div>" };

const Ch1 = { template: "<div>Ch1 Component</div>" };
const Ch2 = { template: '<div>Ch2 Component</div>' };

const User = {
  props: ['username'],
  template: "<div>User {{ username }}</div>",
  watch:{
    '$route' (to, from){
      console.log('from ' + from.params.username + ' to ' + to.params.username);
    }
  }
};

const routes = [
  { 
    path: '/foo', 
    component: Foo, 
    children:[
      { path:'ch1', components: { default: Ch1, ch2: Ch2 }, redirect:'/bar', alias:'ju'}
    ]}, 
  { path: '/bar', component: Bar },
  { path: '/user/:username', name:'user', component: User, props: true }
];

var router = new VueRouter({ routes });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
