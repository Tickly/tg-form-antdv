import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Erpack from '../../src/components'

export default ({ Vue }) => {
  Vue.use(Antd)
  Vue.use(Erpack)

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
