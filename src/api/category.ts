import { API_SERVER } from '@/config'
import http from '@/utils/http'

export interface Category {
  id?: string,
  name: string,
  desc: string
}

export default {
  getCategoryList () {
    return http.post(`${API_SERVER}api/category`)
  },

  getCategoryInfo (id: string) {
    return http.get(`${API_SERVER}api/category/${id}`)
  },

  updateCategory (params: Category) {
    return http.put(`${API_SERVER}api/category`, params)
  },

  deleteCategory (id: string) {
    return http.delete(`${API_SERVER}api/category/${id}`)
  },

  addCategory (params: Category) {
    console.log('params:', params)
    return http.post(`${API_SERVER}api/category/add`, params)
  }
}
