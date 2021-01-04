<template>
  <erpack-form ref="form" :form="form">
    <erpack-form-item prop="name">
      <a-input v-model="form.name" />
    </erpack-form-item>
    <erpack-form-item prop="gender">
      <GenderSelect v-model="form.gender" />
    </erpack-form-item>
    <erpack-form-item style="padding-left: 2em">
      <a-button type="primary" @click="handleSubmit">登录</a-button>
    </erpack-form-item>
  </erpack-form>
</template>
<script>
import { ErpackModel, Label } from 'erpack'
class Model extends ErpackModel {
  @Label('姓名')
  name

  @Label('性别')
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
    }
  }
}
</script>
