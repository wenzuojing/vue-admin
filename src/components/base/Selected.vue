<template>
  <div><slot></slot></div>
</template>
<style scoped >

</style>
<script>
    export default{
        name:'selected',
        data(){
            return {

            }
        },
        props:['value'],
        mounted:function(){
          var _this = this
          this.setSelect(this.value)
          $('[data-am-selected]' , this.$el ).selected()
          .on('change',function(){
            _this.$emit('input',$(this).val())
          })

        },
        watch:{
          value:function(val){
            this.setSelect(val)
          }
        },
        methods:{
          setSelect:function(val){
            $('[data-am-selected]' , this.$el).find('option[value='+val+']').attr('selected', true);
          }
        }
    }
</script>
