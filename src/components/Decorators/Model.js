import { Describable } from './class/Describable';
import Descriptions from './Descriptions';
import { Label } from './property/Label';

@Describable
class Model {
  @Label('主键id')
  zjid

  static abc () {
    return this
  }

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
    console.log('getDescription', property, this.prototype.descriptions)

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

  static getLabel (property) {
    let description = this.getDescription(property)
    if (description) return description.label
  }
}

export { Model }