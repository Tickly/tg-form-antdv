<template>
  <erpack-table :model-class="ModelClass" :columns="columns" :data-source="dataSource" />
</template>
<script>
import User from '../User'
export default {
  data () {
    return {
      ModelClass: User,
      columns: [
        'id',
        'name',
        'gender',
      ],
      dataSource: [
        { id: 1, name: 'peter', gender: { name: '男', value: 1 } }
      ],
    }
  }
}
</script>