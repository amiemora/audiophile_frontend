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
       <div className="after-search" key={artist.id} onClick={()=> handleOnClick(artist.href)}>
           {artist.album.images.length ? <img className='album-img' src={artist.album.images[0].url} alt=""/> : <div>No Image</div>}
           <h3 className='song-title'> Title: {artist.name}</h3>
           <div className='form'>
            <form onSubmit={(e)=> {e.preventDefault(); handleSubmit(songTitle, albumName, artistName)}}>
              <input className='input-post' value={tracks.selectedTrack} onChange={handleSongTitle} />
              <input className='input-post' value={tracks.artist} onChange={handleArtist} />
              <input className='input-post' value={tracks.listOfTracksFromAPI} onChange={handleAlbum} />
              <input className='post-btn' type='submit' value='Post' />
            </form>
        </div>
       </div>
    
   ))
 }
 
 const [post, setPost] = ([])
 const [songTitle, setSongTitle] = ('')
 const [albumName, setAlbumName] = ('')
 const [artistName, setArtistName] = ('')
 
const handleSongTitle = (e) => {
  setSongTitle(e.target.value)
}

const handleAlbum = (e) => {
  setAlbumName(e.target.value)
}

const handleArtist = (e) => {
  setArtistName(e.target.value)
}
const handleSubmit = (songTitle, albumName, artistName) => {
 
  axios.post('http://localhost:3000/spotify',
    songTitle,
    albumName,
    artistName
  )
}


 const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: '', artist: ''});

 const handleOnClick = async (id) => {
   const dataAlbum = await axios.get(`${id}`, {
     headers: {
         Authorization: `Bearer ${token}`
     }
 })
   console.log("song title:", dataAlbum.data.name, "  ",
   "album name:", dataAlbum.data.album.name, "  ",
   "artist name:",  dataAlbum.data.artists[0].name)
   setTracks({
    selectedTrack: dataAlbum.data.name,
    listOfTracksFromAPI: dataAlbum.data.album.name,
    artist: dataAlbum.data.artists[0].name
  })
  return (
    <div>
      <h2>{tracks}</h2>
    </div>
  )
 }



 console.log(tracks)

 

//  setSongTitle(dataAlbum.data.name)
//  setAlbumName(dataAlbum.data.album.name)
//  setArtistName(dataAlbum.data.artists[0].name)

// const postSearch = async (id) => {
  
//   const {data} = await axios.get(`https://api.spotify.com/v1/search/track/${id}`, {
//       headers: {
//           Authorization: `Bearer ${token}`
//       }
//   })
//   //4yvcSjfu4PC0CYQyLy4wSq
//   console.log(data)
  
//   setPost(data.tracks.items)
// }
 

    return (
      <div className="container-spotify">
        <h1 className='h1-signin'>Start sharing music by logging into spotify!</h1>
      {!token ?
      <a  className='h1-signin' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <a className='signup-link' onClick={logout}>Logout of Spotify</a>}
            <form onSubmit={searchArtists}>
          <input className='input-signin' type="text" placeholder='Search a Song Title' onChange={e => setSearchKey(e.target.value)}/>
          <button className='sign-in-btn-search' type={"submit"}>Search</button>
      </form>
      <h1 className='post-directions' >Click on an album cover to start a post!</h1>
      {renderArtists()}
      <div>
        
      </div>
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