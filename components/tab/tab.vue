<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-scroll">
      <!-- 滚动内容 -->
      <view  class="tab-scroll-box">
        <view class="tab-scroll-item" 
        :key="index" 
        v-for="(item,index) in list" 
        @click="clickTab(item,index)"
        :class="{active: activeIndex === index}">
        {{item.name}}
        </view>
      </view>
    </scroll-view>
    <!-- 齿轮图标 -->
    <view class="tab-gear">
      <uni-icons type="gear"  size="26" color="#666"></uni-icons>
    </view>
    
	</view>
</template>

<script>
	export default {
    // 父传子
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      },
      tabIndex: {
        type: Number,
        default: 0
        
      }
    },
    // 可以监听 props中或者data中值的变化
    watch: {
      tabIndex(newVal) {
        this.activeIndex = newVal
      }
    },
		data() {
			return {
				activeIndex: 0
			};
		},
    methods: {
      clickTab(item,index){
        this.activeIndex = index;
        // 子传父
        this.$emit('tab',{
          data: item,
          index: index
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    width: 100%;
    border-bottom: 1px #f5f5f5 solid;
    // 选项卡背景色
    background-color: #fff;
    // 盒内元素
    box-sizing: border-box;
    .tab-scroll {
      // 撑满整个元素
      flex: 1;
      // 溢出隐藏
      overflow: hidden;
      // 盒内元素 在盒子里显示
      box-sizing: border-box;
      .tab-scroll-box {
        // flex布局
        display: flex;
        height: 45px;
        // 不换行
        flex-wrap: nowrap;
        // 盒内元素
        box-sizing: border-box;
        // 垂直居中
        align-items: center;
        .tab-scroll-item {
          // 不挤压
          flex-shrink: 0;
          padding: 0 10px;
          color: #333;
          font-size: 14px;
          
          &.active {
            color: $mk-base-color;
          }
        }
      }
    }
    
    .tab-gear {
      // 相对定位
      position: relative;
      // flex布局
      display: flex;
      // 水平居中
      justify-content: center;
      // 垂直居中
      align-items: center;
      width: 45px;
      // 伪类,竖线展示
      &::after {
        content: '';
        // 绝对定位
        position: absolute;
        top: 8px;
        bottom: 8px;
        left: 0;
        width: 1px;
        background-color: #ddd;
      }
      
    }
  }
</style>
