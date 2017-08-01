// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// var ShopifyBuy = require('../node_modules/shopify-buy/dist/shopify-buy.umd.min.js')

// var client = ShopifyBuy.buildClient({
//   accessToken: 'bb500e2b8aadb0af601f7aa9e0cc7292',
//   appId: 6,
//   domain: 'ijjico.myshopify.com'
// })
import Client, {Config} from 'shopify-buy'

// var client = ShopifyBuy.buildClient({
//   accessToken: '6913fc35300008e6bbd8b5bd714b86ac',
//   appId: 6,
//   domain: 'ijji-store.myshopify.com'
// })
const config = new Config({
  domain: 'ijji-store.myshopify.com',
  storefrontAccessToken: 'd323d4a65a1d3668c64eaa5250127c63'
})

const client = new Client(config)
Object.defineProperty(Vue.prototype, '$client', { value: client })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
