import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import TgForm from '../../src/main'

export default ({ Vue }) => {
  Vue.use(Antd)
  Vue.use(TgForm)
}