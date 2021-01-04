/**
 * Erpack-Table
 */

import ActionColumn from './columns/ActionColumn'
import Column from './columns/Column'
import TextColumn from './columns/TextColumn'

const Columns = {
  text: TextColumn,
  action: ActionColumn,
}

/**
 * 
 * @param {String,Object} columnConfig 
 * @param {ErpackModel} Model
 * @returns {Column}
 */
const ColumnParser = (columnConfig, Model) => {

  // 支持字符串快速写法
  if ('string' === typeof columnConfig) {
    columnConfig = {
      type: 'text',
      prop: columnConfig
    }
  }

  let { type, prop, label, ...other } = columnConfig

  // 如果没有设置title，就要自动设置一个title
  if (!label) {
    label = getModelLabel(Model, prop)
  }

  // 如果是字典项，将属性替换为字典项name
  if (Model && Model.isDict(prop)) {
    prop = Model.getDictNameProperty(prop)
  }

  return new Columns[type]({
    label, prop, ...other
  })
}

/**
 * 获取模型的label
 * @param {ErpackModel} model 
 * @param {String} prop 
 */
const getModelLabel = (model, prop) => {
  if (model) {
    return model.getLabel(prop) || prop
  }
  return prop
}

export const ErpackTable = {
  name: 'ErpackTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: 'id',
    },
    /**
     * 模型的class，定义了此参数之后，可大大简化编码。
     */
    ModelClass: Function,
    /**
     * 是否允许选择，默认不开启
     */
    selectable: Boolean,
    /**
     * 是否为单选表格，默认多选
     * true 单选
     * false 多选 [默认]
     */
    single: Boolean,
  },
  data () {
    return {
      tableDataSource: [],

      /**
       * 存放当前表格选中的数据id
       */
      selectedRowKeys: [],
      /**
       * 存放当前表格选中的数据
       */
      selectedRows: [],
    }
  },
  computed: {
    tableColumns () {
      let columns = []

      for (const config of this.columns) {
        if (!config) continue

        // 解析成Column对象
        let column = ColumnParser(config, this.ModelClass)

        columns.push(column.to(this.$createElement))
      }

      return columns
    },
    tableData () {
      return this.dataSource.map(row => {
        if (this.ModelClass) {
          return new this.ModelClass(row)
        }

        return row
      })
    },
  },
  created () {
    console.log(this)
  },
  render (h) {
    let props = {
      columns: this.tableColumns,
      dataSource: this.tableData,
      rowKey: this.rowKey,
    }

    if (this.selectable) {
      props.rowSelection = {
        type: this.single ? 'radio' : 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(selectedRowKeys, selectedRows)

          this.$emit('selection-change', selectedRowKeys, selectedRows)
        }
      }
    }

    return h('a-table', {
      props
    })
  },
  methods: {

  }
}