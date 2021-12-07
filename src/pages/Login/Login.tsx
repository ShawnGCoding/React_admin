import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
// 登录的路由组件
const Login = () => {
  const onFinish = (value: any) => {
    console.log(value)
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
            { min: 6, max: 20, message: '长度必须为6~20' }]}
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
            <a href="">点我注册</a>
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