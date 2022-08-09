import { createStore } from 'vuex'
interface Store {
  isShowHeader?: boolean,
  isShowDrawer?: boolean
}
const store = createStore({
  state() {
    return <Store>{
      // 是否展示头部
      isShowHeader: true,
      // 是否展示侧边栏
      isShowDrawer: false
    }
  },
  mutations: {
    changeIsShowHeader(state, payload) {
      state.isShowDrawer = payload
    }
  }
})
export default store