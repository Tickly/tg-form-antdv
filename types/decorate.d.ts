

export function Query(component: string, prop?: string, label?: string, ...props: any): Function

export function Dict(lx?: string): Function

export function Label(label: string): Function

export function MaxLength(length: number): Function

export function Pattern(regexp: RegExp, message?: string): Function

export function Phone(message?: string): Function

export function Required(cb?: () => boolean): Function

export function Validator(cb: (rule: Object, value: any, cb: () => void) => void): Function
