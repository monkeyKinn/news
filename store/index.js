// vuex 状态管理

// 1.引入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 2.vue使用vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  // 数据源
  state: {
    // 本地缓存 || []
    historyList: uni.getStorageSync('_history') || []
  },
  // 改变数据源中的数据
  mutations: {
    SET_HISTORY_LIST(state, history) {
      state.historyList = history
    },
    CLEAR_HISTORY_LIST(state) {
      state.historyList = []
    }
  },
  // 修改mutation中的方法,commit调用mutation中的方法
  actions: {
    set_history({
      commit,
      state
    }, history) {
      let list = state.historyList;
      list.unshift(history)
      uni.setStorageSync('_history',list)
      commit('SET_HISTORY_LIST', list)
    },
    clear_history({
      commit
    }) {
      uni.removeStorageSync('_history')
      commit('CLEAR_HISTORY_LIST')
    }
  }
})

// 导出
export default store
