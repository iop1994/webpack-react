import Axios from 'axios'
// https://www.jianshu.com/p/43fc396b2fa7
// request拦截器
Axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
Axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
