import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import 'bulma/bulma.sass'

fontawesome.library.add(solid)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
