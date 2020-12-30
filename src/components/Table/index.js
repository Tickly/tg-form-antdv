/**
 * Erpack-Table
 */

export const ErpackTable = {
  name: 'ErpackTable',
  props: {
    columns: Array,
    dataSource: Array,
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
    }
  },
  computed: {
    tableColumns () {
      return this.columns.map(col => {
        if (typeof col === 'string') {
          col = {
            dataIndex: col
          }
        }

        // 处理title
        if (!Reflect.has(col, 'title')) {
          if (this.ModelClass) {
            col.title = this.ModelClass.getLabel(col.dataIndex)
          } else {
            col.title = col.dataIndex
          }
        }

        // 处理字典项
        if (this.ModelClass) {
          // 如果是字典项，将属性替换为字典项name
          if (this.ModelClass.isDict(col.dataIndex)) {
            col.dataIndex = this.ModelClass.getDictNameProperty(col.dataIndex)
          }
        }

        return col
      })
    },
  },
  watch: {
    dataSource: {
      /**
       * @param {Array} dataSource
       */
      handler (dataSource) {
        this.tableDataSource = dataSource.map(row => {
          if (this.ModelClass) {
            return new this.ModelClass(row)
          }

          return row
        })
      },
      immediate: true
    }
  },
  created () {
    console.log(this)
  },
  render (h) {
    let props = {
      columns: this.tableColumns,
      dataSource: this.tableDataSource,
      rowKey: this.rowKey,
    }

    if (this.selectable) {
      props.rowSelection = {
        type: this.single ? 'radio' : 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
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