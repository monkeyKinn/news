// vuex 状态管理

// 1.引入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 2.vue使用vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  // 数据源
  state: {
    historyList: []
  },
  // 改变数据源中的数据
  mutations: {
    SET_HISTORY_LIST(state,history) {
      state.historyList = history
    }
  },
  // 修改mutation中的方法,commit调用mutation中的方法
  actions:{
    set_history({
      commit,
      state
    },
    history) {
      let list = state.historyList;
      list.unshift(history)
      commit('SET_HISTORY_LIST',list)
    }
  }
})

// 导出
export default store