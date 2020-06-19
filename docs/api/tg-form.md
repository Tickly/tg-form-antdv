# tg-form

## 参数

| 参数名 | 参数类型 | 参数说明 |
|-|-|-|
| form | Object | 表单数据
| labels | Object | 字段描述文字
| rules | Array | 验证规则，具体写法可以去看[tg-validators](https://github.com/Tickly/tg-validators)

支持所有a-form组件的参数

## 方法

| 方法 | 参数列表 | 方法介绍
|-|-|-|
| validate | (attrs: string \| string[]) | 验证表单，可以传入要验证的字段，也可以不传来验证全部字段