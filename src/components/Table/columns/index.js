import Column from './Column'
import TextColumn from './TextColumn'
import ActionColumn from './ActionColumn'
import IndexColumn from './IndexColumn'

const Columns = {
  text: TextColumn,
  action: ActionColumn,
  index: IndexColumn,
}

export const RegisterColumn = (type, Column) => {
  return Reflect.set(Columns, type, Column)
}

export const toColumn = (config, Model, h) => {

  if (typeof config === 'string') {
    if (config === '#') {
      config = {
        type: 'index',
      }
    } else {
      config = {
        dataIndex: config
      }
    }
  }

  let { dataIndex } = config

  let { type = 'text' } = config

  let Column = Columns[type]

  if (!Column) {
    console.warn('没有找到该类型的Column')
    return new Column({}, Model, h)
  }

  return new Column(config, Model, h)
}

export {
  Column,
  IndexColumn,
  TextColumn,
  ActionColumn,
}