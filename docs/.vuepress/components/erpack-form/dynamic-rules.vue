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
    <!-- <erpack-form-item no-label>
      <a-checkbox v-model="form.checkNick">Nickname is required</a-checkbox>
    </erpack-form-item> -->
    <erpack-form-item prop="password">
      <a-input v-model="form.password" />
    </erpack-form-item>
    <erpack-form-item prop="checkPassword">
      <a-input v-model="form.checkPassword" />
    </erpack-form-item>
    <erpack-form-item prop="loves">
      <Loves v-model="form.loves" />
      <a-button @click="add">add</a-button>
    </erpack-form-item>
    <erpack-form-item no-label>
      <a-button type="primary" @click="check">Check</a-button>
    </erpack-form-item>
  </erpack-form>
</template>
<script>

import { ErpackModel, Label, Required, Length, Validator, NoEmptyItem } from 'erpack'

const Loves = {
  props: {
    value: Array,
  },
  model: {
    event: 'change'
  },
  render(h) {
    return h('div', this.value.map((item, index) => {
      return h('a-input', {
        props: {
          value: item
        },
        on: {
          change: e => {
            const v = e.target.value
            const currentValue = [...this.value];
            currentValue[index] = v
            this.$emit('change', currentValue)
          },
          blur: e => {
            this.$emit('blur', this.value)
          }
        }
      })
    }))
  }
}

class Model extends ErpackModel {
  @Length(5)
  @Required()
  @Label('姓名')
  name

  @Required(function () {
    return this.checkNick
  })
  @Label('昵称')
  nickname

  checkNick = false

  @Label('password')
  password

  @Validator(function(rule, value, callback) {
    if(value !== this.password) {
      callback(new Error('两次输入密码不一致'))
    }
    callback()
  })
  @Label('确认密码')
  checkPassword

  @NoEmptyItem()
  loves = []
}

export default {
  components: {
    Loves
  },
  data () {
    return {
      form: new Model(),
    }
  },
  
  methods: {
    check () {
      this.$refs.form.validate()
    },
    
    add() {
      this.form.loves.push('')
    }
  }
}
</script>
