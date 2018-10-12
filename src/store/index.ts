import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import modules from './modules'
import middlewarePlugin from './plugins/middleware'

Vue.use(Vuex)

export function createStore (): Store<Types.State.RootState> {
  return new Vuex.Store({
    strict: true,
    state: {},
    actions: {},
    mutations: {},
    getters: {},
    modules,
    plugins: [middlewarePlugin]
  })
}

export default createStore
