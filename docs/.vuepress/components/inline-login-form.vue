<template>
  <tg-form ref="form" :form="form" :rules="rules" layout="inline" @submit="handleSubmit">
    <tg-form-item prop="userName" label>
      <a-input v-model="form.userName" placeholder="Username" />
    </tg-form-item>
    <tg-form-item prop="password" label>
      <a-input v-model="form.password" placeholder="Password" />
    </tg-form-item>
    <a-form-item>
      <a-button type="primary" :disabled="btnDisabled">Log in</a-button>
    </a-form-item>
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
    }
  },
  computed: {
    rules () {
      return [
        ['required', ['userName', 'password']]
      ]
    },
    btnDisabled () {
      if (this.isFirst) {
        return true
      }

      return this.$refs.form.hasErrors
    }
  },
  watch: {
    // form: {
    //   handler () {
    //     this.isFirst = false
    //     this.check()
    //   },
    //   deep: true
    // },
    'form.userName' () {
      this.check('userName')
    },
    'form.password' () {
      this.check('password')
    }
  },
  mounted () {

  },
  methods: {
    check (attrs = null) {
      this.$refs.form.validate(attrs)
    },
    handleSubmit () {

    }
  }
}
</script>