<template>
  <form :id="id" action=""  class="am-form" data-am-validator >
    <fieldset>
      <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
        <div class="widget am-cf">
          <div class="widget-head am-cf">
            <div class="widget-title am-fl">用户信息</div>
            <div class="widget-function am-fr">
              <a href="javascript:;" class="am-icon-cog"></a>
            </div>
          </div>
          <div class="widget-body am-fr">

            <form class="am-form tpl-form-border-form tpl-form-border-br">
              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  <span class="am-text-danger am-margin-right-xs am-text-xs">*</span>姓名
                </label>
                <div class="am-u-sm-9">
                  <input type="text" name="name" class="am-form-field" placeholder="输入姓名" required>
                  <small>请填写中文名字。</small>
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  籍贯
                </label>
                <div class="am-u-sm-3 am-u-end">
                  <select name="location" class="" required>
                    <option value="">===选择籍贯===</option>
                    <option value=广州">广州</option>
                    <option value="珠海">珠海</option>
                    <option value="云浮">云浮</option>
                  </select>
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  <span class="am-text-danger am-margin-right-xs am-text-xs">*</span>出生日期
                </label>
                <div class="am-u-sm-9">
                  <input type="text" name="birthday" class="am-form-field" placeholder="出生日期" data-am-datepicker readonly required>
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  年龄
                </label>
                <div class="am-u-sm-9">
                  <input type="number" name="age" class="am-form-field" placeholder="输入年龄  18-120" min="18" max="120" required />
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  性别
                </label>
                <div class="am-u-sm-9">
                  <label class="am-radio-inline">
                    <input type="radio"  value="" name="sex" required> 男
                  </label>
                  <label class="am-radio-inline">
                    <input type="radio" name="sex"> 女
                  </label>
                  <label class="am-radio-inline">
                    <input type="radio" name="sex"> 其他
                  </label>
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  爱好
                </label>
                <div class="am-u-sm-9 am-margin-top-xs">
                  <label class="am-checkbox-inline">
                    <input type="checkbox" value="橘子" name="hobby" minchecked="2" maxchecked="4" required> 橘子
                  </label>
                  <label class="am-checkbox-inline">
                    <input type="checkbox" value="苹果" name="hobby"> 苹果
                  </label>
                  <label class="am-checkbox-inline">
                    <input type="checkbox" value="菠萝" name="hobby"> 菠萝
                  </label>
                  <label class="am-checkbox-inline">
                    <input type="checkbox" value="芒果" name="hobby"> 芒果
                  </label>
                  <label class="am-checkbox-inline">
                    <input type="checkbox" value="香蕉" name="hobby"> 香蕉
                  </label>
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  手机号码
                </label>
                <div class="am-u-sm-9">
                  <input type="text" class="am-form-field" placeholder="输入手机号" data-validation-message="输入正确的手机号码" pattern="^1((3|5|8){1}\d{1}|70)\d{8}$" required/>
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  头像
                </label>
                <div class="am-u-sm-9 am-form-file">
                  <button type="button" class="am-btn am-btn-default am-btn-sm">
                    <i class="am-icon-cloud-upload"></i>
                    选择要上传的文件
                  </button>
                  <input name="avatar" type="file">
                  <br/>
                  <img class="am-margin-top" src="../../assets/img/empty.jpg">
                </div>
              </div>

              <div class="am-form-group">
                <label class="am-u-sm-3 am-form-label">
                  个人介绍
                </label>
                <div class="am-u-sm-9">
                  <textarea name="intro" rows="10" minlength="10" maxlength="100"></textarea>
                </div>
              </div>

              <div class="am-form-group">
                <div class="am-u-sm-9 am-u-sm-push-3">
                  <button type="button" class="am-btn am-btn-primary tpl-btn-bg-color-success ">提交</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </fieldset>
  </form>
</template>
<style scoped>
</style>
<script>
    export default{
        name:'user-form',
        data(){
            return{
                id:'form-'+(new Date().getTime())
            }
        },

        mounted:function(){
          var _this = this ;
          $('#' + this.id ).validator({
            onValid: function(validity) {
              $(validity.field).closest('.input-field').find('.am-alert').hide();
            },

            onInValid: function(validity) {
              var $field = $(validity.field);
              var $group = $field.closest('.input-field');
              var $alert = $group.find('.am-alert');
              // 使用自定义的提示信息 或 插件内置的提示信息
              var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

              if (!$alert.length) {
                $alert = $('<div class="am-alert am-alert-danger"></div>').hide().
                appendTo($group);
              }

              $alert.html(msg).show();
            },
            submit:function(e){
              e.preventDefault();
              var formValidity = this.isFormValid();
              if(formValidity){
                _this.$emit('submit')
              }else{
                _this.$root.$refs.loading.close()
              }
            }
          });
        },
        methods:{
          save:function(){
            this.$root.$refs.loading.show()
            $('#'+this.id).submit()
          },
          update:function(){

          }
        }
    }
</script>
