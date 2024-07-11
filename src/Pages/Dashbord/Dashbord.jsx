import React from 'react'
import './Dashbord.css'
import Navebar from '../../Component/Navebar/Navebar'
import Dashbordbody from '../../Component/Dashbordbody/Dashbordbody'
const Dashbord = () => {
  return (
    <div>
      <Navebar></Navebar>
      <Dashbordbody></Dashbordbody>
    </div>
  )
}

export default Dashbord