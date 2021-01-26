/**
 * ErpackFormItem
 */

import { ErpackModel } from '../Model'

export default {
  name: 'ErpackFormItem',
  props: {
    /**
     * 属性名称
     */
    prop: String,
    /**
     * 直接指定要展示的文字
     * 
     * 比如这个字段本身是个关联对象，但是接口不是给的对象过来，
     * 而是把对象拆开来，直接给了好几个字段过来，这时候直接指定要显示字段的值即可。
     */
    displayText: String,

    /**
     * 文本描述
     */
    label: String,
    /**
     * 表示该Item没有label
     * 当为true的时候，会自动添加一个空的label，为了让slot与其他有label的保持一致
     * 比如slot为按钮
     */
    noLabel: Boolean,

    labelCol: { type: Number, default: 6 },
    colSpan: {
      type: Number,
      default: 1,
    },
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
      return this.formErrors[this.prop] || []
    },
    // 校验文案
    help () {
      if (this.errors.length) return this.errors[0]
    },
    value () {
      return this.form.form[this.prop]
    },
    /**
     * 根据这个值去控制，是显示编辑器，还是自动渲染文本
     * true 编辑器
     * false 文本
     */
    editable () {
      if (this.form.isDetail) return false

      return true
    },
  },
  created () {
    if (this.prop) {
      this.$watch('value', () => {
        this.form.change(this.prop)
      })
    }
  },
  mounted () {
    let el = this.$el
    let label = el.querySelector('.ant-form-item-label')
    if (label) {
      label.style.width = this.form.labelWidth
    }
  },
  render (h) {
    let props = {
      prop: this.prop,
      label: this._label,
      colon: !this.$slots.label,
      required: this.isRequired,
      help: this.form.showHelp ? this.help : '',
      ...this.$attrs,
    }
    let style = {}

    // 自动计算 labelCol
    if (this.form.layout === 'inline') {
      if (this.form.columns) {
        style.width = (100 / this.form.columns * this.colSpan).toFixed(2) + '%'
        props.labelCol = { span: this.labelCol }
        props.wrapperCol = { span: 24 - this.labelCol }
      }
    }

    if (this.noLabel) {
      props.label = ' '
      props.colon = false
    }

    return h('a-form-model-item', {
      class: 'erpack-form-item',
      props,
      style,
    }, [
      this.$slots.label
        ? h('template', { slot: 'label' }, this.$slots.label)
        : null,
      this.editable ? this.renderEditor(h) : this.renderText(h)
    ])
  },
  methods: {
    renderEditor (h) {
      return this.$slots.default
    },
    renderText (h) {
      if (this.displayText) return this.displayText

      const value = this.value

      if (this.value instanceof ErpackModel) {
        return this.value.renderContent()
      }
      return this.value
    },
  }
}
