import { Validator } from 'tg-validators'

export default {
  name: 'TgForm',
  props: {
    form: Object,
    labels: Object,
    rules: Array
  },
  data () {
    return {
      errors: {}
    }
  },
  computed: {
    validators () {
      return Validator.getValidators(this.rules, this.labels)
    }
  },
  provide () {
    return {
      tgForm: this
    }
  },
  render (h) {
    return h(
      'a-form',
      {
        props: {
          ...this.$attrs
        }
      },
      this.$slots.default
    )
  },
  created () {

  },
  methods: {
    validate () {
      return Validator.validate(this.form, this.rules, this.labels)
        .then(() => {
          this.errors = {}
        })
        .catch(errors => {
          this.errors = errors

          return Promise.reject(errors)
        })
    }
  }
}
