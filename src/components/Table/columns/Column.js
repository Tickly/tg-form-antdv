export default class Column {
  /**
   *
   * @param {Object} config
   * @param {String} config.label 列的标题
   * @param {String} config.prop 列的字段
   */
  constructor (config = {}, Model, h) {
    const {
      title, dataIndex, width, align = 'center', fixed,
      /**
       * 默认使用列的统一渲染方法，也支持自己在页面上写customRender去覆盖
       */
      customRender = (text, record, index) => {
        return this.render(h, text, record, index)
      }
    } = config

    this.dataIndex = dataIndex
    this.title = title || this.parseTitle(dataIndex, Model)
    this.width = width
    this.align = align
    this.fixed = fixed
    this.customRender = customRender
  }

  parseTitle (dataIndex, Model) {
    return Model.getLabel(dataIndex) || dataIndex
  }

  render (h, text, record, index) { }

  to () {
    return {
      dataIndex: this.dataIndex,
      title: this.title,
      width: this.width,
      align: this.align,
      fixed: this.fixed,
      customRender: this.customRender
    }
  }
}
