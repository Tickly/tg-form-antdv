import User from './User'
import ListMixin from '../../mixins/ListMixin'
import UserTable from './table'

export default {
  name: 'UserList',
  mixins: [ListMixin, UserTable],
  data () {
    return {
      ModelClass: User,
    }
  },
  methods: {
    goDetail (record) {
      this.$router.push({
        path: 'detail',
        query: {
          id: record.id,
        }
      })
    }
  }
}