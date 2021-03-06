
import AMLoading from './Loading'
import AMAlert from './Alert'
import AMConfirm from './Confirm'
import AMPrompt from './Prompt'
import AMToast from './Toast.vue'
import DatePicker from './DatePicker'
import Selected from './Selected'
import FileUpload from './FileUpload'
import Editor from './Editor'

var VueUI = function(){

}

VueUI.install = function (Vue){



  const Loading = Vue.extend(AMLoading)
  const Alert = Vue.extend(AMAlert)
  const Confirm = Vue.extend(AMConfirm)
  const Prompt = Vue.extend(AMPrompt)
  const Toast = Vue.extend(AMToast)

  const caches = {}
  function getInstance(Component,name){
    var o  =  caches[name] || ( caches[name] = new Component );
    if(!o.$el){
      $('body').append(o.$mount().$el)
    }
    return o ;
  }

  Vue.showLoading = Vue.prototype.$showLoading = function (){
    getInstance(Loading,'loading').show()
  }

  Vue.hiddenLoading = Vue.prototype.$hiddenLoading = function (){
    getInstance(Loading,'loading').show()
  }

  Vue.alert = Vue.prototype.$alert = function (msg){
    getInstance(Alert,'alert').show(msg)
  }

  Vue.confirm = Vue.prototype.$confirm = function (msg,confirm,cancel){
    getInstance(Confirm,'confirm').show(msg,confirm,cancel)
  }

  Vue.prompt = Vue.prototype.$prompt = function (msg,confirm,cancel){
    getInstance(Prompt,'prompt').show(msg,confirm,cancel)
  }

  Vue.toast = Vue.prototype.$toast = function (msg, options = {}){
    options.message = msg
    let toast = caches[options.id] || (caches[options.id] = new Toast)
    if (!toast.$el) {
      $('body').append(toast.$mount().$el)
    }
    toast.queue.push(options)
  }

  Vue.prototype.$params=function(name){
    return this.$router.currentRoute.params[name] ;
  }

  Vue.component('date-picker',DatePicker)
  Vue.component('selected',Selected)
  Vue.component('file-upload',FileUpload)
  Vue.component('editor',Editor)




}


export default VueUI
