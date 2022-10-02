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