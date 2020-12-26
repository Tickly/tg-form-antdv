<template>
  <erpack-form ref="form" :form="form">
    <erpack-form-item prop="name">
      <a-input v-model="form.name" />
    </erpack-form-item>
    <erpack-form-item prop="gender">
      <a-input v-model="form.gender" />
    </erpack-form-item>
    <erpack-form-item style="padding-left: 2em">
      <a-button type="primary" @click="handleSubmit">登录</a-button>
    </erpack-form-item>
  </erpack-form>
</template>
<script>
export default {
  data () {
    return {
      // 这是你的表单数据
      form: new this.UserClass(),
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate()
    }
  }
}
</script>
