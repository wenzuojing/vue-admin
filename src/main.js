require('./assets/css/app.css')
import Vue from 'vue'
import VueRouter from 'vue-router'

import VueUI from './components/base/VueUI'

import IO from './lib/io'

import Main from './components/Main'

import UserList from './components/template/UserList'
import UserForm from './components/template/UserForm'

Vue.use(VueRouter)
Vue.use(VueUI)



const Login = { template: '<div>Login</div>' }
const Index = { template: '<div>Index</div>' }

const router = new VueRouter({
  routes:[{
    path: '/main',
    component: Main,
    children:[
      {path: 'user/list' , component: UserList },
      {path: 'user/add' , component: UserForm },
      {path: 'user/edit' , component: UserForm }
    ]
  },{
    path: '/login',
    component: Login
  }]
})

Vue.directive('print', {
  bind: function (el, binding, vnode) {
    console.log(vnode)

  }
})


new Vue({
  el: '#app',
  router,
  template: '<div><router-view class="view"></router-view></div>',

})
