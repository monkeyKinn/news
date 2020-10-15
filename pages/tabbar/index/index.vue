<template>
  <view class="home">
    <!-- 自定义导航栏 -->
    <navbar></navbar>
    <!-- 自定义选项卡 -->
    <!-- :list父传子 -->
    <!-- @tab 子传父 -->
    <tab :list="tabList" @tab="tab"></tab>

    <!-- <view v-for="item in 100">
      {{item}} 内容
    </view> -->
    <list-scroll>
      <list-card mode="base"></list-card>
      <list-card mode="column"></list-card>
      <list-card mode="image"></list-card>
    </list-scroll>
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
      console.log('onload');
      this.getLabel();
    },
    methods: {
      tab({
        data,
        index
      }) {
        console.log("data: ", data);
        console.log("index: ", index);
      },
      getLabel() {
        // 封装后
        // console.log(this.$api);
        this.$api.get_label({
          name: 'get_label'
        }).then(res => {
          console.log("get_label_res: ", res);
          const {
            data
          } = res
          this.tabList = data
        })
      }

    }
  }
</script>

<style lang="scss" scoped>
  // 整个页面
  page {
    height: 100%;
    display: flex;
  }

  .home {
    display: flex;
    // 垂直排列
    flex-direction: column;
    // 撑满整个元素
    flex: 1;
    border: 1px red solid;
    overflow: hidden;
  }
</style>
