<template>
  <erpack-form ref="form" :form="form">
    <erpack-form-item prop="note">
      <a-input v-model="form.note" />
    </erpack-form-item>
    <erpack-form-item prop="gender">
      <GenderSelect v-model="form.gender" @change="handleSelectChange" />
    </erpack-form-item>
    <erpack-form-item>
      <a-button @click="handleSubmit">提交</a-button>
    </erpack-form-item>
  </erpack-form>
</template>
<script>

import { ErpackModel, Label } from 'erpack'

class Model extends ErpackModel {
  @Label('Note')
  note

  @Label('Gender')
  gender
}


export default {
  data () {
    return {
      form: new Model(),
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate()
    },
    handleSelectChange (value) {
      this.form.note = `Hi, ${value === 0 ? 'man' : 'lady'}!`
    }
  }
}
</script>
