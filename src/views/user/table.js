const UserList = [
  { id: 1, name: '张三', gender: { name: '男', value: 0 }, age: 18 },
  { id: 2, name: '李四', gender: { name: '男', value: 0 }, age: 18 },
]

export default {
  data () {
    return {
      dataSource: UserList,
    }
  },
  computed: {
    columns () {
      console.log(this._isDialog, 111)
      return [
        this.isDialog ? null : 'id',
        'name',
        'gender',
        'age',
        this.isDialog ? null : {
          type: 'action',
          buttons: [
            { text: '查看', click: this.goDetail },
            { text: '编辑', click: this.goDetail },
            { text: '删除', click: this.goDetail },
          ]
        }
      ]
    }
  },
}