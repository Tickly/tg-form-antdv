export default {
  data () {
    return {
      title: '',
      visible: false,
    }
  },
  render (h) {
    return this.renderModal(h)
  },
  methods: {
    open () {
      this.visible = true
    },
    renderModal (h) {
      return h('a-modal', {
        props: {
          title: this.title,
          visible: this.visible,
          maskClosable: false,
        },
        on: {
          cancel: () => {
            this.visible = false
          }
        }
      }, [
        this.renderModalBody(h)
      ])
    },
    renderModalBody (h) {

    }
  }
}