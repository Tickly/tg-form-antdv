import Column from './Column'

export default class ActionColumn extends Column {
  /**
   * @param {Object} config 
   * @param {Array} config.buttons
   */
  constructor (config = {}) {
    let { label = '操作', width = 200, align = 'center', buttons } = config

    super({
      label, width, align,
    })

    this.buttons = buttons
  }

  render (h, text, record, index) {
    return h('div', this.buttons.map(btn => this.renderButton(h, btn, text, record, index)))
  }

  renderButton (h, button, text, record, index) {
    return h('a-button', {
      props: {
        type: 'link',
        size: 'small',
      },
      on: {
        click () {
          button.click(record)
        }
      }
    }, button.text)
  }
}