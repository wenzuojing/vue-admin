require('./assets/css/app.css')
import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './components/Main'
import Table from './components/template/Table'

Vue.use(VueRouter);

const Login = { template: '<div>Login</div>' }
const Index = { template: '<div>Index</div>' }

const router = new VueRouter({
  routes:[{
    path: '/main',
    component: Main,
    children:[
      {path: 'table' , component: Table }
    ]
  },{
    path: '/login',
    component: Login
  }]
})

new Vue({
  el: '#app',
  router,
  template: '<router-view class="view"></router-view>'
})
