<template>
  <view class="home">
    <!-- 自定义导航栏 -->
    <navbar></navbar>
    <!-- 自定义选项卡 -->
    <!-- :list父传子 -->
    <!-- @tab 子传父 -->
    <tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>

    <view class="home-list">
      <list :tab="tabList" @change="change" :activeIndex="activeIndex"></list>
    </view>

  </view>

</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        tabList: [],
        tabIndex: 0,
        activeIndex: 0
      }
    },
    onLoad() { // 页面一进入的时候
      console.log('onload');
      this.getLabel();
    },
    methods: {
      change(current) {
        this.tabIndex = current
      },
      tab({
        data,
        index
      }) {
        console.log("data: ", data);
        console.log("index: ", index);
        this.activeIndex = index
      },
      getLabel() {
        // 封装后
        // console.log(this.$api);
        this.$api.get_label({
          name: 'get_label'
        }).then(res => {
          const {
            data
          } = res
          // 在数组最前端加入内容
          data.unshift({
            name: '全部'
          })
          console.log("get_label_res: ", res);
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
    overflow: hidden;

    .home-list {
      flex: 1;
      box-sizing: border-box;
    }
  }
</style>
