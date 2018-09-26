import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Foo = { template: "<div>Foo component</div>" };
const Bar = { template: "<div>Bar component</div>" };

const routes = [{path: '/foo', component: Foo}, {path: '/bar', component: Bar}];

var router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
