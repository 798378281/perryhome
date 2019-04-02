import { API_SERVER } from '@/config'
import http from '@/utils/http'

export interface Category {
  id?: string,
  name: string,
  desc: string
}

export default {
  getCategoryList () {
    return http.post(`${API_SERVER}/api/category/list`)
  },

  getCategoryInfo (id: string) {
    return http.get(`${API_SERVER}/api/category/detail/${id}`)
  },

  updateCategory (params: Category) {
    return http.post(`${API_SERVER}/api/category/update`, params)
  },

  deleteCategory (id: string) {
    return http.delete(`${API_SERVER}/api/category/delete/${id}`)
  },

  addCategory (params: Category) {
    return http.post(`${API_SERVER}/api/category/add`, params)
  }
}
