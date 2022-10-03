import axios from 'axios'
import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Comment from './Comment'
import {useEffect, useState} from 'react'
import { data } from 'jquery'

export default function Feed({setPost, setComment, setUser, setUsers, comments, users, post, user}) {

	const [fetchUser, setFetchUser] = useState([])

	const getUsers = () => {
        axios.get(`http://localhost:5250/api/Users`).then((response) => setFetchUser(response.data))
		
	}

    useEffect(() => {
        getUsers()
    }, [])

	console.log(fetchUser)
	console.log()

	return (
<div className='bg-image'>
	
	
	
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

	

	<div className='users-map'>
		<p className='h1-test' >Users:  &nbsp; </p>
	{fetchUser.map((userItem)=> {
			return (
			<p className='h1-test'>{userItem.username} &nbsp; </p>
		)
	})}
	</div>
</div>
	
	)
}