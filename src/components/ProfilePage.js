import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
export default function Profile() {


    return (
    <div className='profile-container'>
       <div className='prof-header'>
            <img src="images/profile.jpg" alt="avatar" className="avatar"/>
            <h2>Username</h2>
       </div>
       <h4 className='post-h4'>Posts:</h4>
       <div className='prof-post'>
           
            <Card style={{ width: '18rem' }} className="post-card">
            <ListGroup variant="flush">
                <ListGroup.Item>username just shared a tune!</ListGroup.Item>
                <ListGroup.Item>song: </ListGroup.Item>
                <ListGroup.Item>artist: </ListGroup.Item>
                <ListGroup.Item>Go Listen: <i class="fa-brands fa-spotify"></i>
                <i class="fa-brands fa-soundcloud"></i><i class="fa-solid fa-music"></i></ListGroup.Item>
                <ListGroup.Item>album: </ListGroup.Item>
                <ListGroup.Item>genre: </ListGroup.Item>
                <ListGroup.Item>posted at: </ListGroup.Item>
                <ListGroup.Item>Likes: </ListGroup.Item>
                <ListGroup.Item>Comment: </ListGroup.Item>
            </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }} className="post-card">
            <ListGroup variant="flush">
                <ListGroup.Item>username just shared a tune!</ListGroup.Item>
                <ListGroup.Item>song: </ListGroup.Item>
                <ListGroup.Item>artist: </ListGroup.Item>
                <ListGroup.Item>Go Listen: <i class="fa-brands fa-spotify"></i>
                <i class="fa-brands fa-soundcloud"></i><i class="fa-solid fa-music"></i></ListGroup.Item>
                <ListGroup.Item>album: </ListGroup.Item>
                <ListGroup.Item>genre: </ListGroup.Item>
                <ListGroup.Item>posted at: </ListGroup.Item>
                <ListGroup.Item>Likes: </ListGroup.Item>
                <ListGroup.Item>Comment: </ListGroup.Item>
            </ListGroup>
            </Card>
            
       </div>
        
    </div>
    )
}