/**
 * Erpack-Table
 */
import { toColumn, RegisterColumn } from './columns/index'

const PaginationMixin = {
  data () {
    return {
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal (total) {
          return `共${total}条数据`
        },
        onShowSizeChange: this.paginationChange,
        onChange: this.paginationChange,
      }
    }
  },
  methods: {
    paginationChange (page, pageSize) {
      this.pagination.current = page
      this.pagination.pageSize = pageSize

      this.fetch()
    },
    updatePagination (total) {
      this.pagination.total = total
    }
  }
}

export const ErpackTable = {
  name: 'ErpackTable',
  mixins: [PaginationMixin],
  props: {
    url: {
      type: String,
    },
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
    Model: Function,
    /**
     * 是否允许选择，默认不开启
     */
    selectable: Boolean,
    /**
     * 是否为单选表格，默认多选，前提是selectable为true
     * true 单选
     * false 多选 [默认]
     */
    single: Boolean,

    /**
    * 设置表格滚动
    * 可以直接设置一个数字，表示横向滚动的数字 100
    * 也可以直接设置成对象格式 { x:100 }
    */
    scroll: [Object, Number],
    bordered: {
      type: Boolean,
      default: true
    },
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
    _scroll () {
      let scroll = this.scroll
      if (scroll === null) scroll = undefined
      // 设置横向滚动条
      if (typeof scroll === typeof 0) {
        scroll = { x: scroll }
      }
      if (scroll && scroll.x) {
        if (this.isMounted) {
          if (this.$refs.table) {
            const el = this.$refs.table.$el
            if (el.offsetWidth > scroll.x) {
              scroll = undefined
            }
          } else {
            scroll = undefined
          }
        }
      }
      return scroll
    },
    tableColumns () {
      let columns = []

      for (const config of this.columns) {
        if (!config) continue

        // 解析成Column对象
        let column = toColumn(config, this.Model, this.$createElement)

        columns.push(column.to())
      }

      return columns
    },
    tableData () {
      return this.dataSource.map(row => {
        if (this.Model) {
          return new this.Model(row)
        }

        return row
      })
    },
  },
  created () {
    // console.log(this)
  },
  mounted () {
    this.fetch()
  },
  render (h) {
    let props = {
      columns: this.tableColumns,
      dataSource: this.tableData,
      rowKey: this.rowKey,
      scroll: this._scroll,
      bordered: this.bordered,
      pagination: this.pagination,
    }

    if (this.selectable) {
      props.rowSelection = {
        type: this.single ? 'radio' : 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
          // console.log(selectedRowKeys, selectedRows)

          this.$emit('selection-change', selectedRowKeys, selectedRows)
        }
      }
    }

    return h('a-table', {
      props
    })
  },
  methods: {
    clearSelected () { },

    load () {
      this.tableData
    },

    fetch () {
      let page = this.pagination.current
      let pageSize = this.pagination.pageSize

      this.$emit('fetch', page, pageSize)
    },
  }
}

/**
 * 提供自定义列的功能
 */
ErpackTable.RegisterColumn = RegisterColumn