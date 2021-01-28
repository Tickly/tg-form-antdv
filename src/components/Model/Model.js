import Descriptions from './Descriptions'
import { Describable, Label } from './Decorators'

import Rules from './Rules'
import { PropertyDescriptor } from './PropertyDescriptor'

@Describable
class ErpackModel {
  /**
   * 添加一个属性描述
   * @param {String} property 属性名称
   * @param {Object} description 描述
   */
  static addDescription (property, description) {
    let target = this.prototype

    if (!target.hasOwnProperty('descriptions')) {
      target.descriptions = new Descriptions()
    }

    target.descriptions.add(property, description)
  }

  /**
   * 获取一个属性描述
   * @param {String} property 属性名称
   */
  static getDescription (property) {
    // console.log('getDescription', property, this.prototype.descriptions)

    let descriptions = this.prototype.descriptions

    if (descriptions) {
      let description = descriptions.get(property)
      if (description) return description
    }

    // 如果在本类没找到定义，就去父类找
    let parent = Object.getPrototypeOf(this)
    if (parent && parent.getDescription) {
      return parent.getDescription(property)
    }
  }

  /**
   * 获取字段文本映射
   * @param {String} property 属性名称
   */
  static getLabel (property) {
    let description = this.getDescription(property)
    if (description) return description.label
  }

  /**
   * 添加一个验证规则
   *
   * @param {String} property 属性名称
   * @param {Object} rule 验证规则
   */
  static addRule (property, rule) {
    let target = this.prototype

    if (!target.hasOwnProperty('rulesInstace')) {
      target.rulesInstace = new Rules()
    }

    target.rulesInstace.add(property, rule)
  }
  /**
   * 获取模型上的验证规则
   *
   */
  static getRules () {
    let rules = this.prototype.rulesInstace || {}
    function cloneRules (rules, target) {
      const parent = Object.getPrototypeOf(target)
      if (parent === ErpackModel) return rules
      if (parent.prototype && parent.prototype.rulesInstace) {
        rules = Object.assign({}, parent.prototype.rulesInstace, rules)
      }
      return cloneRules(rules, parent)
    }
    rules = cloneRules(rules, this)
    return rules
  }
  /**
   * 规则与实例的绑定
   *
   * @readonly
   * @memberof ErpackModel
   */
  get rules () {
    const rules = this.constructor.getRules()

    return this.rulesInstace?.generateRules.call(this, rules)
  }
  /**
   * 获取搜索项
   *
   * @param {String} proprety
   */
  static getQuery (proprety) {
    let description = this.getDescription(proprety)
    if (description) {
      const { queryOptions, setProperty, ...options } = description
      return Object.assign(options, { prop: proprety }, queryOptions, )
    }
    return {}
  }

  /**
   * 获取保存时需要的数据
   */
  getSaveData () {
    let form = {}

    let unSaveProps = this.unSaveProps()

    Object.keys(this).map(key => {
      if (unSaveProps.indexOf(key) > -1) return

      let description = this.constructor.getDescription(key) || {}
      let { type: descriptor = PropertyDescriptor } = description
      let value = descriptor.getProperty(this, key)

      Reflect.set(form, key, value)
    })

    return form
  }

  /**
   * 不需要保存的字段
   */
  unSaveProps () {
    return []
  }

  renderContent () {

  }
}

export { ErpackModel }
