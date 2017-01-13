<template>
  <div class="am-g tpl-g">
    <!-- 头部 -->
    <main-header/>

    <!-- 侧边导航栏 -->
    <left-sidebar/>

    <!-- 内容区域 -->
    <div class="tpl-content-wrapper">
      <div class="row-content am-cf">
        <ol class="am-breadcrumb">
          <li><a href="#" class="am-icon-home">首页</a></li>
          <li><a href="#">Amaze UI CSS</a></li>
          <li class="am-active">文字列表</li>
        </ol>

        <template v-if="$route.matched.length > 1 ">
          <router-view></router-view>
        </template>
        <template v-else>
          <p>You are logged</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import LeftSidebar from './base/LeftSidebar'
import MainHeader from './base/MainHeader'

export default {
  name: 'main',
  components: {
    LeftSidebar,
    MainHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){

  },
  methods:{

  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
