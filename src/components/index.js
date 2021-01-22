export * from './Model'

import { ErpackTable } from './Table'
import { ErpackForm, ErpackFormItem } from './Form'
import { ErpackSearch } from './Search'


export {
  ErpackTable,
  ErpackForm, ErpackFormItem,
  ErpackSearch,
}

export default {
  install (Vue) {
    Vue.component(ErpackTable.name, ErpackTable)

    Vue.component(ErpackForm.name, ErpackForm)
    Vue.component(ErpackFormItem.name, ErpackFormItem)
    Vue.component(ErpackSearch.name, ErpackSearch)
  }
}