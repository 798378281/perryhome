/**
 * 下拉选项
 */
export interface Option {
  label?: string | number
  value: any
  disabled?: boolean
}

/**
 * 表单项验证触发方式
 */
type FormItemTriggerType = 'blur' | 'change'

/**
 * 表单验证项通用字段
 */
interface IValidationRule {
  required?: boolean
  message?: string
  trigger?: FormItemTriggerType
  validator?: (rule: IValidationRule, value: any, callback: Function) => void
  [index: string]: any
}

/**
 * 表单验证数据类型
 */
export interface IValidationRules {
  [prop: string]: IValidationRule[]
}

/**
 * 表单数据
 */
export interface IForm {
  [key: string]: any
}
