export default class Column {

  /**
   * 
   * @param {Object} config 
   * @param {String} config.label 列的标题
   * @param {String} config.prop 列的字段
   */
  constructor (config = {}) {
    let { label, prop, width, align } = config

    this.label = label
    this.prop = prop
    this.width = width
    this.align = align
  }

  render (h, text, record, index) { }

  /**
   * 
   */
  to (h) {
    return {
      dataIndex: this.prop,
      title: this.label,
      width: this.width,
      align: this.align,
      customRender: (text, record, index) => {
        return this.render(h, text, record, index)
      }
    }
  }
}