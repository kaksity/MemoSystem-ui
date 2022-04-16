import axios from 'axios'
import router from '../router'
import Nprogress from 'nprogress'

const baseURL = 'http://localhost:20000/api/v1'

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

httpClient.interceptors.request.use(
  async (config) => {
    Nprogress.start()
    const token = localStorage.getItem('memo-system-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // console.log(config.url)
    return config
  },
  (error) => Promise.reject(error)
)

httpClient.interceptors.response.use(
  async (response) => {
    Nprogress.done()
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
