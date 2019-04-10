import { API_SERVER } from '@/config'
import http from '@/utils/http'

export interface Journal {
  id?: string,
  title: string,
  category: string,
  img_url?: string,
  desc: string,
  content: string,
  create_date?: string
}

export default {
  getJournalList () {
    return http.post(`${API_SERVER}/api/journal/list`)
  },

  getJournalInfo (id: string) {
    return http.get(`${API_SERVER}/api/journal/detail/${id}`)
  },

  updateJournal (params: Journal) {
    return http.post(`${API_SERVER}/api/journal/update`, params)
  },

  deleteJournal (id: string) {
    return http.delete(`${API_SERVER}/api/journal/delete/${id}`)
  },

  addJournal (params: Journal) {
    return http.post(`${API_SERVER}/api/journal/add`, params)
  },

  upload (params: any) {
    return http.post(`${API_SERVER}/api/file/upload`, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
