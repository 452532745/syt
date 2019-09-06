// import api from '../api/index'
import * as types from './mutation-types'

// 全局的actions

// datas
export const getDatas = ({commit, state}, data) => {
  commit(types.REQUEST_DATA, data)
}
export const getHeaderTitle = ({commit, state}, data) => {
  commit(types.GET_HEADER_TITLE, data)
}
