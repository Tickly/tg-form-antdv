export default {
  props: {
    menus: Array,
  },
  render (h) {
    return h('a-menu', this.menus.map(menu => this.renderMenuItem(h, menu)))
  },
  methods: {
    renderMenuItem (h, { icon, name, url }) {
      return h('a-menu-item', {
        on: {
          click: () => {
            this.$router.push(url)
          }
        }
      }, [
        h('a-icon', { props: { type: icon } }),
        name,
      ])
    }
  }
}