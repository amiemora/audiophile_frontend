import React from 'react'
import axios from "axios"
import { useState } from "react"
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"

export default function SignIn({setUser, setPermission}) {
    const navigate = useNavigate();
    //const API = ''

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
	const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (username, name,  password) => {
	
		axios
			.post(`http://localhost:5250/api/Auth/login`, {
				Username: username,
                Name: name,
				Password: password
				
			})
			// catch error if the password is invalid
			.catch((error) => {
				if (error) {
					alert("Email or password does not match records");
				}
			})
			.then((response) => {
				setUser(response.data); // if password is valid setUser state to the value send from the backend
				console.log(response.data);
				if (Object.keys(response.data).length === 0) {
					// by default the backend will send an empty object to indicate that the password is invalid or username is invalid
					// by comparing the return key value with the backend logic
					// the backend sends empty object with key value 0 or 2
					alert("Your password is not valid");
				} else {
					setPermission(true);
					// we have declared setPermission in the AppGateway to allow gateway to show the main content after the user auth was completed and change the state to true
					navigate("/feed");
					// navigate is a router function that will navigate to the route
					// declared as an argument
				}
			});
	};

    return (
    <div className='div-signin outer'>
      <div className='inner'>
      <h1 className='title-signin'>AUDIOPHILE <i className="fa-solid fa-record-vinyl audio"></i> </h1>
        <h1 className='h1-signin'>Sign In</h1>
        <form className='signin-form' onSubmit={(e) => {e.preventDefault(); handleLogin(username,name,password)}}>
            <input className='input-signin' name='username' type='text' placeholder='Username' onChange={handleUsername}/>
            <input className='input-signin' name='name' type='text' placeholder='Name' onChange={handleName}/>
            <input className='input-signin' name='password' type='password' placeholder='Password' onChange={handlePassword}/>
            <input className='sign-in-btn' type='submit' value='Sign In'/>
        </form>
      </div>
        <div>
            <p className='signup-link'>
                No account? 
                <Link type='submit' to={'/signup'}>
                    Sign Up
                </Link>
            </p>
        </div>
        </div>
    )
}