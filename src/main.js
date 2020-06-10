import Form from './components/Form'
import FormItem from './components/FormItem'

export default {
  install (Vue) {
    Vue.component('TgForm', Form)
    Vue.component('TgFormItem', FormItem)
  }
}
