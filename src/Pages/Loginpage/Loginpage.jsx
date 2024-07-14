
import React, { useState } from 'react';

const Loginpage = () => {
    const [logindata, setLoginData] = useState({
        username: "",
        password: ""
    })

    const logngHandler = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setLoginData({
            ...logindata,
            [name]: value
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("login page", logindata);

        let responseData; // Declaring a variable to store response data

        // Sending a POST request using the fetch API
        await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logindata), // Converting form data to JSON string
        })
            .then((response) => response.json()) // Parsing response JSON
            .then((data) => responseData = data); // Storing response data


        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/dashbord");
        }
        else {
            alert(responseData.error)
        }
    }



    return (

            <div className="login-container  min-h-screen  flex items-center justify-center ">
                <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                onChange={logngHandler}
                                value={logindata.username}
                                type="text"
                                id="username"
                                name="username"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                onChange={logngHandler}
                                value={logindata.password}
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default Loginpage;
