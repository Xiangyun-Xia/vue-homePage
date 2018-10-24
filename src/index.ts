import 'normalize.css'

import 'src/styles/index.scss'

import Vue from 'vue'

// import VueCooike from 'vue-cookie'

import AppContainer from 'src/AppContainer.vue'
import Components from './components'

import { createRoute } from './route'
import { createStore } from './store'

Vue.config.productionTip = false
// Vue.use(VueCooike)
Vue.use(Components)

const store = createStore()
const router = createRoute(store)

new Vue({
  router,
  store,
  render: (createELement) => createELement(AppContainer)
}).$mount('#vue-root')
