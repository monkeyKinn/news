<template>
  <view class="scroll">
    <scroll-view scroll-y class="list-scroll" @scrolltolower="loadmore">
      <view>
        <slot></slot>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      loadmore() {
        this.$emit('loadmore')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scroll {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;

    .list-scroll {
      height: 100%;
      display: flex;
      // 垂直排列
      flex-direction: column;
    }
  }
</style>
