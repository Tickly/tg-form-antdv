<template>
  <erpack-table
    :model-class="User"
    :columns="columns"
    :data-source="UserDataSource"
  />
</template>
<script>
export default {
  data () {
    return {
      columns: [
        'id',
        'name',
        'gender',
        'tag',
      ],
    }
  }
}
</script>