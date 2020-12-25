export * from './Decorators'
import { ErpackTable } from './Table'
import { ErpackForm, ErpackFormItem } from './Form'

export default {
  ErpackTable,
  ErpackForm, ErpackFormItem,
  install (Vue) {
    Vue.component(ErpackTable.name, ErpackTable)

    Vue.component(ErpackForm.name, ErpackForm)
    Vue.component(ErpackFormItem.name, ErpackFormItem)
  }
}