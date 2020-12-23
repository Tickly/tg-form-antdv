import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import TgForm from '../../src/main'

export default ({ Vue }) => {
  Vue.use(Antd)
  Vue.use(TgForm)

  Vue.mixin({
    methods: {
      handleSubmit () {
        this.$refs.form.validate()
          .then(() => {
            alert('验证通过')
          })
          .catch(errors => {
            alert(JSON.stringify(errors))
          })
      }
    }
  })
}
