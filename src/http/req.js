import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
// 拦截器

// 请求拦截器
axios.interceptors.request.use((cfg) => {
  let token = localStorage.getItem('token')
  // 判断有token 携带发送
  if (token) {
    // 请求携带token数据
    cfg.headers.authorzation = token
  }
  // 打开加载状态提示
  Toast.loading({
    message: '加载中...',
    forbidClick: true
  })
  // console.log('请求拦截器');
  return cfg
})
// 响应拦截器
axios.interceptors.response.use((res) => {
  // 关闭提示
  Toast.clear()
  // console.log('响应拦截器');
  if(res.data.code === 0 && res.data.token){
    console.log(res);
    localStorage.setItem('token',res.data.token)
    console.log(localStorage.getItem('token'));
  }
  return res.data
})

export default axios
