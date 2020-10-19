<template>
  <swiper class="home-swiper" @change="change" :current="activeIndex">
    <swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
      <list-item :list="listCatchData[index]"></list-item>
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
        list: [],
        // 数据缓存
        listCatchData: {}
      };
    },
    watch: {
      tab(newVal) {
        if (newVal.length === 0) return
        this.getList(this.activeIndex)
      }
    },
    // onload 在页面中写,created 在组件中写
    created() {},
    methods: {
      change(e) {
        const {
          current
        } = e.detail;
        this.getList(current)
        this.$emit('change', current)
      },
      getList(current) {
        this.$api.get_list({
          name: this.tab[current].name
        }).then(res => {
          const {
            data
          } = res
          console.log("data: ", data);
          // 通知页面 数组或者对象发生了变化,并刷新
          // 1.需要改变的数组 2.第几项, 3.实际要修改的内容
          this.$set(this.listCatchData,current,data);
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
