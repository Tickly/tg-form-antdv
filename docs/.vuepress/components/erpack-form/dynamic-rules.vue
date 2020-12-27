<template>
  <erpack-form ref="form" :form="form" :columns="1">
    <erpack-form-item prop="name">
      <a-input v-model="form.name" placeholder="Please input your name" />
    </erpack-form-item>
    <erpack-form-item prop="nickname">
      <a-input
        v-model="form.nickname"
        placeholder="Please input your nickname"
      />
    </erpack-form-item>
    <erpack-form-item no-label>
      <a-checkbox v-model="form.checkNick">Nickname is required</a-checkbox>
    </erpack-form-item>
    <erpack-form-item no-label>
      <a-button type="primary" @click="check">Check</a-button>
    </erpack-form-item>
  </erpack-form>
</template>
<script>

import { ErpackModel, Label, Required } from 'erpack'

class Model extends ErpackModel {
  @Required()
  @Label('姓名')
  name

  @Required(function () {
    return this.checkNick
  })
  @Label('昵称')
  nickname

  checkNick = false
}

export default {
  data () {
    return {
      form: new Model(),
    }
  },
  
  methods: {
    check () {
      this.$refs.form.validate()
    }
  }
}
</script>
