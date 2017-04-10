<template>
  <div class="header" name="v-header">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2" >
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      activeIndex: '3'    // 当前激活的tab
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .el-menu-demo {
    .el-menu-item {
      float: right;
    }
    .el-submenu {
      float: right;
    }
  }
</style>
