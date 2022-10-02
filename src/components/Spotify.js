import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router-dom'

export default function Spotify() {
   const navigate = useNavigate(); 

   const CLIENT_ID = "30ca677f35a94ffab96ce89f7033806a"
   const REDIRECT_URI = "http://localhost:3000/spotify"
   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
   const RESPONSE_TYPE = "token"
 
   const [token, setToken] = useState("")
 
   useEffect(() => {
     const hash = window.location.hash
     let token = window.localStorage.getItem("token")
 
     if (!token && hash) {
         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
 
         window.location.hash = ""
         window.localStorage.setItem("token", token)
     }
 
     setToken(token)
 
 }, [])
 
 const logout = () => {
   setToken("")
   window.localStorage.removeItem("token")
 }
 
 const [searchKey, setSearchKey] = useState("")
 const [artists, setArtists] = useState([])
 
 const searchArtists = async (e) => {
   e.preventDefault()
   const {data} = await axios.get("https://api.spotify.com/v1/search", {
       headers: {
           Authorization: `Bearer ${token}`
       },
       params: {
           q: searchKey,
           type: "track"
       }
   })
   //4yvcSjfu4PC0CYQyLy4wSq
   console.log(data)
   
   setArtists(data.tracks.items)
 }
 
 const renderArtists = () => {
   return artists.map(artist => (
       <div key={artist.id} onClick={()=> handleOnClick(artist.href)}>
           {artist.album.images.length ? <img width={"25%"} src={artist.album.images[0].url} alt=""/> : <div>No Image</div>}
           {artist.name}
       </div>
   ))
 }
 
 
 const [songTitle, setSongTitle] = ('')
 const [albumName, setAlbumName] = ('')
 const [artistName, setArtistName] = ('')
 
 const handleTitle = (e) => {
   setSongTitle()
 }

 const handleAlbum = (e) => {
   setAlbumName()
 }

 const handleArtist = (e) => {
   setArtistName()
 }

//  const newPost = () => {
//    let obj = {
//       UserId: userEvent.UserId,
//       SongTitle: songTitle,
//       Album: albumName,
//       Artist: artistName
//    }
//    console.log(obj)
//    axios.post(`${API}/post`, obj).then((response) => {
//       navigate('/feed')
//    })
//  }

//  const deletePost = (deletedPost) => {
//    axios.delete(`${API}/post/` + deletePost.id)
//    .then((response) => {
//       setPost(post.filter(post=> post.id !== deletePost.id) )
//    })
//  }


 const handleOnClick = async (id) => {
   const dataAlbum = await axios.get(`${id}`, {
     headers: {
         Authorization: `Bearer ${token}`
     }
 })
   console.log("song title:", dataAlbum.data.name, "  ",
   "album name:", dataAlbum.data.album.name, "  ",
   "artist name:",  dataAlbum.data.artists[0].name)
 
 }
 
 

    return (
      <div className="container">
      {!token ?
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={"submit"}>Search</button>
          <h1>{renderArtists()}</h1>
      </form>
        
  </div>
    )
}






// const [selectedValue, setSelectedValue] = useState("")

{/* <div>
<select value={selectedValue} onChange={event => setSelectedValue(event.target.value)}>
{data.data.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
</select>
<h1>{selectedValue}</h1>
</div> */}