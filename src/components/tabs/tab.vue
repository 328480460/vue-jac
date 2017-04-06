<template>
  <div class="tab" name="tab" >
    <el-tabs type="border-card" @tab-remove="removeTab" @tab-click="turn"  v-model="editableTabsValue" >
      <el-tab-pane v-for="(item, index) in editableTabs" :key='index' :label="item.realName" :name="item.name" :closable="item.closable">
        <span slot="label">
          <i :class="item.icon"></i>
          {{item.title}}
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {

    }
  },
  computed: {
    //所有的tab
    editableTabs() {
      let editableTabs = this.fullTab(this.$store.state.tabList);
      return editableTabs;
    },
    //当前选中的tab
    editableTabsValue() {
      return this.$store.state.currentId;
    }
  },
  methods: {
    fullTab(tabArr) {
      var _tabArr = [];
      tabArr.forEach((item,index) => {
        var _obj = {};
        if(index === 0) {
          _obj.closable = false;
        }else {
          _obj.closable = true;
        }
        _obj.title = item.text;
        _obj.icon = item.iconClass;
        _obj.name = item.index.toString();
        _obj.realName = item.name;
        _tabArr.push(_obj);

      })
      return _tabArr;
    },
    turn(tab, event) {
      this.$store.commit('turn',tab);
    },
    removeTab(targetName) {
      this.$store.commit('delTab',targetName);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .tab {
    position: absolute;
    top: 65px;
    left: 185px;
    right: 0;
    overflow:auto;
    .el-tabs {
      padding: 0;
      .el-tabs__content {
        padding: 0;
      }
    }

  }
</style>
