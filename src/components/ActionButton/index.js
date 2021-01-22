import './index.less'

export const ActionButtonGroup = {
  render (h) {
    return h('div', { class: 'action-button-group' }, this.$slots.default)
  },
}
export const ActionButton = {
  props: {
    popTitle: String,
  },
  methods: {
    renderBtn (h) {
      if (this.popTitle) {
        return h(
          'a-popconfirm',
          {
            props: {
              title: this.popTitle,
              placement: 'topRight',
              overlayStyle: { width: '180px' },
            },
            on: { confirm: this.handleClick },
          },
          [
            h(
              'a',
              this.$slots.default
            ),
          ]
        )
      }
      return h(
        'a',
        {
          on: {
            click: this.handleClick,
          },
        },
        this.$slots.default
      )
    },
    handleClick (e) {
      this.$emit('click', e)
    },
  },
  render (h) {
    return h('span', { class: 'action-button' }, [this.renderBtn(h)])
  },
}
