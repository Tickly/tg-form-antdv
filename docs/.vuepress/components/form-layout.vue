<template>
  <tg-form :layout="formLayout">
    <tg-form-item label="Form Layout">
      <a-radio-group default-value="horizontal" @change="handleFormLayoutChange">
        <a-radio-button value="horizontal">Horizontal</a-radio-button>
        <a-radio-button value="vertical">Vertical</a-radio-button>
        <a-radio-button value="inline">Inline</a-radio-button>
      </a-radio-group>
    </tg-form-item>
    <tg-form-item label="field A">
      <a-input />
    </tg-form-item>
    <tg-form-item label="field B">
      <a-input />
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      formLayout: 'horizontal'
    }
  },
  methods: {
    handleFormLayoutChange (e) {
      this.formLayout = e.target.value
    }
  }
}
</script>
