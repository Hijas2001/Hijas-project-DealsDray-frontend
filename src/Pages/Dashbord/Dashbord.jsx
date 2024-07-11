import React from 'react'
import './Dashbord.css'
import Navebar from '../../Component/Navebar/Navebar'
import Dashbordbody from '../../Component/Dashbordbody/Dashbordbody'
const Dashbord = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" >
      <Navebar></Navebar>
      <Dashbordbody></Dashbordbody>
    </div>
  )
}

export default Dashbord