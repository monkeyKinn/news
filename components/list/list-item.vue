<template>
  <list-scroll class="list-scroll">
    <list-card v-for="item in list" :key="item._id" :item="item"></list-card>
    <uni-load-more status="loading" iconType="snow"></uni-load-more>
  </list-scroll>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .list-scroll {
    height: 100%;
  }
</style>
