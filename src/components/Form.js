import { Validator, Model } from 'tg-validators'

export default {
  name: 'TgForm',
  props: {
    form: Object,
    labels: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Array,
      default: () => []
    },
    /**
     * 是否显示错误提示，默认显示
     * 暂时由form全部控制，后面可以考虑单独给form-item加上
     */
    showHelp: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      model: null,
      errors: {}
    }
  },
  computed: {
    validators () {
      return Validator.getValidators(this.form, this.rules, this.labels)
    },
    hasErrors () {
      return Object.keys(this.errors).length > 0
    }
  },
  provide () {
    return {
      tgForm: this
    }
  },
  render (h) {
    return h(
      'a-form',
      {
        props: {
          ...this.$attrs
        }
      },
      this.$slots.default
    )
  },
  created () { },
  methods: {
    /**
     * 解析属性列表
     * string 'abc' 'abc,def'
     * array ['abc','def']
     * @param {String,Array} attrs 属性列表
     * @returns {Array} 返回一个数组
     */
    parseAttrs (attrs) {
      if (typeof attrs === 'string') return attrs.split(',')
      if (Array.isArray(attrs)) return attrs
      return []
    },
    /**
     * 验证
     * @param {String|String[]} attributes 要验证的属性
     */
    validate (attributes) {
      const attrs = this.parseAttrs(attributes)

      console.log('validate', attributes)
      console.log(this.form, this.rules, this.labels, attrs)

      return Validator.validate(this.form, this.rules, this.labels, attrs)
        .then(() => {
          // 验证成功了，要清空之前的错误信息
          this.clearErrors(attrs)
        })
        .catch(errors => {
          this.addErrors(attrs, errors)

          return Promise.reject(errors)
        })
    },
    /**
     * 清除错误信息
     * @param {Array} attrs 指定属性名
     */
    clearErrors (attrs = []) {
      console.log('clearErrors', attrs)
      if (attrs.length) {
        attrs.forEach(attr => {
          this.$delete(this.errors, attr)
        })
      } else {
        this.errors = {}
      }
    },
    /**
     * 添加错误信息
     * @param {Array}} attrs 属性列表
     * @param {Object} errors 错误信息
     */
    addErrors (attrs = [], errors) {
      console.log('addErrors', attrs, errors)
      if (attrs.length) {
        attrs.forEach(attr => {
          this.$set(this.errors, attr, errors[attr])
        })
      } else {
        this.errors = errors
      }
    },
    /**
     * 当属性发生变更时，无法自动检测到，需要手动触发
     * 例如用了自己封装的组件，属性值可能是一个对象或数组，无法常规检测到变更，需要手动触发该事件
     * @param {String} attribute 属性名称
     */
    change (attribute) {
      this.validate(attribute)
    }
  }
}
