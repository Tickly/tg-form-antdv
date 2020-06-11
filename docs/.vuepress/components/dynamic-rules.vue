<template>
  <tg-form ref="form" :form="form" :rules="rules">
    <tg-form-item prop="name">
      <a-input v-model="form.name" placeholder="Please input your name" />
    </tg-form-item>
    <tg-form-item prop="nickname">
      <a-input v-model="form.nickname" placeholder="Please input your nickname" />
    </tg-form-item>
    <a-form-item>
      <a-checkbox v-model="checkNick">Nickname is required</a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="check">Check</a-button>
    </a-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      checkNick: false,
      form: {
        name: '',
        nickname: ''
      },
    }
  },
  computed: {
    rules () {
      return [
        ['required', ['name', this.checkNick && 'nickname']]
      ]
    }
  },
  methods: {
    check () {
      this.$refs.form.validate()
    }
  }
}
</script>