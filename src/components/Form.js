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
    parseAttrs (attrs) {
      if (typeof attrs === 'string') return attrs.split(',')
      if (Array.isArray(attrs)) return attrs

      return attrs
    },
    /**
     * 验证
     * @param {String|String[]} attrs 要验证的属性
     */
    validate (attrs) {
      const arrs = this.parseAttrs(attrs)
      return Validator.validate(this.form, this.rules, this.labels, arrs)
        .then(() => {
          // 验证成功了，要清空之前的错误信息
          if (attrs === null) {
            this.errors = {}
          } else {
            this.clearErrors(arrs)
          }
        })
        .catch(errors => {
          if (attrs === null) {
            this.errors = errors
          } else {
            this.errors = {
              ...this.errors,
              ...errors
            }
          }

          return Promise.reject(errors)
        })
    },
    /**
     * 清除错误信息
     * @param {Array} attrs 指定属性名
     */
    clearErrors (attrs = []) {
      if (attrs.length) {
        attrs.forEach(attr => {
          this.$delete(this.errors, attr)
        })
      } else {
        this.errors = {}
      }
    }
  }
}
