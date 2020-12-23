import { AddDescription } from '../Helper'

export function Label (label) {
  return function (target, property) {
    AddDescription(target, property, {
      label
    })
  }
}