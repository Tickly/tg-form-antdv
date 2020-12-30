// 自定义验证
export const Validator = (validator = () => {}) => {

  return (target, propetry) => {
    const rule = {
      validator: validator,
      trigger: 'blur'
    }
    target.constructor.addRule(propetry, rule)
  }

}

function isEmptyObject(object) {
  return Object.keys(object) === 0
}

/**
 * 判断是否有空的子项
 *
 * @param {Array} arr
 * @param {String} type
 * @returns Boolean
 */
function hasEmptyItem(arr, type) {
  return arr.filter(item => {
    if(type === 'string') return !item
    if(type === 'object') return isEmptyObject(item)
  }).length !== 0
}

/**
 *  判断数组中是否有空的子项
 *
 * @export
 * @param {string} [type='string']
 * @returns
 */
export function NoEmptyItem (type = 'string', message = '子项不可为空，请完善数据'){
  const validator = (rule, value, callback) => {
    if(hasEmptyItem(value, type)) {
      callback(new Error('子项不可为空，请完善数据'));
    }
    callback()
  }

  return Validator(validator)
}