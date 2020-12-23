import { AddClassMethod, AddDescription, GetDescription } from '../Helper'

export function Label (label) {
  return function (target, property) {

    AddDescription(target, property, {
      label
    })

    AddClassMethod(target, 'getLabel', function (prop) {
      return GetDescription(target, prop).label
    })
  }
}