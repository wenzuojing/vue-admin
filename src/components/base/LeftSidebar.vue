<template>
  <div class="left-sidebar">
    <!-- 用户信息 -->
    <div class="tpl-sidebar-user-panel">
      <div class="tpl-user-panel-slide-toggleable">
        <div class="tpl-user-panel-profile-picture">
          <img src="../../assets/img/user04.png" alt="">
        </div>
          <span class="user-panel-logged-in-text">
              <i class="am-icon-circle-o am-text-success tpl-user-panel-status-icon"></i>
              禁言小张g
          </span>
        <a href="javascript:;" class="tpl-user-panel-action-link"> <span class="am-icon-pencil"></span> 账号设置</a>
      </div>
    </div>

    <!-- 菜单 -->
    <ul class="sidebar-nav">

      <li v-for="item in menus" class="sidebar-nav-link" >
        <a href="javascript:;" :class="item.subMenus?'sidebar-nav-sub-title':''" @click="go(item)">
          <i class="sidebar-nav-link-logo" :class="item.icon"></i> {{item.name}}
          <span class="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico" v-if="item.subMenus"></span>
        </a>
        <ul class="sidebar-nav sidebar-nav-sub" v-if="item.subMenus" >
          <li class="sidebar-nav-link" v-for="subItem in item.subMenus">
            <a href="javascript:;" @click="go(item,subItem)">
              <span class="sidebar-nav-link-logo" :class="subItem.icon"></span> {{subItem.name}}
            </a>
          </li>
        </ul>
      </li>


    </ul>
  </div>
</template>

<script>


var menus = [
{
  name:'首页',
  url:'/index.html',
  icon:'am-icon-home'
},
{
  name:'用户管理',
  url:'',
  icon:'am-icon-table',
  subMenus:[
  {
  name:'用户列表',
  url:'/main/user/list',
  icon:'am-icon-angle-right'
  },
  {
  name:'添加用户',
  url:'/main/user/add',
  icon:'am-icon-angle-right'
  }
  ]
}
]


export default {
  name: 'left-sidebar',
  data:function(){
    return {
      menus:menus
    }
  },
  mounted:function(){
    $('.sidebar-nav-sub-title').on('click', function() {
    $(this).siblings('.sidebar-nav-sub').slideToggle(80)
            .end()
            .find('.sidebar-nav-sub-ico').toggleClass('sidebar-nav-sub-ico-rotate');
    })
  },
  methods:{
      autoLeftNav: function() {
          $('.tpl-header-switch-button').on('click', function() {
              if ($('.left-sidebar').is('.active')) {
                  if ($(window).width() > 1024) {
                      $('.tpl-content-wrapper').removeClass('active');
                  }
                  $('.left-sidebar').removeClass('active');
              } else {

                  $('.left-sidebar').addClass('active');
                  if ($(window).width() > 1024) {
                      $('.tpl-content-wrapper').addClass('active');
                  }
              }
          })

          if ($(window).width() < 1024) {
              $('.left-sidebar').addClass('active');
          } else {
              $('.left-sidebar').removeClass('active');
          }
    },
    go:function(){
      var item  = arguments[arguments.length-1]
      if(item.url){
        this.$root.$emit('sidebar.click',arguments)
        this.$router.push(item.url)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
