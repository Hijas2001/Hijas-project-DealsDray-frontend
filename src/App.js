import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loginpage from './Pages/Loginpage/Loginpage'
import Dashbord from './Pages/Dashbord/Dashbord'
import Employeelist from './Pages/Employeelist/Employeelist'
import Navbar from './Component/Navebar/Navebar'
import Createemployee from './Pages/Createemployee/Createemployee'



const App = () => {
  return (

    <div className='absolute inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Loginpage></Loginpage>}></Route>
          <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
          <Route  path='/employee-list' element={<Employeelist></Employeelist>}></Route>
          <Route  path='/createemployee' element={<Createemployee></Createemployee>}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  )

}

export default App






