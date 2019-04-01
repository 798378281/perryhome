import { AxiosPromise } from 'axios'

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

/**
 * 菜单
 */
export interface INav {
  index: string,
  name: string,
  icon: string,
  path?: string,
  childrens?: INav[]
}

/**
 * 面包屑
 */
export interface IBreadcrumb {
  name: string,
  path?: string
}

/**
 * 排序参数
 */
export interface Order {
  [key: string]: 'desc' | 'AND' | 'asc'
}

export interface ListQuery {
  [key: string]: any
}

/**
 * 列表查询参数
 */
export interface ListCondition {
  page: number, // 页数
  size: number, // 分页大小
  filters: string[], // 筛选字段
  sort?: Order[], // 排序
  query?: ListQuery,
}
export interface ResponseDetail<T = any> {
  data: T
  code: string	// 	String	成功、错误码
  msg: string	// 	String	对于返回值的详细说明
  status: string	// 	String	状态码
  responseTime: string	// 	String	响应时间
}

/**
 * 通用的API返回头
 */
export type ApiResponse<T = any> = AxiosPromise<ResponseDetail<T>>

/**
 * 通用列表数据接口
 */
export type ApiListData<T> = ApiResponse<{
  list: T[]; // 列表
  count: number; // 数量
}>
