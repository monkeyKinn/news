<template>
	<view class="content">
    <!-- 自定义导航栏 -->
    <navbar></navbar>
    <view v-for="item in 100">
      {{item}} 内容
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
