import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Register from "./components/SignUp"
import Signin from "./components/SignIn"
import { useState } from "react"
import Main from "./components/LandingPage"
import NavMenu from "./components/NavMenu"
import Spotify from "./components/Spotify"
import Profile from "./components/ProfilePage"
import About from "./components/About"

const ProtectedRoute = ({ permission, children }) => {
	if (!permission) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default function Routers() {

    const [users, setUsers] = useState([])
	const [user, setUser] = useState([])
	const [post, setPost] = useState([])
	const [comments, setComment] = useState([])
	const [permission, setPermission] = useState(false)
	//const API = ''



    return (
        <BrowserRouter>
        <NavMenu />
        <Routes>
            <Route path='/login' element={<Signin setUser={setUser} setPermission={setPermission}/>}/>
            <Route path='/signup' element={<Register setPermission={setPermission}/>}/>
            <Route path="/" 
            element={
            <ProtectedRoute permission={permission}> 
            <Main setUsers={setUsers} setPost={setPost} setComment={setComment} users={users} post={post} user={user} comments={comments}/> 
            </ProtectedRoute> } />
            <Route path="/about" element={< About />} />
            <Route path="/profile" element={< Profile />} />
            <Route path="/spotify" element={<Spotify user={user} setComment={setComment}/>}/>
        </Routes>
        </BrowserRouter>
    )
}


//API={API} add it back to main & Spotify