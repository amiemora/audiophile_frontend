import axios from 'axios'
import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Comment from './Comment'
import {useEffect, useState} from 'react'
import { data } from 'jquery'

export default function Feed() {

	const [fetchUser, setFetchUser] = useState([])
	const [feedPost, setFeedPost] = useState([])

	const getUsers = () => {
        axios.get(`http://localhost:5250/api/Users`).then((response) => setFetchUser(response.data))
		
	}

	const getPostFeed = () => {
		axios.get(`http://localhost:5250/api/post`).then((response)=>
		
		setFeedPost(response.data))
	}
	
    useEffect(() => {
        getUsers()
		getPostFeed()
    }, [])

	// console.log(fetchUser)
	

	return (
<div className='bg-image'>
	
	
	
	<div className='div-feed-container'>
	{feedPost.map((postItem)=> {
			return (
		<div key={feedPost.userId} className='card-feed'>
			<h6 className='h1-test u-feed'>AUDIOPHILE<i className="fa-solid fa-record-vinyl audio"></i></h6>
			<a href='https://open.spotify.com/'>
			<div className='play-icon'>
				<div className='circle'>
					<div className='triangle'></div>
				</div>
			</div>
			</a>
			<div  className='text'>
				<p className='h1-test post-text'>{postItem.song_title}</p>
				<p className='h1-test post-text'>{postItem.artist}</p>
				<p className='h1-test post-text'>{postItem.album}</p>
			</div>
		</div>
			)
		})}

		</div>
</div>
	
	)
}