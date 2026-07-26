import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Home/Login.jsx'
import SignUp from './Home/SignUp.jsx'
import Dashboard from './Home/Dashboard.jsx'
import SendMoney from './Balance/SendMoney.jsx'
import History from './Balance/History.jsx'



const App = () => {
  return (<>
   
 <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/withdraw" element={<SendMoney />} />
    <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  
 </> )
}

export default App
