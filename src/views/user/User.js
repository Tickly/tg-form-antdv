import { ErpackModel, Describable, Label, } from '../../components'

@Describable
class User extends ErpackModel {

  @Label('姓名')
  name

  @Label('性别')
  gender

  @Label('年龄')
  age
}

export default User