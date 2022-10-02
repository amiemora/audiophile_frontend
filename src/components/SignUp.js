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

    const handleRegister = () => {
        
        console.log(name, username, password)
        const data = {
            Username: username,
            Name: name,
            Password: password,
        }
        axios.post(`http://localhost:5250/api/Auth/register`, data).then((result)=> 
            {
                const dt = result.data
                alert(dt.statusMessage)
            })
            .catch((error)=> {
                console.log(error)
            })
    }
    // const handleRegister = (username, name, password) => {
    //     axios.post(`http://localhost:5250/api/Auth/register`, {
    //         Username: username,
    //         Name: name,
    //         Password: password,
    //     })
    //     .then((response) => {
    //         setUsers(response.data)
    //         console.log(response.data)
    //         navigate('/login)')
    //     })
    // }

    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault(); handleRegister(username,name,password)}}>
                <input name='username' type='text' placeholder='username required' onChange={handleUsername} />
                <input name='name' type='text' placeholder='name required' onChange={handleName} />
                <input name='password' type='text' placeholder='required' onChange={handlePassword}/>
                <input type='submit' value='Register'/>
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