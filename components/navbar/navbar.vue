<template>
  <view class="navbar">
    <view class="navbar-fixed">
      <!-- 搜索 -->
      <view class="navbar-search">
        <view class="navbar-search-icon"></view>
        <view class="navbar-search-text">app,vue</view>
      </view>
    </view>
    <view style="height: 45px;"></view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    .navbar-fixed {
      // 两行变一行 flex布局
      display: flex;
      // 水平垂直居中显示
      justify-content: center;
      align-items: center;
      padding: 0 15px;

      width: 100%;
      height: 45px;
      background-color: $mk-base-color;
      // 让里面的东西在盒子内显示
      box-sizing: border-box;
      // 固定定位
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;

      .navbar-search {
        // 两行变一行 flex布局
        display: flex;
        // 垂直居中显示
        align-items: center;
        padding: 0 10px;
        width: 100%;
        height: 30px;
        // 圆角
        border-radius: 30px;
        background-color: #fff;

        .navbar-search-icon {
          height: 10px;
          width: 10px;
          border: 1px red solid;
          margin-right: 10px;
        }

        .navbar-search-text {
          font-size: 12px;
          color: #999999;
        }
      }
    }

  }
</style>
