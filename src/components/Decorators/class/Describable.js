/**
 * 用在Class上面的装饰器，使Class拥有自动赋值的功能
 * @param {Function} target 
 */
export function Describable (target) {
  console.log('Describable', target.prototype)
}

