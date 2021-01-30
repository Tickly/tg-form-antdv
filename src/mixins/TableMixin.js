export default {
  data () {
    return {
      dataSource: [],
    }
  },
  computed: {
    columns () {
      return []
    },
  },
  methods: {
    renderTable (h) {
      return h('ErpackTable', {
        props: {
          Model: this.ModelClass,
          columns: this.columns,
          dataSource: this.dataSource,
          selectable: this.selectable,
          single: this.single,
        }
      })
    }
  }
}