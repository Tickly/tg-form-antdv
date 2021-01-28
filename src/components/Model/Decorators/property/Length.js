/**
 * * 字符串长度验证
 *
 * @param {Number} length
 * @returns
 */
export function MaxLength(length) {
  return (target, property) =>{
    const rule = {
      max: length,
      message: `最多输入${length}个字符`,
    }
    target.constructor.addRule(property, rule)
  }
}