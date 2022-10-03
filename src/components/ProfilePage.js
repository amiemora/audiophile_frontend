import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
export default function Profile({user, songTitle, albumName, artistName }) {
	
	console.log(user)

    return (
    <div className='profile-container'>
       <div className='prof-header'>
            <img src="images/profile.jpg" alt="avatar" className="avatar"/>
            <h2>{user.username}</h2>
       </div>
       <h4 className='post-h4'>Posts:</h4>
       <div className='prof-post'>
           
       <div className='card-feed'>
			<h6 className='h1-test u-feed'>{user.username}</h6>
			<a href='https://open.spotify.com/'>
			<div className='play-icon'>
				<div className='circle'>
					<div className='triangle'></div>
				</div>
			</div>
			</a>
			<div className='text'>
				<p className='h1-test post-text'>Title: &nbsp; {songTitle}</p>
				<p className='h1-test post-text'>Artist: &nbsp; {artistName}</p>
				<p className='h1-test post-text'>Album: &nbsp; {albumName}</p>
			</div>
		</div>

        <div className='card-feed'>
			<h6 className='h1-test u-feed'>{user.username}</h6>
			<a href='https://open.spotify.com/'>
			<div className='play-icon'>
				<div className='circle'>
					<div className='triangle'></div>
				</div>
			</div>
			</a>
			<div className='text'>
				<p className='h1-test post-text'>Title: &nbsp; Gooey</p>
				<p className='h1-test post-text'>Artist: &nbsp; Glass Animals</p>
				<p className='h1-test post-text'>Album: &nbsp; Zaba</p>
			</div>
		</div>

        <div className='card-feed'>
			<h6 className='h1-test u-feed'>{user.username}</h6>
			<a href='https://open.spotify.com/'>
			<div className='play-icon'>
				<div className='circle'>
					<div className='triangle'></div>
				</div>
			</div>
			</a>
			<div className='text'>
				<p className='h1-test post-text'>Title: &nbsp; Gooey</p>
				<p className='h1-test post-text'>Artist: &nbsp; Glass Animals</p>
				<p className='h1-test post-text'>Album: &nbsp; Zaba</p>
			</div>
		</div>
            
       </div>
        
    </div>
    )
}