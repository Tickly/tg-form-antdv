import TableDialog from '../../mixins/TableDialog'
import UserTable from './table'
import User from './User'

export default {
  name: 'UserDialog',
  mixins: [TableDialog, UserTable],
  data () {
    return {
      ModelClass: User,
      title: '用户信息',
    }
  },
}