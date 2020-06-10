
export default {
  name: 'TgFormItem',
  props: {
    prop: String,
    label: String
  },
  inject: {
    form: 'tgForm'
  },
  computed: {
    _label () {
      return this.label || this.form.labels[this.prop] || this.prop
    },
    // 获取只跟自己相关的验证规则
    myValidators () {
      return this.form.validators.filter(v => v.attributes.indexOf(this.prop) > -1)
    },
    // 字段是否必填
    isRequired () {
      return !!this.myValidators.find(v => v.constructor.type === 'required')
    },
    // 错误信息
    errors () {
      return this.form.errors[this.prop] || []
    },
    // 校验文案
    help () {
      if (this.errors.length) return this.errors[0]
    },
    // 
    validateStatus () {
      if (this.help) return 'error'
    }
  },
  render (h) {
    return h(
      'a-form-item',
      {
        props: {
          label: this._label,
          required: this.isRequired,
          help: this.help,
          validateStatus: this.validateStatus,
          ...this.$attrs
        }
      },
      this.$slots.default
    )
  }
}
