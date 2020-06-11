import { Validator, Model } from 'tg-validators'

export default {
  name: 'TgForm',
  props: {
    form: Object,
    labels: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      model: null,
      errors: {},
    }
  },
  computed: {
    validators () {
      return Validator.getValidators(this.rules, this.labels)
    },
    hasErrors () {
      return Object.keys(this.errors).length > 0
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
    validate (attrs) {
      return Validator.validate(this.form, this.rules, this.labels, attrs)
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
