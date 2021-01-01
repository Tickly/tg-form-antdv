const Users = [
  { id: 1, name: '张三', gender: { name: '男', value: 0 }, age: 18 },
  { id: 2, name: '李四', gender: { name: '男', value: 0 }, age: 18 },
]

export default {
  list () {
    return Users
  },
  get (id) {
    return Users.find(user => user.id === id)
  },
}