import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Loginpage from './Pages/Loginpage/Loginpage'
import Dashbord from './Pages/Dashbord/Dashbord'
import Employeelist from './Pages/Employeelist/Employeelist'

const App = () => {
  return (

    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage></Loginpage>}></Route>
          <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
          <Route path='/employee-list' element={<Employeelist></Employeelist>}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
  
}

export default App






