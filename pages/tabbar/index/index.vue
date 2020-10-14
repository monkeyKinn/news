<template>
  <view class="content">
    <!-- 自定义导航栏 -->
    <navbar></navbar>
    <!-- 自定义选项卡 -->
    <tab :list="tabList"></tab>

    <!-- <view v-for="item in 100">
      {{item}} 内容
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        tabList: []
      }
    },
    onLoad() { // 页面一进入的时候
      this.getLabel();
    },
    methods: {
      getLabel() {
        // 封装后
        // console.log(this.$api);
        this.$api.get_label({
          name: 'get_label'
        }).then(res=>{
          const {data} = res
          this.tabList = data
        })
        
        
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
