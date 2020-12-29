export * from './Model'

import { ErpackTable } from './Table'
import { ErpackForm, ErpackFormItem } from './Form'
import {ErpackSearch} from './Search'

export default {
  ErpackTable,
  ErpackForm, ErpackFormItem,
  ErpackSearch,
  install (Vue) {
    Vue.component(ErpackTable.name, ErpackTable)

    Vue.component(ErpackForm.name, ErpackForm)
    Vue.component(ErpackFormItem.name, ErpackFormItem)
    Vue.component(ErpackSearch.name, ErpackSearch)
  }
}