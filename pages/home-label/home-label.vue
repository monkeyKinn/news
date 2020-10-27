<template>
  <view class="label">
    <view class="label-box">
      <view class="label-head">
        <view class="label-title">我的标签</view>
        <view class="label-edit">编辑</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" v-for="item in 50">
          {{item}}标签
          <uni-icons type="clear" size="20" color="red" class="label-content-item-clear"></uni-icons>
        </view>
      </view>
    </view>


    <view class="label-box">
      <view class="label-head">
        <view class="label-title">标签推荐</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" v-for="item in 50">
        {{item}}标签
        <uni-icons type="" size="20" color="red" class="label-content-item-clear"></uni-icons>
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
    background-color: #f5f5f5;
  }

  .label {
    .label-box {
      background-color: #fff;
      margin-bottom: 10px;

      .label-head {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666;
        padding: 10px 15px;
        border-bottom: 1px #f5f5f5 solid;

        .label-edit {
          color: #30b33a;
          font-weight: bold;
        }
      }

      .label-content {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px 15px 15px;

        .label-content-item {
          position: relative;
          padding: 2px 5px;
          margin-top: 12px;
          margin-right: 10px;
          border-radius: 5px;
          border: 1px solid #666;
          font-size: 14px;
          color: #666;
          .label-content-item-clear {
            position: absolute;
            right: -10px;
            bottom: 15px;
          }
        }
      }
    }
  }
</style>
