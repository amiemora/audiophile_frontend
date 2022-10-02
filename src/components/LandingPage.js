import React from "react"
import Feed from "./Feed.js";
import { useEffect } from "react";
import axios from "axios";

export default function Main({setPost, setComment, setUsers, comments, users, post, user, API}) {

    const getUsers = () => {
        axios.get(`${API}/users`).then((response) => setUsers(response.data))
    }

    const getPosts = () => {
        axios.get(`${API}/post`).then((response) => setPost(response.data))
    }

    const getComments = () => {
        axios.get(`${API}/comments`).then((response) => setComment(response.data))
    }

    useEffect(() => {
        getUsers()
        getPosts()
        getComments()
    },[])

    return (
        <Feed post={post} username={user} users={users} comments={comments} API={API} setComment={setComment} />
    )

}