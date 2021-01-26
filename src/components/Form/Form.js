/**
 * Erpack-Form
 */
import { ErpackModel } from '../Model'

const ActionModes = {
  Create: 'create',
  Detail: 'detail',
  Edit: 'edit',
}

const ActionModeMixin = {
  computed: {
    /**
     * 写成computed属性
     * 假如某个组件不能用ActionMode作为值，可以重写这个属性，换成别的值。
     */
    _ActionMode () {
      return this.ActionMode
    },
    isDetail () {
      return this._ActionMode === ActionModes.Detail
    },
    isEdit () {
      return this._ActionMode === ActionModes.Edit
    },
    isCreate () {
      return this._ActionMode === ActionModes.Create
    },
  }
}

export default {
  name: 'ErpackForm',
  mixins: [ActionModeMixin],
  props: {
    /**
     * 数据实例
     */
    form: Object,
    rules: {
      type: Array,
      default: () => []
    },
    layout: {
      type: String,
      default: 'horizontal'
    },
    /**
     * 统一给文本设置宽度
     */
    labelWidth: {
      type: String,
      default: '10em'
    },
    /**
     * 表示一列显示几个FormItem，如果不设置，或者0，则使用inline布局
     */
    columns: Number,
    /**
     * 是否显示错误提示，默认显示
     * 暂时由form全部控制，后面可以考虑单独给form-item加上
     */
    showHelp: {
      type: Boolean,
      default: true
    },
    // 是否需要显示验证规则
    noValidate: Boolean,
    ActionMode: {
      type: String,
    }
  },
  data () {
    return {
      errors: {},
    }
  },
  computed: {
    hasErrors () {
      return Object.keys(this.errors).length > 0
    },
    isModel () {
      return this.form instanceof ErpackModel
    },

  },
  provide () {
    return {
      ErpackForm: this
    }
  },
  render (h) {
    let props = {
      layout: this.layout,
      model: this.form,
    }

    // if (props.layout === 'inline') {
    //   if (this.columns) {

    //   }
    // }
    
    /**
     * 编辑的时候，才加验证
     */
    if (this.isCreate || this.isEdit) {
      if (this.isModel && !this.noValidate) {
        props.rules = this.form.rules
      }
    }

    return <div class="erpack-form">
      <a-form-model ref="form" {...{ props }}>
        {this.$slots.default}
      </a-form-model>
    </div>

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
    change (attribute) { },
    /**
     * 验证表单
     */
    validate () {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate(valid => {
          if (valid) {
            let form = this.form

            resolve(form)
          } else reject(valid)
        })
      })
    },
  }
}
