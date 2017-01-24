require('./assets/css/app.css')
import Vue from 'vue'
import VueRouter from 'vue-router'

import VueUI from './components/base/VueUI'

import Main from './components/Main'
import NotFound from './components/error/NotFound'
import Login from './components/login/Login'
import Enroll from './components/login/Enroll'

import UserList from './components/template/UserList'
import UserForm from './components/template/UserForm'

Vue.use(VueRouter)
Vue.use(VueUI)



const Index = { template: '<div>Index</div>' }

const router = new VueRouter({
  routes:[{
    path: '/main',
    component: Main,
    children:[
      {path: 'index' , component: Index },
      {path: 'user/list' , component: UserList },
      {path: 'user/add' , component: UserForm },
      {path: 'user/edit/:userId' , component: UserForm }
    ]
  },{
    path: '/login',
    component: Login
  },{
    path: '/enroll',
    component: Enroll
  },{
    path:'*',
    component:NotFound
  }]
})


var appVue = new Vue({
  el: '#app',
  router,
  template: '<div><router-view class="view"></router-view></div>',

})


