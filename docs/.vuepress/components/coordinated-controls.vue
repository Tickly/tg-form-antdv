<template>
  <tg-form ref="form" :form="form" :rules="rules" layout="horizontal">
    <tg-form-item prop="note">
      <a-input v-model="form.note" />
    </tg-form-item>
    <tg-form-item prop="gender">
      <a-select v-model="form.gender" @change="handleSelectChange" placeholder="Select a option and change input text above">
        <a-select-option value="male">male</a-select-option>
        <a-select-option value="female">female</a-select-option>
      </a-select>
    </tg-form-item>

    <tg-form-item>
      <a-button @click="handleSubmit">提交</a-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        note: '',
        gender: ''
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