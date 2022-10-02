import axios from 'axios'
import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Comment from './Comment'
import {useEffect} from 'react'

export default function Feed({users}) {
	const getUsers = () => {
        axios.get(`http://localhost:5250/api/Users`).then((response) => console.log(response.data))
    }

    useEffect(() => {
        getUsers()
    }, [])


	return (
		<div className='border-post'>
			<div className='post'>

			</div>
		</div>
	)
}