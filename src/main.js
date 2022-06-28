import Vue from './filters'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入封装后的axios
import axios from './http/req'
// import 'animate.css'
// 引入懒加载
import VueLazyload from 'vue-lazyload'
// 懒加载图片

import Footer from '@/components/Footer'


// import loadimage from '@/assets/images/lazy.png'


// 配置懒加载的图片


// Vue.use(VueLazyload, {
//   loading: loadimage
// })


// 将axios挂载到Vue原型
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  Footer,
  render: (h) => h(App)
}).$mount('#app')
