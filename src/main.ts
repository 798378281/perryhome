import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'reset-css/reset.css'
import '@/styles/index.styl'

import Platform from '@/components/platforms/index.vue'



Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component('Platform', Platform)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
