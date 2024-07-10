import React from 'react'
import Loginpage from './Pages/Loginpage/Loginpage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashbord from './Pages/Dashbord/Dashbord'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage></Loginpage>}></Route>
          <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App






