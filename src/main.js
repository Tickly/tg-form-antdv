import { Describable } from './components/Decorators'
import { Form, FormItem } from './components/Form'


class Model {
  constructor (data) {
    for (const key in data) {
      const value = data[key];
      this[key] = value
    }
  }


  id
}
@Describable
class User extends Model {
  set1 () {
    return this.name
  }

  name = 1

  gender = 3
}


let user = new User({
  id: 1,
  name: 'peter',
  gender: { name: '男', value: 1 },
})

console.log(user, user instanceof User, user.set1)

export default {
  install (Vue) {
    [Form, FormItem].forEach(cpt => {
      Vue.component(cpt.name, cpt)
    })
  }
}
