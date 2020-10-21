<template>
  <!-- 阻止冒泡，就是连着按钮点的响应 -->
  <view class="icons" @click.stop="likeTab">
    <uni-icons size="20" :type="like ? 'heart-filled' : 'heart'" color="#f07373"></uni-icons>
  </view>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        like: false,
      };
    },
    watch: {
      // 监听什么就什么方法
      item(newVal) {
        this.like = this.like = this.item.is_like
      }
    },
    created() {
      this.like = this.item.is_like
    },
    methods: {
      likeTab() {
        this.like = !this.like
        console.log('收藏成功');
        this.setUpdateLikes();
      },
      setUpdateLikes() {
        uni.showLoading();
        this.$api.update_likes({
          user_id: '5f851a02f7b7f9000121f577',
          article_id: this.item._id
        }).then(res => {
          uni.hideLoading();
          uni.showToast({
            title: this.like ? '收藏成功' : '取消收藏',
            icon:'none'
          })
          console.log("update_likes: ", res);
        }).catch(() => {
          uni.hideLoading();
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icons {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
</style>
