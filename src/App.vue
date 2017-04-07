<template>
  <div id="app">
    <Vheader></Vheader>
    <Vmenu></Vmenu>
    <Tab></Tab>
    <!-- 路由出口 -->
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vheader from './components/header/header.vue'
import Vmenu from './components/menu/menu.vue'
import Tab from './components/tabs/tab.vue'


export default {
  name: 'app',
  components: {
    Vheader,
    Vmenu,
    Tab
  }
}
</script>

<style lang="less" scoped>
  .router {
    position: absolute;
    left: 195px;
    top: 120px;
    right: 0;
    bottom: 0;
    overflow: scroll;
  }
</style>
