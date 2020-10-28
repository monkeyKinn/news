<template>
  <view class="label">
    <view class="label-box">
      <view class="label-head">
        <view class="label-title">我的标签</view>
        <view class="label-edit" @click="toEdit">{{isEdit? '完成' : '编辑'}}</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" 
        v-for="(item,index) in labelList" 
        :key="item._id"
        >
          {{item.name}}
          <uni-icons type="clear" size="19" color="red" class="label-content-item-clear" 
          v-if="isEdit"
          @click="del(index)"
          ></uni-icons>
        </view>
      </view>
    </view>


    <view class="label-box">
      <view class="label-head">
        <view class="label-title">标签推荐</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" 
        v-for="(item,index) in list" 
        :key="item._id"
        @click="add(index)"
        >
          {{item.name}}
          <uni-icons type="" size="15" color="red" class="label-content-item-clear"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isEdit: false,
        labelList: [],
        list: []
      }
    },
    onLoad() {
      this.getLabel()
    },
    methods: {
      del(index) {
        this.list.push(this.labelList[index])
        this.labelList.splice(index,1)
      },
      add(index) {
        if(!this.isEdit) return
        this.labelList.push(this.list[index])
        this.list.splice(index,1)
      },
      toEdit() {
        this.isEdit = !this.isEdit
      },
      getLabel() {
        this.$api.get_label({
          type: 'all'
        }).then(res => {
          console.log(res);
          const {
            data
          } = res;
          // 只返回item中current为true的所有数据
          this.labelList = data.filter(item => item.current)
          this.list = data.filter(item => !item.current)
          console.log("labelList: ", this.labelList);
          console.log("list: ", this.list);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  page {
    background-color: #f5f5f5;
  }

  .label {
    .label-box {
      background-color: #fff;
      margin-bottom: 10px;

      .label-head {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666;
        padding: 10px 15px;
        border-bottom: 1px #f5f5f5 solid;

        .label-edit {
          color: #30b33a;
          font-weight: bold;
        }
      }

      .label-content {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px 15px 15px;

        .label-content-item {
          position: relative;
          padding: 2px 5px;
          margin-top: 12px;
          margin-right: 10px;
          border-radius: 5px;
          border: 1px solid #666;
          font-size: 14px;
          color: #666;

          .label-content-item-clear {
            background-color: #fff;
            position: absolute;
            right: -8px;
            bottom: 15px;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
