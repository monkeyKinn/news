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
    methods: {
      likeTab() {
        this.like = !this.like
        console.log('收藏成功');
        this.setUpdateLikes();
      },
      setUpdateLikes() {
        this.$api.update_likes({
          user_id: '5f851a02f7b7f9000121f577',
          article_id: this.item._id
        }).then(res => {
          console.log("update_likes: ", res);
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
