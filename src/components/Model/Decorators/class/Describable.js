/**
 * 用在Class上面的装饰器，使Class拥有自动赋值的功能
 */
import { PropertyDescriptor } from '../../PropertyDescriptor'

export function Describable (target) {
  // console.log('Describable', target.prototype)
  return class extends target {
    constructor (data) {
      super()

      let keys = new Set()

      Object.keys(this).map(key => keys.add(key))

      if (data) {
        Object.keys(data).map(key => keys.add(key))
      } else {
        data = {}
      }

      for (const key of keys) {
        let value = data[key]

        let description = this.constructor.getDescription(key) || {}

        let { type: descriptor = PropertyDescriptor } = description

        // 如果有描述就根据描述的赋值规则走
        descriptor.setProperty(this, key, value)
      }

    }
  }
}

