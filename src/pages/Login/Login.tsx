import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import { reqLogin } from '../../api';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';
import storageUtils from '../../utils/storageUtils'
// 登录的路由组件
const Login = () => {
  const navigate = useNavigate()
  // 判断用户是否登录
  const user = storageUtils.getUser()
  if (user) {
    return <Navigate to="/admin" />
  }

  const onFinish = async (value: any) => {
    const { username, password } = value

    const result = await reqLogin(username, password)
    // console.log('请求成功', response.data)
    if (result.status === 0) { // 登陆成功
      message.success('登录成功')

      const user = result.data
      storageUtils.saveUser(user)
      // 跳转到管理界面
      console.log('success')
      navigate('/admin', { replace: true })
    } else { // 登陆失败
      // 提示错误信息
      message.error(result.msg)
    }
  }
  const onFinishFailed = (errorInfo: any) => {

  }
  return (
    <div className="login">
      <header className='login-header'>

      </header>
      <section className='login-content'>
        <h2>欢迎</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入您的用户名!' },
            { min: 5, max: 20, message: '长度必须为6~20' }]}
            className="margin40"
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入您的密码！' }, {
              pattern: /^[0-9a-zA-Z_]{1,}$/,
              message: '只能输入字母、数字和下划线'
            }]}
            className="margin40"
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            {/* <a href="#">点我注册</a> */}
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}
/*
  1.前台表单验证
  2.收集表单输入数据
*/
export default Login