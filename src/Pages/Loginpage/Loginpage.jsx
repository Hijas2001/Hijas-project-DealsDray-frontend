
import React, { useState } from 'react';
import './Loginpage.css';

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



const handleSubmit =  async(e) => {
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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={logngHandler}
                        value={logindata.username}
                        type="text"
                        id="username"
                        name="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={logngHandler}
                        value={logindata.password}
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
               <button type="submit">Login</button>
                
            </form>
        </div>
    );
};

export default Loginpage;
