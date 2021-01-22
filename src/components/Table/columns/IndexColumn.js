import Column from './Column'

export default class IndexColumn extends Column {
  constructor () {
    super({
      title: '序号',
      width: 80,
      fixed: 'left',
    })
  }

  render (h, text, record, index) {
    return index + 1
  }
}