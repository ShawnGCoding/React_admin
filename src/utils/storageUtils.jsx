/*
  进行local数据存储管理的工具模块
*/
import store from 'store'
const USER_KEY = 'user_key'
const obj = {
  /*
  保存user
  读取user
  删除user
  */
  saveUser(user) {
    // localStorage.setItem(USER_KEY, JSON.stringify(user))
    store.set(USER_KEY, user)
  },
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY || {})
  },
  removeUser() {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
  }
}
export default obj