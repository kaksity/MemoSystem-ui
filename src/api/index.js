import axios from 'axios'
import router from '../router'

const baseURL = 'http://localhost:3333/api/v1'

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

httpClient.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem('memo-system-token'))
    if (token) {
      const { token: accessToken } = token
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

httpClient.interceptors.response.use(
  async (response) => {
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
