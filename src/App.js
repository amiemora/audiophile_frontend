import './App.css'
import React from 'react'
import SignIn from './components/SignIn'
import Feed from './components/Feed'
import About from './components/About'
import NavMenu from './components/NavMenu'
import Profile from './components/ProfilePage'
import Spotify from './components/Spotify'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const data = [
    {value: 1, name: 'A'},
    {value: 2, name: 'B'},
    {value: 3, name: 'C'},
]

  return (
  
    <BrowserRouter>
      <NavMenu />
      <div className="container">
    
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
