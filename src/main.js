require('./assets/css/app.css')
import Vue from 'vue'
import VueRouter from 'vue-router'

import IO from './lib/io'

import Main from './components/Main'
import Loading from './components/base/Loading'
import Alert from './components/base/Alert'
import Confirm from './components/base/Confirm'
import Prompt from './components/base/Prompt'
import UserList from './components/template/UserList'
import UserForm from './components/template/UserForm'

Vue.use(VueRouter);

console.log(IO)


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

new Vue({
  el: '#app',
  router,
  template: '<div><router-view class="view"></router-view><loading ref="loading"></loading><alert ref="alert"></alert><confirm ref="confirm"></confirm><prompt ref="prompt"></prompt></div>',
  components: {
    Loading,
    Alert,
    Confirm,
    Prompt
  },
})
