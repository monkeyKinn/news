<template>
  <swiper class="home-swiper" @change="change" :current="activeIndex">
    <swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
      <list-item></list-item>
    </swiper-item>
  </swiper>
</template>

<script>
  import listItem from './list-item.vue';

  export default {
    props: {
      tab: {
        type: Array,
        default() {
          return []
        }
      },
      activeIndex: {
        type: Number,
        default: 0
      }
    },
    components: {
      listItem
    },
    data() {
      return {

      };
    },
    methods: {
      change(e) {
        const {current} = e.detail;
        this.$emit('change',current)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-swiper {
    height: 100%;

    .swiper-item {
      height: 100%;
      overflow: hidden;

    }
  }
</style>
