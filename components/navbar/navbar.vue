<template>
  <view class="navbar">
    <view class="navbar-fixed">

      <!-- 小程序状态栏占位,不然就遮了 -->
      <view :style="{height: statusBarHeight +'px'}"></view>
      <!-- 导航栏内容 -->
      <view class="navbar-content" :style="{height: navBarHeight + 2 + 'px',width: windowWidth + 'px'}" @click.stop="search_click"
        :class="{search:isSearch}">
        <view class="navbar-content_search-icon">
          <uni-icons type="back" size="22" color="#fff"></uni-icons>
        </view>
        <!-- 搜索 -->
        <view class="navbar-search" v-if="!isSearch">
          <!-- 非搜索页显示 -->
          <view class="navbar-search-icon">
            <uni-icons type="search" size="18" color="#999"></uni-icons>
          </view>
          <view class="navbar-search-text">app,vue</view>
        </view>
        <view class="navbar-search" v-else>
          <!-- 搜索页显示 -->
          <input class="navbar-search-text" 
          type="text" 
          placeholder="请输入您要搜索的内容" 
          v-model="val"
          @input="inputChange"
          >
        </view>
      </view>

    </view>
    <!-- 内容占位,不然就遮了 -->
    <view :style="{height: statusBarHeight + navBarHeight + 2 +'px'}"></view>
  </view>
</template>

<script>
  export default {
    props: {
      isSearch: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        statusBarHeight: 20,
        navBarHeight: 45,
        windowWidth: 375,
        val: ''
      };
    },
    methods: {
      search_click() {
        if (this.isSearch) return
        console.log('点击了');
        // 跳转到搜索页面
        uni.navigateTo({
          url: "/pages/home-search/home-search"
        })
      },
      inputChange(e) {
        const {value} = e.detail
        this.$emit('input',value)
      }
    },
    created() {
      // 获取手机系统信息
      const info = uni.getSystemInfoSync();
      this.statusBarHeight = info.statusBarHeight;
      console.log(info);
      this.windowWidth = info.windowWidth;
      // h5 app mp-alipay不支持 ------------------
      // #ifndef H5 || APP-PLUS || MP-ALIPAY
      // 获取胶囊位置
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      console.log(menuButtonInfo);
      // (胶囊底部高度-状态栏高度)+(胶囊顶部高度-状态栏高度) = 导航栏高度
      this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight);
      console.log(this.navBarHeight);
      this.windowWidth = menuButtonInfo.left;
      // #endif
      // ------------------ h5 app mp-alipay不支持

    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    .navbar-fixed {
      width: 100%;
      background-color: $mk-base-color;
      // 固定定位
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;

      .navbar-content {
        height: 45px;
        padding: 0 15px;
        // 让里面的东西在盒子内显示
        box-sizing: border-box;
        // 两行变一行 flex布局
        display: flex;
        // 水平垂直居中显示
        justify-content: center;
        align-items: center;

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
            margin-right: 10px;
          }

          .navbar-search-text {
            width: 100%;
            font-size: 12px;
            color: #999999;
          }
        }

        &.search {
          padding-left: 0;

          .navbar-content_search-icon {
            margin: 0 10px;
          }

          .navbar-search {
            // 圆角
            border-radius: 5px;
          }
        }
      }

    }

  }
</style>
