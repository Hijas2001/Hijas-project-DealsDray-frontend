// import React from 'react'
// import './Navebar.css'
// const Navebar = () => {
//   return (
//     <div>Navebar</div>
//   )
// }

// export default Navebar

import React from 'react';
import { Link } from 'react-router-dom';
import './Navebar.css'

const Navbar = () => {
    const handleLogout = () => {
        // Clear token or any authentication data
        localStorage.removeItem('token');
        // Redirect to login page
        window.location.href = '/';
    };
    if (window.location.pathname === '/') {
        return null;
      }

    return (

        <div className="container mx-auto">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-white text-xl font-bold">Logo</h1>
            </div>
            <ul className="flex items-center gap-7 space-x-4">
              <li>
                <Link
                  to="/dashbord"
                  className="text-white hover:text-gray-300 transition duration-300"
                //   activeClassName="text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/employee-list"
                  className="text-white hover:text-gray-300 transition duration-300"
                //   activeClassName="text-gray-300"
                >
                  Employee List
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-white hover:text-gray-300 transition duration-300"
                //   activeClassName="text-gray-300"
                >
                  Hukum Gupta
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>

    );
};

export default Navbar;


