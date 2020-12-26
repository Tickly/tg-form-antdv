import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Erpack from '../../src/components'

import { Model, Label, Describable, Dict } from '../../src/components'

@Describable
class User extends Model {

  @Label('姓名')
  name

  @Dict()
  @Label('性别')
  gender

  @Dict()
  @Label('标签')
  tag
}


export default ({ Vue }) => {
  Vue.use(Antd)
  Vue.use(Erpack)

  Vue.prototype.UserClass = User

  Vue.mixin({
    data () {
      return {
        User: User,
        UserDataSource: [
          {
            id: 1, name: 'peter',
            gender: { name: '男', value: 0 },
            tag: [{ name: '标签1', value: 1 }, { name: '标签2', value: 2 }]
          },
          {
            id: 2, name: 'jam',
            gender: { name: '女', value: 1 },
            tag: [{ name: '标签1', value: 1 }, { name: '标签2', value: 2 }]
          },
        ]
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.form.validate()
          .then(() => {
            alert('验证通过')
          })
          .catch(errors => {
            alert(JSON.stringify(errors))
          })
      }
    }
  })
}
