// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Client, {Config} from 'shopify-buy'

// const config = new Config({
//   domain: 'ijjico.myshopify.com',
//   storefrontAccessToken: 'bb500e2b8aadb0af601f7aa9e0cc7292'
// })
const config = new Config({
  domain: 'ijji-store.myshopify.com',
  storefrontAccessToken: '6913fc35300008e6bbd8b5bd714b86ac'
})
const client = new Client(config)
Object.defineProperty(Vue.prototype, '$client', { value: client })

import cookie from 'js-cookie'
Object.defineProperty(Vue.prototype, '$cookie', { value: cookie })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
