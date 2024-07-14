import React from 'react'
import data from "../Employeelist/assets/data"
import { FcSearch } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Employeelist = () => {
  return (
    <div className="container mx-auto mt-10 ">


      <div className="flex items-center border border-gray-300 rounded-md shadow-sm mb-8">
        <Link to="/createemployee">
          <div className="bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-2 px-4 rounded inline-block mt-4">
            Create Employee
          </div>
        </Link>
        <input
          className="w-74  ml-auto py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search..."
        />
        <button
          type="button"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
        >
          <FcSearch className="h-5 w-5" />
        </button>
      </div>




      <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="bg-white  shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center">
              <img src={item.image} alt="Profile" className="w-32 h-32 object-cover rounded-full" />
            </div>
          <div className='flex'>
        <div >
            <div className="mt-4">
              <p className="text-lg font-bold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600">{item.designation}</p>
              <p className="text-sm text-gray-600">{item.email}</p>
              <p className="text-sm text-gray-600">{item.mobile}</p>
              <p className="text-sm text-gray-600">{item.gender}</p>
              <p className="text-sm text-gray-600">{item.course}</p>
            </div>
        </div>
        <div>
            <div className="flex flex-col space-x-4 m-5 ">
              <button className="bg-blue-500 hover:bg-blue-700 w-24 text-white font-bold py-2 px-4 m-6 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 w-24 text-white font-bold py-2 px-4 ml-6 rounded">
                Delete
              </button>
            </div>
        </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Employeelist