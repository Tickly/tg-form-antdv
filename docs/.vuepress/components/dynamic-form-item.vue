<template>
  <tg-form ref="form" :form="form" :rules="rules">
    <tg-form-item v-for="f in dynamicFields" :key="f" :attr="f">
      <a-input v-model="form[f]">
        <a-icon slot="addonAfter" type="minus-o" @click="removeField(f)" />
      </a-input>
    </tg-form-item>
    <tg-form-item>
      <a-button type="dashed" icon="plus" @click="addField">Add field</a-button>
    </tg-form-item>
    <tg-form-item>
      <a-button type="primary" @click="handleSubmit">Submit</a-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
let id = 0

export default {
  data () {
    return {
      form: {},
      dynamicFields: [],
    }
  },
  computed: {
    rules () {
      return [
        ['required', this.dynamicFields, {
          message: '这是什么，不能为空'
        }]
      ]
    }
  },
  methods: {
    addField () {
      const field = 'Passengers' + id++
      this.dynamicFields.push(field)
      this.$set(this.form, field, '')
    },
    removeField (field) {
      this.$delete(this.form, field)
      this.dynamicFields = this.dynamicFields.filter(f => f !== field)
    }
  }
}
</script>
