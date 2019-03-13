import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import ElementUI from 'element-ui'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'reset-css/reset.css'
import '@/styles/index.styl'

import Platform from '@/components/platforms/index.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MavonEditor)

Vue.component('Platform', Platform)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
