/**
 * 描述管理对象
 */
export class Descriptions {
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
    return this[prop] || {}
  }
}


/**
 * 添加一个描述
 */
export function AddDescription (target, property, description) {
  target.constructor.descriptions.add(property, description)
}
/**
 * 获取一个描述
 */
export function GetDescription () {

}
/**
 * 添加类的静态方法
 */
export function AddClassMethod () {

}
/**
 * 添加实例方法，当需要根据数据去做判断的时候用
 */
export function AddInstanceMethod () {

}