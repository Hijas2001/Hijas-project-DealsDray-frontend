
import React, { useState } from 'react';
import './Loginpage.css';
import { Link } from 'react-router-dom';

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

// const handleSubmit=(e)=>{
//    console.log(logindata.username);
//    console.log(logindata.password);

// }
const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Store the token in localStorage
            localStorage.setItem('token', data.token);

            // Redirect to a logged-in page
            // history.push('/dashboard'); // Replace '/dashboard' with your target route
        } else {
            alert(data.message || 'Invalid username or password');
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert('An error occurred while logging in. Please try again.');
    });
};



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
                <Link to="/dashbord"><button type="submit">Login</button></Link>
                
            </form>
        </div>
    );
};

export default Loginpage;
