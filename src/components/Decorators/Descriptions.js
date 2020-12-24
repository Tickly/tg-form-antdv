/**
 * 描述管理对象
 */
export default class Descriptions {
  /**
   * 添加一个描述
   */
  add (prop, description) {
    if (this[prop] === undefined) {
      this[prop] = {}
    }

    Object.assign(this[prop], description)
  }

  /**
   * 获取一个描述
   */
  get (prop) {
    return this[prop]
  }
}
