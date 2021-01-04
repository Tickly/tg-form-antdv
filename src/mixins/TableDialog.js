import Dialog from './Dialog'
import SearchMixin from './SearchMixin'
import TableMixin from './TableMixin'

export default {
  mixins: [Dialog, SearchMixin, TableMixin],
  data () {
    return {
      selectable: true,
      isDialog: true,
    }
  },
  render (h) {
    return h('div', [
      this.renderInput(h),
      this.renderModal(h),
    ])
  },
  methods: {
    renderInput (h) {
      return h('a-input-search', {
        on: {
          search: () => {
            this.visible = true
          }
        }
      })
    },
    renderModalBody (h) {
      return h('div', [
        this.renderSearch(h),
        this.renderTable(h),
      ])
    }
  }
}