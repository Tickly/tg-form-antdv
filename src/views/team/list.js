import { Describable, ErpackModel, Label, } from '../../components'
import Dialog from '../../mixins/Dialog'
import ListMixin from '../../mixins/ListMixin'
import UserDialog from '../user/dialog'

const TeamForm = {
  data () {
    return {
      form: new Team()
    }
  },
  render (h) {
    return <ErpackForm form={this.form}>
      <ErpackFormItem prop="name">
        <a-input />
      </ErpackFormItem>
      <ErpackFormItem prop="members">
        <UserDialog />
      </ErpackFormItem>
    </ErpackForm>
  }
}

const TeamDialog = {
  mixins: [Dialog],
  data () {
    return {
      title: '队伍信息'
    }
  },
  methods: {
    renderModalBody (h) {
      return h(TeamForm)
    }
  }
}

@Describable
class Team extends ErpackModel {
  @Label('队伍名称')
  name

  @Label('成员列表')
  members
}

const TeamList = [
  { id: 1, name: '飞虎队' },
  { id: 2, name: '小虎队' },
]

export default {
  name: 'TeamList',
  mixins: [ListMixin],
  data () {
    return {
      ModelClass: Team,
      dataSource: TeamList,
      searchItems: [
        'name',
      ]
    }
  },
  computed: {
    columns () {
      return [
        'id',
        'name',
        {
          type: 'action',
          buttons: [
            { text: '编辑', click: this.goEdit }
          ]
        }
      ]
    }
  },
  methods: {
    goEdit (record) {
      console.log(record)
      this.$refs.team.open()
    },
    renderExtra (h) {
      return h(TeamDialog, { ref: 'team' })
    }
  }
}