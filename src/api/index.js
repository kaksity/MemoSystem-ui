import axios from 'axios'
import router from '../router'
import { useLoading } from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

const baseURL = 'http://localhost:20000/api/v1'
const loader = useLoading()

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

httpClient.interceptors.request.use(
  async (config) => {
    loader.show()
    const token = localStorage.getItem('memo-system-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

httpClient.interceptors.response.use(
  async (response) => {
    loader.hide()
    return response.data
  },
  (error) => {
    if (error.response.status === 401) {
      router.push('/login')
    }
    return Promise.reject(error.response.data)
  }
)

// // set max timeout for API calls
// httpClient.defaults.timeout = 20000

export default httpClient
