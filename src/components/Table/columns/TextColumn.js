import { ErpackModel } from '../../Model/Model'
import Column from './Column'

export default class TextColumn extends Column {
  render (h, value, record) {
    if (value instanceof ErpackModel) {
      return value.renderContent()
    }

    return value
  }
}