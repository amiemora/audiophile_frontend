import axios from 'axios'
import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Comment from './Comment'
import {useEffect} from 'react'
import NavMenu from './NavMenu'

export default function Feed({users}) {
	// const getUsers = () => {
    //     axios.get(`http://localhost:5250/api/Users`).then((response) => console.log(response.data))
    // }

    // useEffect(() => {
    //     getUsers()
    // }, [])


	return (
	<div className='div-feed-container'>
				<div className='card-feed'>
			<h6 className='h1-test u-feed'>username</h6>
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
		<h6 className='h1-test u-feed'>username</h6>
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
			<h6 className='h1-test u-feed'>username</h6>
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
		<h6 className='h1-test u-feed'>username</h6>
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
	)
}

{/* <img  className='post-img-feed' src="images/feed-img.png"/>
<i className="fa-solid fa-record-vinyl fa-2x audio-icon"></i>
<i className="fa-solid fa-record-vinyl fa-2x audio-icon"></i>
<h5 className='h1-test' >Username</h5>
<small className='h1-test'>Oct 14</small>

<i className="fa-regular fa-heart like"></i>
<i className="fa-regular fa-comment comment"></i>
<h3 className='h1-test' >Title: Gooey</h3>
<h3 className='h1-test'>Artist: Glass Animals</h3>
<h3 className='h1-test'>Album: Zaba</h3> */}