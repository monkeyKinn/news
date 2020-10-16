<template>
  <swiper class="home-swiper" @change="change" :current="activeIndex">
    <swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
      <list-item :list="list"></list-item>
    </swiper-item>
  </swiper>
</template>

<script>
  import listItem from './list-item.vue';

  export default {
    props: {
      tab: {
        type: Array,
        default () {
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
        list: []
      };
    },
    // onload 在页面中写,created 在组件中写
    created() {
      this.getList()
    },
    methods: {
      change(e) {
        const {
          current
        } = e.detail;
        this.$emit('change', current)
      },
      getList() {
        this.$api.get_list().then(res => {
          const {
            data
          } = res
          this.list = data
        })
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
