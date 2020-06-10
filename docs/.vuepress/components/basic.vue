<template>
  <tg-form ref="form" :form="form" :labels="labels" :rules="rules" layout="inline">
    <tg-form-item prop="studentCode">
      <a-input v-model="form.studentCode" />
    </tg-form-item>
    <tg-form-item prop="studentName">
      <a-input v-model="form.studentName" />
    </tg-form-item>
    <tg-form-item prop="studentAge">
      <a-input-number v-model="form.studentAge" />
    </tg-form-item>
    <tg-form-item>
      <a-button @click="handleClick">提交</a-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        studentCode: '',
        studentName: '',
        studentAge: null
      },
      labels: {
        studentCode: '学号',
        studentName: '姓名',
        studentAge: '年龄'
      },
      rules: [
        ['required', ['studentCode', 'studentName']],
        ['string', ['studentCode']],
        ['number', ['studentAge']],
      ]
    }
  },
  methods: {
    handleClick () {
      this.$refs.form.validate()
        .then(() => {
          console.log('yes')
        })
        .catch((errors) => {
          console.log('no', errors)
        })
    }
  }
}
</script>