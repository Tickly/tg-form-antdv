export function Required(required = () => true) {
  return (target, property) => {
    // 获取label
    const label = target.constructor.getLabel(property) || property 
    const rule = {
        message: `${label}不能为空`,
        required: required
    }
    target.constructor.addRule(property, rule)
  };
}
