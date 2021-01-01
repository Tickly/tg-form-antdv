import Vue from 'vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Erpack from './components'

Vue.use(Antd)
Vue.use(Erpack)

new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
})