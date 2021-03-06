import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Mutations from './Mutations'
import { runInThisContext } from 'vm';

Vue.use(VueRouter)
Vue.use(Vuex)

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
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      console.log('current state : ' + this.$store.getters.currCount);
    }
  }
};

const routes = [
  { 
    path: '/foo', 
    component: Foo, 
    children:[
      { path:'ch1', components: { default: Ch1, ch2: Ch2 }, alias:'ju'}
    ]}, 
  { path: '/bar', component: Bar, meta:{ isauth: true} },
  { path: '/user/:username', name:'user', component: User, props: true }
];

var router = new VueRouter({ routes });

router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.isauth)){
    console.log('match this item');
    next({ path:'/foo', query: to.fullPath });
  } else{
    next();
  }
});

// Vuex part
const store = new Vuex.Store({
  state:{
    count : 0,
    fly: 1
  },
  mutations:{
    [Mutations.INCREMENT] (state, payload){
      state.count += payload.amount;
    },
    [Mutations.SHOW_HELLO](state){
     console.log('Hello ' + state.fly++);
    }
  },
  getters:{
    currCount: state => { return state.count }
  },
  actions:{
    [Mutations.INCREMNET_ASYNC]({commit}, number){
      setTimeout(() => {
        commit(Mutations.INCREMENT, { amount: number.number });
      }, 500);
    },
    [Mutations.SHOW_HELLO]({commit}){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          commit(Mutations.SHOW_HELLO)
          resolve();
        }, 1000);
      });
    },
    async [Mutations.GETDATA](){
      return new Promise((resolve, reject) =>{
        setTimeout(() => {
          resolve(20);
        }, 2000);
      });
    },
    async [Mutations.FIGHT]({dispatch, commit}) {
      await dispatch(Mutations.SHOW_HELLO)
      commit(Mutations.INCREMENT, {amount:await dispatch(Mutations.GETDATA)} )
    }
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
