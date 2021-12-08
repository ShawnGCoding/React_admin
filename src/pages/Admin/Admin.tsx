import React from 'react'
import storageUtils from '../../utils/storageUtils'
import { Link, Navigate } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import MyHeader from '../../components/header/Header';
import './admin.less'
import logo from '../../assets/images/bear.png'
// 管理的路由组件
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Admin = () => {
  const user = storageUtils.getUser()

  if (!user || user._id === '') {
    // 自动跳转到登录
    return <Navigate to="/login" />
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Link to="/" className="logo" >
          <img src={logo} alt="" />
          <h1>管理员后台</h1>
        </Link>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            用户管理
          </Menu.Item>
          <SubMenu key="sub1" title="商品" icon={<DesktopOutlined />}>
            <Menu.Item key="3">品类管理</Menu.Item>
            <Menu.Item key="4">商品管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="权限管理">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            订单管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <MyHeader />
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>522gbdlz小队</Footer>
      </Layout>
    </Layout>
  )
}
export default Admin