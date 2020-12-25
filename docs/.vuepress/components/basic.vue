<template>
  <erpack-form ref="form" :columns="3" :form="form" :rules="rules" :labels="labels">
    <erpack-form-item attr="username">
      <a-input v-model="form.username" />
    </erpack-form-item>
    <erpack-form-item attr="password">
      <a-input v-model="form.password" />
    </erpack-form-item>
    <erpack-form-item attr="password">
      <a-input v-model="form.password" />
    </erpack-form-item>
    <erpack-form-item attr="password">
      <a-input v-model="form.password" />
    </erpack-form-item>
    <erpack-form-item attr="password" :col-span="2" :label-col="3">
      <a-input v-model="form.password" />
    </erpack-form-item>
    <erpack-form-item attr="password" :col-span="3" :label-col="2">
      <a-input v-model="form.password" />
    </erpack-form-item>
    <erpack-form-item style="padding-left:2em;">
      <a-button type="primary" @click="handleSubmit">登录</a-button>
    </erpack-form-item>
  </erpack-form>
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
