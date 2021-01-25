
export class ErpackModel {
  static addDescription(property: string, description: any): void
  static getDescription<T>(property: string): T
  static getLabel(property: string): string
  static isDict(property: string): boolean
  static getDictNameProperty(property: string): string
  static addRule(property: string, rule: any): void
  static getRules(): any[]
  static getQuery(proprety): any
  get rules(): any[]
}
