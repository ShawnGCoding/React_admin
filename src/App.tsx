import React from "react";
import { Route, Routes } from 'react-router-dom'
import './App.less'
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
/*
应用的根组件
*/

const App = () => {

  return (
    // Routes代替Switch
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
    </Routes>
  )
}
export default App