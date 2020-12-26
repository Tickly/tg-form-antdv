/**
 * Erpack-Form
 */
import { Model } from '../Decorators/Model'


export default {
  name: 'ErpackForm',
  props: {
    /**
     * 数据实例
     */
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
     * 表示一列显示几个FormItem，如果不设置，或者0，则使用layout布局
     */
    columns: Number,
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
      errors: {},
    }
  },
  computed: {
    hasErrors () {
      return Object.keys(this.errors).length > 0
    },
    isModel () {
      return this.form instanceof Model
    }
  },
  provide () {
    return {
      ErpackForm: this
    }
  },
  render (h) {
    let props = {

    }

    props.layout = 'inline'

    if (this.columns) {

    }
    return <div class="model-form">
      <a-form {...{ props }}>
        {this.$slots.default}
      </a-form>
    </div>

  },
  created () {
    console.log(this.columns)
  },
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
    change (attribute) { }
  }
}
