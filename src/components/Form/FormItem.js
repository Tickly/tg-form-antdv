/**
 * ErpackFormItem
 */

export default {
  name: 'ErpackFormItem',
  props: {
    /**
     * 属性名称
     */
    prop: String,

    /**
     * 文本描述
     */
    label: String,

    labelCol: { type: Number, default: 6 },
    colSpan: {
      type: Number,
      default: 1,
    }
  },
  inject: {
    form: 'ErpackForm'
  },
  computed: {
    /**
     * 最终用到的label
     * 
     * 先判断有没有直接指定label
     * 如果没有指定，再看form是不是Model的实例，然后从定义里面去获取
     * 如果取不到，就用prop作为名称
     */
    _label () {
      let label = this.label

      do {
        if (label) break

        if (this.form) {
          if (this.form.isModel) {

            label = this.form.form.constructor.getLabel(this.prop)
            
            if (label) break
          }
        }

        label = this.prop

      } while (false)

      return label
    },
    formErrors () {
      return this.form.errors
    },
    // 错误信息
    errors () {
      return this.formErrors[this.attr] || []
    },
    // 校验文案
    help () {
      if (this.errors.length) return this.errors[0]
    },
    value () {
      return this.form.form[this.attr]
    }
  },
  created () {
    if (this.attr) {
      this.$watch('value', () => {
        this.form.change(this.attr)
      })
    }
  },
  render (h) {
    let props = {
      label: this._label,
      colon: !this.$slots.label,
      required: this.isRequired,
      help: this.form.showHelp ? this.help : '',
      ...this.$attrs,
    }
    let style = {}
    if (this.form.columns) {
      style.width = (100 / this.form.columns * this.colSpan).toFixed(2) + '%'
      props.labelCol = { span: this.labelCol }
      props.wrapperCol = { span: 24 - this.labelCol }
    }

    return h(
      'a-form-item',
      {
        class: 'model-form-item',
        props,
        style,
      },
      [
        this.$slots.label ? h('template', { slot: 'label' }, this.$slots.label) : null,
        this.$slots.default
      ]
    )
  }
}
