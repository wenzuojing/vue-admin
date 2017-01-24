<template>
  <div class="am-g tpl-g">
    <!-- 头部 -->
    <main-header/>

    <!-- 侧边导航栏 -->
    <left-sidebar/>

    <!-- 内容区域 -->
    <div class="tpl-content-wrapper">
      <div class="row-content am-cf">
        <breadcrumb />
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
import Breadcrumb from './base/Breadcrumb'


export default {
  name: 'main',
  components: {
    LeftSidebar,
    MainHeader,
    Breadcrumb
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
