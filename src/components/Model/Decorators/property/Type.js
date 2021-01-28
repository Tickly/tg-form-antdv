import { PropertyDescriptor } from '../../PropertyDescriptor'

export function Type (type = PropertyDescriptor) {
  return function (target, property) {
    target.constructor.addDescription(property, {
      type,
    })
  }
}