import axios from 'axios'
export function request(config) {
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 4000
    })

    // 拦截器
    // 请求拦截
    instance.interceptors.request.use(config =>{
      // 做一些拦截之后的操作
      return config
    }, err =>{
      console.log(err);
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      //返回一些里面的数据
      return res.data
    }, err => {
      console.log(err);
    })

    return instance(config)
}
