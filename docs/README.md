# erpack

`erpack` 是一个基于 [ant-design-vue](https://www.antdv.com/components/form-cn/) 组件库的扩展组件库。  
主要针对`后台管理系统`类型的项目，即包含大量的`表单`,`表格`组件的项目。  
简化了数据处理，以及表单组件与表格组件代码的编写。

## 如何简化

### 模拟一个需求场景

假设我们现在有个`用户管理系统`，有个页面是可以查询用户列表的，那么用户表比如说有`name`(姓名)、`gender`(性别)、`hobbies`(爱好)等字段。

在我们新增用户的时候，`name`是通过文本框输入的，`gender`是通过字典项单选的，`hobbies`是通过字典项多选的。

那么，我们从接口拿到用户数据可能是这个样子的。

```json
{
  "name": "小明",
  "gender": {
    "value": 0,
    "name": "男"
  },
  "hobbies": [
    { "value": 0, "name": "编程" },
    { "value": 2, "name": "学习" }
  ]
}
```

那么我们用户列表的页面，会包含两个基本组件，一个是查询表单，一个是数据表格。

查询表单的代码可能是这样
```vue
<template>
  <a-form-model>
    <a-form-model-item prop="name" label="姓名">
      <a-input />
    </a-form-model-item>
    <a-form-model-item prop="gender" label="性别">
      <a-input />
    </a-form-model-item>
    <a-form-model-item prop="hobbies" label="爱好">
      <a-input />
    </a-form-model-item>
  </a-form-model-ite>
</template>
```

数据表格的代码可能是这样
```vue

```
