import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import $ from 'jquery';
export default function Feed() {




    return (
    <div className='post-div'>
            <Card style={{ width: '18rem' }} className="post-card">
        <ListGroup variant="flush">
            <ListGroup.Item>username just shared a tune!</ListGroup.Item>
            <ListGroup.Item>song: </ListGroup.Item>
            <ListGroup.Item>artist: </ListGroup.Item>
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
    )
}

