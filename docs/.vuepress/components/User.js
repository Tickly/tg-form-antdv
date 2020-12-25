import { Model, Label, Describable, Dict } from '../../../src/components'

@Describable
class User extends Model {

  @Label('姓名')
  name

  @Dict()
  @Label('性别')
  gender
}

export default User