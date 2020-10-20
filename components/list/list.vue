<template>
  <swiper class="home-swiper" @change="change" :current="activeIndex">
    <swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
      <list-item :list="listCatchData[index]" :load="load[index]" @loadmore="loadmore"></list-item>
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
        listCatchData: {},
        load: {},
        pageSize: 10
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
        this.$emit('change', current)
        // 当数据不存在或者长度为0的时候才去请求数据
        if (!this.listCatchData[current] || this.listCatchData.length === 0) {
          this.getList(current)
        }
      },
      
      getList(current) {
        if (!this.load[current]) { // 不存在
          this.load[current] = {
            page: 1,
            loading: 'loading'
          }
        }
        
        console.log("当前的页数: ",this.load[current].page);
        this.$api.get_list({
          name: this.tab[current].name,
          page: this.load[current].page,
          pageSize: this.pageSize
        }).then(res => {
          const {
            data
          } = res;
          console.log("res: ", res);
          if(data.length === 0){
            let oldLoad = {}
            oldLoad.loading = 'noMore'
            oldLoad.page = this.load[current].page
            this.$set(this.load,current,oldLoad)
            // 强制渲染页面
            this.$forceUpdate()
            return
          }
          let oldList = this.listCatchData[current] || [];
          oldList.push(...data)
          // 通知页面 数组或者对象发生了变化,并刷新 懒加载
          // 1.需要改变的数组 2.第几项, 3.实际要修改的内容
          this.$set(this.listCatchData, current, oldList);
        })
      },
      
      loadmore() {
        if(this.load[this.activeIndex].loading === 'noMore') return
        this.load[this.activeIndex].page++;
        console.log('触发上拉');
        this.getList(this.activeIndex)
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
