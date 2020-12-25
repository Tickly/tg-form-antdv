/**
 * 给字段添加文本映射
 * 
 * @param {String} label 字段文本
 */
export function Label (label) {
  return function (target, property) {
    console.log('Label')
    const description = {
      label
    }
    // 调用类的静态方法
    target.constructor.addDescription(property, description)
  }
}