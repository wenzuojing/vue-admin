<template>
  <div class="am-g tpl-g">
    <div class="tpl-login">
      <div class="tpl-login-content">
        <div class="tpl-login-logo">
        </div>
        <form class="am-form tpl-form-line-form">
          <div class="am-form-group">
            <input type="text" class="tpl-form-input"  placeholder="请输入账号" v-model="formData.username">

          </div>

          <div class="am-form-group">
            <input type="password" class="tpl-form-input"  placeholder="请输入密码" v-model="formData.password" >

          </div>
          <div class="am-form-group tpl-login-remember-me">
            <input id="remember-me" type="checkbox" v-model="rememberMe">
            <label for="remember-me">
              记住密码
            </label>

          </div>

          <div class="am-form-group">

            <button type="button" class="am-btn am-btn-primary  am-btn-block tpl-btn-bg-color-success  tpl-login-btn" @click="login">提交</button>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import md5 from 'js-md5'
import io from '../../lib/io'
import storage from '../../lib/storage'

const PASSWORD_PLACEHOLDER = '****************' // 16

    export default{
        name:'login',
        data:function(){
          return {
            formData:{},
            rememberMe : true
          }
        },
        created:function(){
          var loginInfo  = storage.getLogin()
          if(loginInfo){
            this.rememberMe = loginInfo.rememberMe
            if(this.rememberMe == true ){
              this.formData.username = loginInfo.username
              this.formData.password = PASSWORD_PLACEHOLDER
              this.localPassword = loginInfo.password
            }
          }
        },
        methods:{
          login:function(e){
            var _this  = this
            var $submitBtn = $(e.target)
            $submitBtn.attr("disabled" ,"disabled" )
            var complete = function(){
               $submitBtn.removeAttr("disabled")
            }

            if( !this.formData.username ){
              this.$alert('请输入帐号');
              complete();
              return ;
            }

            if( !this.formData.password ){
              this.$alert('请输入密码');
              complete();
              return ;
            }

            var password ;

            if( PASSWORD_PLACEHOLDER == this.formData.password ){
              password = this.localPassword
            }else{
              password = md5(this.formData.password)
            }

            io.get(io.login,{
              username : this.formData.username,
              password : password
            },function(ret){
              if(ret.success){
                if( _this.rememberMe ) {
                  console.log(111)
                  storage.setLogin({
                    username:_this.formData.username,
                    password:password,
                    rememberMe : _this.rememberMe,
                    userId : '111111111111',
                    successLogin :true ,
                    loginAt : new Date().getTime()
                  })
                  _this.$router.push('/main/index')
                }
              }else{
                _this.$alert(ret.msg ||  '登录失败' )
              }
            })
          }


          }
    }
</script>
