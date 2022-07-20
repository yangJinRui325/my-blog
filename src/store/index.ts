import { createStore } from 'vuex'
interface Store {
  isShowHeader?: boolean
}
const store = createStore({
  state() {
    return <Store>{
      // 是否展示头部
      isShowHeader: false
    }
  },
  mutations: {

  }
})
export default store