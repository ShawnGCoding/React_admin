/* 
  能发送异步ajax请求的函数模块
  封装axios库
  函数的返回值是promise对象
  1.优化：统一处理请求异常？
    在外层包一个自己创建的promise对象
    在请求出错时，不去reject(error)，而是显示错误提示
*/
import axios from 'axios'
import { message } from 'antd'
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    // 1.执行异步ajax请求
    let promise
    if (type === 'GET') {
      promise = axios.get(url, { // 配置对象
        params: data// 指定请求参数
      })
    } else { // 发POST请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      message.error('请求出错了:', error)
    })
    // 2.如果成功了，调用resolve(value)

    // 3.如果失败了,不调用reject(reason),而是提示异常信息
  })


}

// 请求登录接口
// ajax('/login', { username: 'Tom', password: 12345 }, 'POST')
//   .then()
// 添加用户
// ajax('/manage/user/add', { username: 'Tom', password: '12345', phone: '13712229384' }, 'POST').then()