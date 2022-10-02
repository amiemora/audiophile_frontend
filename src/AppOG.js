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



<div className='post-div'>
<div className='test-post-card'>
    <div className='top'>
    </div>
    
</div>
<div>
<Card style={{ width: '18rem' }} className="post-card">
    {post.map((postItem) => {
        const idPost = postItem.PostId
        const idUser = postItem.UserId

        let user = users.filter((user) => {
            if (user.UserId == idUser) {
                return true
            } else {
                return false
            }
        })
        user = user[0]
        const allPostComments = comments.filter((comment) => {
            if (comment.PostId === idPost) {
                return true
            } else {
                return false 
            }
        })
        return (
            <ListGroup variant="flush">
            <ListGroup.Item>{user.Username} just shared a tune!</ListGroup.Item>
            <ListGroup.Item>song: {postItem.SongTitle} </ListGroup.Item>
            <ListGroup.Item>artist: {postItem.Artist} </ListGroup.Item>
            <ListGroup.Item>album: {postItem.Album} </ListGroup.Item>
            <ListGroup.Item>Go Listen: 
                <a href='https://open.spotify.com/' className='music-icon'>
                <i className="fa-brands fa-spotify go-listen"></i>
                </a>
                <a href='https://soundcloud.com/' className='music-icon'>
                <i className="fa-brands fa-soundcloud go-listen"></i> 
                </a>
                <a href='https://music.apple.com/us/listen-now?ign-itscg=20200&ign-itsct=rv_eve&mttnagencyid=b2r&mttncc=US&mttnpid=Google%20AdWords&mttnsiteid=125115&mttnsubad=mus-117459023029&mttnsubkw=ag-117459023029-ad-519622742781'  className='music-icon'>
                <i className="fa-solid fa-music go-listen"></i>  
                </a>
            </ListGroup.Item>
            <ListGroup.Item>posted at: {postItem.CreatedAt} </ListGroup.Item>
            <ListGroup.Item>Likes: {postItem.Likes} </ListGroup.Item>
            <ListGroup.Item>Comment: </ListGroup.Item>
        </ListGroup>
        </Card>
        {allPostComments.length ? (
           <div>
            {allPostComments.map((comment) => {
                console.log(comment.UserId)
                const idUser = comment.UserId
                let commenter = users.filter((user)= {
                    if (user.UserId === idUser) {
                        return true 
                    } else {
                        return false
                    }
                })
                console.log(commenter)
                return (
                    <p>
                    {commenter[0].Username}
                    <br/>
                    {comment.CommentBody}
                    <DeleteComment comment={comment} user={user}/>
                    </p>
                )
            })}
           </div>
        ) : (
            <div>No Comments.</div>
        
        )}
        <Comment API={API} user={user} post={postItem} comments={comments} />
        </div>
        )
    })}

</div>
</div>
)
}



// const navigate = useNavigate(); 
//   const getUsers = () => {
//     axios.get(`http://localhost:5250/api/Users`).then((response) => console.log(response.data))
// }

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
    getUsers()
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

// const newPost = () => {
//   let obj = {
//      UserId: UserId,
//      SongTitle: songTitle,
//      Album: albumName,
//      Artist: artistName
//   }
//   console.log(obj)
//   axios.post(`${API}/post`, obj).then((response) => {
//      navigate('/')
//   })
// }

// const deletePost = (deletedPost) => {
//   axios.delete(`${API}/post/` + deletePost.id)
//   .then((response) => {
//      setPost(post.filter(post=> post.id !== deletePost.id) )
//   })
// }


const handleOnClick = async (id) => {
  const dataAlbum = await axios.get(`${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
  console.log("song title:", dataAlbum.data.name, "  ",
  "album name:", dataAlbum.data.album.name, "  ",
  "artist name:",  dataAlbum.data.artists[0].name,
  "image: ", dataAlbum.data.album.images[0])

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
       <h1></h1>
 </div>
   )
}

export default App;
