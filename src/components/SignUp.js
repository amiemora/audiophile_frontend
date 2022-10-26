import axios from 'axios';
import React from 'react'
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function SignUp({setUsers, setPermission}) {
    const navigate = useNavigate();

    //const API = ''

    const[username, setUsername] = useState("")
    const[name, setName] = useState("")
    const[password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // https://wms-me.com/api/

    // http://localhost:5250/api/

    const handleRegister = () => {
        
        console.log(name, username, password)
        const data = {
            Username: username,
            Name: name,
            Password: password,
        }
        axios.post(`https://wms-me.com/api/Auth/register`, data).then((result)=> 
            {
               
                alert("You have successfully registered. Login to access your account.")
            })
            .catch((error)=> {
                console.log(error)
            })
    }

    return (
        <div className='register-div'>
                <h1 className='title-signin'>AUDIOPHILE <i className="fa-solid fa-record-vinyl audio"></i> </h1>
                <h1 className='h1-signin'>Register</h1>
            <form onSubmit={(e) => {e.preventDefault(); handleRegister(username,name,password)}}>
                <input className='input-signin' name='username' type='text' placeholder='username required' onChange={handleUsername} />
                <input  className='input-signin' name='name' type='text' placeholder='name required' onChange={handleName} />
                <input className='input-signin' name='password' type='text' placeholder='password required' onChange={handlePassword}/>
                <input className='sign-in-btn' type='submit' value='Register'/>
            </form>
            <div>
                <h5>
                    <Link type='submit' to={'/login'}>
                        Login
                    </Link>
                </h5>
            </div>
        </div>
    )
}