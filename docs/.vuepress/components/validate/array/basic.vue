<template>
  <tg-form ref="form" :form="form" :rules="rules">
    <tg-form-item attr="arr">{{form.arr[0].x}}</tg-form-item>
    <tg-form-item attr="str">{{form.str}}</tg-form-item>
    <tg-form-item>
      <a-button type="primary" @click="handleToggle">Toggle</a-button>
      <a-button type="primary" @click="handleSubmit">Submit</a-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        arr: [{}],
        str: '',
      },
      rules: [
        ['required', 'str'],
        ['custom', 'arr', {
          handler (value, resolve) {
            console.log(1, value)
            for (const item of value) {
              console.log(item)
              if (item.x === 0) {
                throw new Error('错了')
              }
            }
            resolve()
          }
        }]
      ]
    }
  },
  methods: {
    handleToggle () {
      this.form.arr[0].x = this.form.arr[0].x ? 0 : 1

      this.form.str = this.form.str ? '' : 'abc'
    }
  }
}
</script>
