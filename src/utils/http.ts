import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

const http = axios.create()

function handleHttpInterceptors (http: AxiosInstance) {
  http.interceptors.response.use((response: AxiosResponse) => {
    return response
  }, (err: AxiosError) => {
    console.log('responseError', err)
  })

  http.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
  }, (err: AxiosError) => {
    console.log('requestError', err)
  })

  return http
}


export default handleHttpInterceptors(http)
