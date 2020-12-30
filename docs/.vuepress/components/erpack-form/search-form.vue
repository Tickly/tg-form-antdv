<template>
  <div>
    <erpack-search :model="Model" :items="searchItems" />
  </div>
</template>
<script>
import {ErpackModel, Query, Label, Dict} from 'erpack'

class Model extends ErpackModel {
  @Query()
  @Dict()
  @Label('姓名')
  name

  @Query('gender-select')
  @Label('性别')
  gender
}
export default {
  data() {
    return {
      Model: Model,
      searchItems: [
        'name',
        'gender',
        {label: '年龄', prop: 'age'},
        {label: '身高', prop: 'height'},
        {label: '体重', prop: 'weight'},
      ]
    }
  }
}
</script>
<style>
  .ant-form-item.hide {
    display: none;
  }
  .page-search-nowrap .ant-form-item{
    width: calc((100% - 300px) / 3) !important;
  }
</style>