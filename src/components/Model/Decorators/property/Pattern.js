
const phone = /^1[3456789]\d{9}$/

/**
 * 添加正则验证
 *
 * @param {RegExp} regexp 正则表达式
 * @param {String} [message=]
 */
export  function Pattern(regexp, message = '格式错误') {
  return (target, property) =>{
    const rule = {
      pattern: regexp,
      trigger: 'blur',
      message,
    }
    target.constructor.addRule(property, rule)
  }
}
/**
 * 手机号码验证
 *
 * @export
 * @param {string} [message='手机号码格式错误']
 * @returns
 */
export function Phone(message = '手机号码格式错误') {
  return Pattern(phone, message)
}