// 引入 api 接口
import * as types from './mutation-types'


export default {
  [types.REQUEST_DATA] (state, action) {
    let data = JSON.stringify(action)
    state.data = JSON.parse(data)
  },
  [types.CHANGE_MONEY] (state, action) {
    let data = JSON.stringify(action)
    state.money = JSON.parse(data)
  },
  [types.GET_HEADER_TITLE] (state, action) {
    state.headerTitle = action.headerTitle
  }
}
