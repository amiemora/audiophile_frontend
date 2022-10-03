import React from "react"
import Feed from "./Feed.js";
import { useEffect } from "react";
import axios from "axios";

export default function Main({setPost, setComment, setUsers, comments, users, post, user, API}) {


    const getUsers = () => {
        axios.get(`http://localhost:5250/api/Users`).then((response) => console.log(response.data))
    }

    useEffect(() => {
        getUsers()
    }, [])

    console.log(users)

    return (
        <Feed setUsers={setUsers} post={post} username={user} user={user} users={users} comments={comments} API={API} setComment={setComment} /> 
    )

}