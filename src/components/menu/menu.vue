<template>
  <div class="menu" name="menu">
    <el-row class="tac">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose">
          <el-submenu :index="item.index" v-for="(item,value) in menuData" :key="value">
            <template slot="title"><i :class="item.iconClass"></i>{{item.title}}</template>
            <el-menu-item :index="child.index" v-for="(child,value) in item.child" :key="value" @click="addTab(child)"><i :class="child.iconClass"></i>{{child.text}}</el-menu-item>
          </el-submenu>
        </el-menu>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'menu',
  created(){
    this.$ajax.get('api/menus').then((res) => {
      //更新dom队列
      this.$nextTick(() => {
        this.menuData = res.data.menus;
        this.initTab();
      });
    })
  },
  data() {
    return {
      menuData: []
    }
  },
  computed: {
    //当前选中的menu
    activeIndex() {
      if(this.$store.state.currentId) {
        return this.$store.state.currentId.toString();
      }
      return '0-0';
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    initTab() {
      this.menuData[0].child.forEach((ele, index) => {
        if(index === 0) {
          this.$store.commit('addTab',ele);
          return;
        }
      });
    },
    addTab(ele) {
      this.$store.commit('addTab',ele);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .menu {
    width: 180px;
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow-y: auto;
    background-color: #324157;
    .tac {
      width: 180px;
    }
  }
</style>
