/**
 * 字符串长度验证
 *
 * @param {Number} length
 * @returns
 */
export function Length(length) {
  return (target, property) =>{
    const rule = {
      max: length,
      message: `最多输入${length}个字符`,
      trigger: 'blur'
    }
    target.constructor.addRule(property, rule)
  }
}