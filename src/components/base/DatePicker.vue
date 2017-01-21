<template>
  <div><slot></slot></div>
</template>
<style scoped>

</style>
<script>
    export default{
        name:'date-picker',
        mounted:function(){
          var _this = this
          $('[data-am-datepicker]',this.$el ).datepicker().on('change',function(){
             $(this).val($(this).attr('value'))
             _this.$emit('input',$(this).val())
          })
        }

    }
</script>
