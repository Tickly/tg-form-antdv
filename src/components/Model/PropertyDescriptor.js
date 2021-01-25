/**
 * 属性描述
 *
 * 主要描述该属性如何赋值与取值，针对【查询】接口返回值，与【保存】接口需要的格式不一致做的处理
 * 例如【编辑】的时候，接口返回了一个Object过来，但是保存的时候，接口只需要一个id:String
 *
 * 赋值表示从接口拿到数据之后，将数据转为Model之后，其中某个字段如何赋值
 * 取值表示在需要请求接口时，接口需要该字段为什么样的格式
 *
 * 以下基本数据类型都不需要指定
 * @type {Number|String|Boolean}
 */
class PropertyDescriptor {
  /**
   * 这个方法表示，在初始化实例的时候，如何处理该字段
   */
  static setProperty (target, property, value) {
    Reflect.set(target, property, value)
  }

  /**
   * 提交请求时转换成接口需要的格式
   */
  static getProperty (target, property) {

  }
}

export { PropertyDescriptor } 