<template>
  <erpack-form ref="form" :form="form" :rules="rules" layout="horizontal">
    <erpack-form-item prop="note">
      <a-input v-model="form.note" />
    </erpack-form-item>
    <erpack-form-item prop="gender">
      <a-select v-model="form.gender" placeholder="Select a option and change input text above" @change="handleSelectChange">
        <a-select-option value="male">male</a-select-option>
        <a-select-option value="female">female</a-select-option>
      </a-select>
    </erpack-form-item>

    <erpack-form-item>
      <a-button @click="handleSubmit">提交</a-button>
    </erpack-form-item>
  </erpack-form>
</template>
<script>
import '@root'
export default {
  data () {
    return {
      form: {
        note: '',
        gender: undefined
      },
      rules: [
        ['required', ['note', 'gender']]
      ],
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate()
    },
    handleSelectChange (value) {
      this.form.note = `Hi, ${value === 'male' ? 'man' : 'lady'}!`
    }
  }
}
</script>
