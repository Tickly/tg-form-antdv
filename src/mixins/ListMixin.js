import TableMixin from './TableMixin'
import SearchMixin from './SearchMixin'

export default {
  mixins: [SearchMixin, TableMixin],
  data () {
    return {
      ModelClass: null,
      searchItems: [],
    }
  },
  render (h) {
    return h('div', [
      this.renderSearch(h),
      this.renderExtra(h),
      this.renderTable(h),
    ])
  },
  methods: {
    /**
     * 渲染额外的元素
     */
    renderExtra (h) { },
  }
}