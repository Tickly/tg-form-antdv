import clonedeep from 'lodash.clonedeep'

export default class Rules {
  /**
   * 添加一个验证规则
   *
   * @param {*} prop 
   * @param {Object} rule
   * @memberof Rules
   */
  add(prop, rule) {
    if(this[prop] === undefined) {
      this[prop] = []
    }
    this[prop].push(rule)
  }
  generateRules(rules) {
    let cloneRules = clonedeep(rules)
    for (const property in cloneRules) {
      const rule = cloneRules[property] // 单个规则
      for (let index = 0; index < rule.length; index++) {
        const item = rule[index]
        for (const key in item) {
          const element = item[key]
          if (typeof element === 'function') {
            rule[index][key] = element.call(this)
          }
        }
      }
      
    }
    return cloneRules
  }
}
