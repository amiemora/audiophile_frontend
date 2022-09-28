import './App.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SignIn from './components/SignIn'
import Feed from './components/Feed'
import About from './components/About'
import NavMenu from './components/NavMenu'
import Profile from './components/ProfilePage'
import Spotify from './components/Spotify'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const CLIENT_ID = "30ca677f35a94ffab96ce89f7033806a"
  const REDIRECT_URI = "http://localhost:3000"
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
          type: "artist"
      }
  })

  setArtists(data.artists.items)
}

const renderArtists = () => {
  return artists.map(artist => (
      <div key={artist.id}>
          {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
          {artist.name}
      </div>
  ))
}


  const data = [
    {value: 1, name: 'A'},
    {value: 2, name: 'B'},
    {value: 3, name: 'C'},
]

  return (
  
    <BrowserRouter>
      <NavMenu />
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
        <Routes>
          <Route path="/" element={< Feed  />} />
          <Route path="/about" element={< About />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/spotify" element={<Spotify data={data}/>}/>
          <Route path="/signin" element={< SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
