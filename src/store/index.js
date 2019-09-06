import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  // 将各组件分别模块化存入 Store
  state: {
    data: {},
    money: 0,
    headerTitle: '',
    isAdmin: false,
    status: 'create' // create or update
  },
  actions,
  getters,
  mutations
})
