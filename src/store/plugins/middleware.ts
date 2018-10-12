import { Store } from 'vuex'

export default (store: Store<Types.State.RootState>) => {
  // 当 store 初始化后调用
  store.subscribe((mutation, rootState: Types.State.RootState) => {
    // mutation 的格式为 { type, payload }
    const { type, payload } = mutation
    switch (type) {
    }
  })
}
