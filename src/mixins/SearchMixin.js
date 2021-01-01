export default {
  data () {
    return {
      searchItems: [],
    }
  },
  methods: {
    renderSearch (h) {
      return h('ErpackSearch', {
        props: {
          Model: this.ModelClass,
          items: this.searchItems,
        }
      })
    },
  }
}
