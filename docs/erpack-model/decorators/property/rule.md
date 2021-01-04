# 规则验证

## Required

- 标记字段必填

- 使用方法
```js
class User extends ErparkModel {
  @Required()
  name

  /**
   * 支持传入判断规则
   * 比如某个字段是否必填受限于另外一个字段 
   */
  @Required(function(){ return this.gender === '1' })
  age

  gender = 1
}
```

## Length 

- 字符输入长度验证
- 使用方法
```js
class User extends ErparkModel {
  @Length(10)
  name
}
```

## Pattern
- 正则验证
- 使用方法
```js
class User extends ErparkModel {
  @Pattern(/\d+/, '必须为数字')
  number
}
```

## Validator 
- 自定义验证器
- 使用方法
```js
class User extends ErparkModel {
  @Label('密码')
  password

  @Validator(function(rule, value, callback) {
    if(value !== this.password) {
      callback(new Error('两次输入密码不一致'))
    }
    callback()
  })
  @Label('确认密码')
  checkPassword
}
```