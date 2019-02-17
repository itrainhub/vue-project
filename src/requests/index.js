import axios from 'axios'
import { Indicator, Toast } from 'mint-ui';

const ajax = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

ajax.interceptors.request.use(config => {
  Indicator.open()

  return config
})

ajax.interceptors.response.use(res => {
  Indicator.close()

  if (res.status === 200) 
    return res.data
  else
    Toast({
      message: '网络异常，请稍后重试',
      duration: 1000
    })
})

export const getSwiper = () => {
  return ajax.get('/photos?albumId=8')
}