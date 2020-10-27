<template>
  <view>
    关注一下宝贝,提交再次测试我改
    <bw-swiper 
    :swiperList="swiperList" 
    style="width:100%" 
    :swiperType="swiperType" 
    :indicatorDots="false" 
    :circular="false"
    :skipHiddenItemLayout="true"
    :displayMultipleItems="1"
    
    ></bw-swiper>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        swiperType: true,
        swiperList: [{
            img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
            text: '加油'
          },
          {
            img: '/static/0.jpg',
            text: '加油'
          },
          {
            img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
            text: '加油'
          }
        ],
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
