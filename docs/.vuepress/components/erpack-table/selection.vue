<template>
  <div>
    <a-button @click="single = true">单选</a-button>
    <a-button @click="single = false">多选</a-button>
    <a-button @click="single = undefined">不选</a-button>

    <erpack-table
      :model-class="User"
      :columns="columns"
      :data-source="UserDataSource"
      :single="single"
      @selection-change="handleSelectionChange"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      single: undefined,
      columns: [
        'id',
        'name',
        'gender',
        'tag',
      ],
    }
  },
  methods: {
    handleSelectionChange (selectedRowKeys, selectedRows) {
      console.log(selectedRowKeys, selectedRows)
    }
  }
}
</script>