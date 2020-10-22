<template>
  <view class="home">
    <navbar :isSearch="true" @input="change"></navbar>
    <view class="historySearchList">
      <view class="label-box" v-if="isHistory">
        <view class="label-header">
          <text class="historySearchList-title">搜索历史</text>
          <text class="historySearchList-clear">清空</text>
        </view>
        <view class="label-content" v-if="historyList.length > 0">
          <view class="label-content_item" v-for="item in historyList">{{item.name}} 内容</view>
        </view>
        <view class="noData" v-else>
          没有搜索历史
        </view>
      </view>
      <list-scroll v-else class="list-scroll">
        <list-card v-for="item in searchList" :key="item._id" :item="item"></list-card>
      </list-scroll>
    </view>

  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  export default {
    data() {
      return {
        // historyList: []
        isHistory: true,
        searchList: []
      }
    },
    onLoad() {
    },
    methods: {
      change(value) {
        if(!value) {
          clearTimeout(this.timer);
          this.maker = false; 
          this.getSearch(value);
          return
        }
        // 搜索请求延时
        if (!this.maker) {
          this.maker = true;
          this.timer = setTimeout(() => {
            this.maker = false;
            this.getSearch(value)
          }, 1000)
        }
      },
      getSearch(value) {
        if(!value){
          this.searchList = [];
          this.isHistory = true;
          return
        }
        this.isHistory = false
        this.$api.get_search({
          value,
        }).then(res => {
          const {
            data
          } = res;
          console.log(res);
          this.searchList = data
        })
      },
      testBtn() {
        this.$store.dispatch('set_history', {
          name: 'jin'
        })
      }
    },
    // 计算属性
    computed: {
      ...mapState(['historyList'])
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

      .noData {
        height: 200px;
        line-height: 200px;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #666;
      }
    }
  }
</style>
