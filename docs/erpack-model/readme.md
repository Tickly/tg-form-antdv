# ErpackModel

```js
class Model {}
```

## 背景

在平时开发项目的时候，可能会常常遇到一些`麻烦`的地方，比如说：

- 在编辑数据的时候，有个字段是字典项，返回的是`Object`格式，但是又要求你提交的时候只能提交一个`value`。
- 在编写表单+表格相关的代码的时候，得写上`字段名`+`字段描述名称`，比如`name`+`姓名`。
- 在编写表单验证的时候，要写上`验证规则`以及`message`，比如 `{ required:true, message:'请输入姓名'}`，`{ maxLength:20, message:'姓名不能超过20个字符' }`。

## 现在

`Model` 的设计就是为了简化这些步骤，现在你可以先定义一个模型

```js
class User extends Model {
  @Label("姓名")
  name;

  @Label("性别")
  @Dict("xb")
  gender;
}
```

然后，当你从接口拿到用户数据后，应该是类似这样的数据格式

```json
{
  "name": "peter",
  "gender": {
    "name": "男",
    "value": 1
  }
}
```

在拿到数据之后，你就可以生成一个`User`实例

```js
let user = new User(data)

// user 的数据结构是这样
{
  name:'peter',
  gender:1,
  gender_name:'男'
}
```

`Model` 会自动将`字典项`字段展开为`两个`属性，最后在提交数据的时候，通过`user.getForm()`方法，会自动过滤掉不需要的属性，你会得到这样一个对象
```js
{
  name:'peter',
  gender:1
}
```
`gender_name`已经被自动过滤掉了，防止接口接收到额外的属性会报错。

## 装饰器
可以看出，模型的功能是通过装饰器(Decorator)来实现的。

### Label
给字段添加文本映射。  
加上映射之后，在页面编写表单的`FormItem`的时候，只需要指定`prop`即可自动获取到文本。  
在编写表格的`Columns`的时候，也只需要指定字段名即可自动获取到列名称

### Dict
指定该字段为字典项。

### 表单验证
- Required 指定该字段为必填项 支持传入函数 比如该字段的必填规则受其他字段影响
- Length 指定字段最大输入长度


```js
class User extends Model {
  @Length(10)
  @Required(function() {
    return this.age > 10
  })
  @Label('名称')
  name

  age
}
const user = new User()
// user.rules 将得到
{
  name: [
    {required: false, message: '名称不能为空'},
    {max: 10, message: '最多输入10个字符', trigger: 'blur'},
  ]
}
user.age = 20
// user.rules 将得到
{
  name: [
    {required: true, message: '名称不能为空'},
    {max: 10, message: '最多输入10个字符', trigger: 'blur'},
  ]
}
```
---
# 数据结构设计

1. 接口给到的数据
2. 页面中如何使用数据
3. 如何将数据给到接口

## 基本数据类型不作处理
像Number,String,Boolean,null这些不作处理
## 对象

|场景|行为|
|-|-|
|表格展示|展示某个字段，或者也可能多个字段
|新增、编辑数据|
|查看数据

## 对象数组
### 表格展示
通常会显示名称
### 编辑数据
通常保存id数组或者ids字符串，但组件有时候会需要原始数据进行回显。