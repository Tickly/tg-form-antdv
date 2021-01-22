/**
 * 操作列
 */

import { ActionButton, ActionButtonGroup } from '../../ActionButton'
import Column from './Column'

export default class ActionColumn extends Column {
  /**
   * @param {Object} config
   * @param {Object[]} config.buttons
   * @param {String} config.buttons[].text 按钮名称
   * @param {String} config.buttons[].popTitle 点击按钮的时候给个弹框确认，确定之后才触发click
   * @param {Function} config.buttons[].click 点击事件
   * @param {Function} config.buttons[].visible 按钮可见性，返回Boolean值
   * @param {Boolean} config.buttons[].editableAuth 表示是否需要做权限验证
   */
  constructor (config = {}, Model, h) {
    const { title = '操作', width = 180, align = 'center', buttons, fixed = 'right' } = config

    super({
      title, width, align, fixed,
    }, Model, h)

    this.buttons = buttons
  }

  render (h, text, record, index) {
    return h(ActionButtonGroup, this.buttons
      .filter(btn => {
        const { visible, editableAuth } = btn

        if (editableAuth) {
          if (record._editable === false) return false
        }

        if (visible) {
          return visible(text, record, index)
        }

        return true
      })
      .map(btn => this.renderButton(h, btn, text, record, index)))
  }

  renderButton (h, button, text, record, index) {
    return h(ActionButton, {
      props: {
        popTitle: button.popTitle,
      },
      on: {
        click () {
          button.click(text, record, index)
        }
      }
    }, button.text)
  }
}
