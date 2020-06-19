<template>
  <tg-form ref="form" :form="form" :rules="rules" layout="inline" @submit="handleSubmit">
    <tg-form-item attr="userName" label>
      <a-input v-model="form.userName" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </tg-form-item>
    <tg-form-item attr="password" label>
      <a-input v-model="form.password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </tg-form-item>
    <tg-form-item>
      <a-button type="primary" :disabled="btnDisabled">Log in</a-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      // 标记是否是刚进来
      isFirst: true,
      form: {
        userName: '',
        password: ''
      },
      rules: [
        ['required', ['userName', 'password']]
      ]
    }
  },
  computed: {
    btnDisabled () {
      if (this.isFirst) {
        return true
      }

      return this.$refs.form.hasErrors
    }
  }
}
</script>
