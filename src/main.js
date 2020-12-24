import { Model } from './components/Decorators/Model'
import { Label } from './components/Decorators/property/Label'
import { Form, FormItem } from './components/Form'


console.log(Model.getLabel('zjid'))
// console.log(Model.prototype)

class User extends Model {
  
  name = 1
  
  @Label('性别')
  gender = 3
}

// console.log(User.prototype)
console.log(User.getLabel('zjid'))
console.log(User.getLabel('name'))
console.log(User.getLabel('gender'))


// console.log(Car.getLabel('zjid'))
// console.log(Car.getLabel('gender'))

// let user = new User({
//   id: 1,
//   name: 'peter',
//   gender: { name: '男', value: 1 },
// })

// console.log(Model)

// console.log(Model.getLabel('id'))

// console.log(user, user instanceof User)


export default {
  install (Vue) {
    [Form, FormItem].forEach(cpt => {
      Vue.component(cpt.name, cpt)
    })
  }
}
