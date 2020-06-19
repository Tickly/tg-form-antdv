<template>
  <tg-form ref="form" :form="form" :rules="rules" :labels="labels">
    <tg-form-item attr="username">
      <a-input v-model="form.username" />
    </tg-form-item>
    <tg-form-item attr="password">
      <a-input v-model="form.password" />
    </tg-form-item>
    <tg-form-item>
      <a-button type="primary" @click="handleSubmit">登录</a-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      // 这是你的表单数据
      form: {
        username: '',
        password: ''
      },
      // 这是你的表单验证规则
      rules: [
        ['required', 'username,password']
      ],
      // 这是你的表单label
      labels: {
        username: '用户名',
        password: '密码'
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate()
    }
  }
}
</script>
