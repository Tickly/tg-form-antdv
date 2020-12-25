/**
 * 用在Class上面的装饰器，使Class拥有自动赋值的功能
 * @param {Function} target 
 */
export function Describable (target) {
  console.log('Describable', target.prototype)
  return class extends target {
    constructor (data) {
      super()

      for (const key in data) {
        let value = data[key]

        let description = this.constructor.getDescription(key)

        do {
          // 如果有描述就根据描述的赋值规则走
          if (description) {
            // 如果是字典项
            if (description.isDict) {
              description.setProperty.call(this, value)
              break
            }
          }

          this[key] = value
        } while (false)

      }

    }
  }
}

