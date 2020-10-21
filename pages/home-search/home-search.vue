<template>
  <view class="home">
    <navbar :isSearch="true"></navbar>
    <view class="historySearchList">
      <view class="label-box">
        <view class="label-header">
          <text class="historySearchList-title">搜索历史</text>
          <text class="historySearchList-clear">清空</text>
        </view>
        <view class="label-content">
          <view class="label-content_item" v-for="item in 10">{{item}} 内容</view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  page {
    height: 100%;
    display: flex;
    background-color: #f5f5f5;
  }

  .home {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid red;

    .label-box {
      background-color: #fff;
      margin-bottom: 10px;

      .label-header {
        display: flex;
        // 左右对齐
        justify-content: space-between;
        font-size: 14px;
        color: #666;
        padding: 10px 15px;
        border-bottom: 1px #f5f5f5 solid;

        .historySearchList-title {
          color: $mk-base-color;
        }
        
        .historySearchList-clear {
          color: #30b33a;
          font-weight: bold;
        }
      }
      .label-content {
        display: flex;
        // 换行
        flex-wrap: wrap;
        padding: 0 15px 15px 15px;
        .label-content_item {
          padding: 2px 10px;
          margin-top: 12px;
          margin-right: 10px;
          border-radius: 5px;
          border: 1px #666 solid;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
</style>
