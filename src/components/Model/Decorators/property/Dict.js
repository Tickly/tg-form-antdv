/**
 * 标记字段为字典项，然后Model会自动将该字段展开为两个属性。
 * 例如 gender:{ name: '男', value: 1 }
 * 将会展开为两个字段 gender:1,gender_name:'男'
 * 
 * @param {String} lx 字典项的类型简拼，可以不传
 */

export const getDictNameProperty = property => {
  return `${property}_name`
}

export function Dict (lx) {
  return function (target, property) {
    target.constructor.addDescription(property, {
      isDict: true,
      lx,
      setProperty (dict) {
        if (dict === null || dict === undefined || typeof dict === 'string') {
          dict = { value: dict }
        }

        if (dict.constructor === Object) {
          dict = [dict]
        }

        if (Array.isArray(dict)) {
          this[property] = dict.map(v => v.value).join(',')
          this[getDictNameProperty(property)] = dict.map(v => v.name).join(',')
        }
      }
    })
  }
}