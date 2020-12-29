/**
 *
 *
 * @export
 * @param {string} [component='a-input']
 * @param {Object} queryOptions
 */
export function Query(component = 'a-input', queryOptions = {}) {
  return (target, proptery) => {
    const description = {
      component,
      queryOptions
    }
    target.constructor.addDescription(proptery, description)
  }

}