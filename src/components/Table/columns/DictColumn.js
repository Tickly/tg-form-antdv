import { getDictNameProperty } from '../../Model/Decorators/property/Dict'
import Column from './Column'

export default class DictColumn extends Column { 
  render (h, text, record) {
    return record[getDictNameProperty(this.dataIndex)]
  }
}