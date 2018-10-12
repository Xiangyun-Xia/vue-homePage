import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { Store } from 'vuex'

export function createRoute (store: Store<Types.State.RootState>) {
  const router: VueRouter = new VueRouter({
    mode: 'history',
    routes: [{ path: '/', name: 'index', meta: { text: '' } }]
  })

  return router
}
