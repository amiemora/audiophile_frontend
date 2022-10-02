import axios from 'axios'
import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Comment from './Comment'
export default function Feed({post, API, users, comments, setPost, username, setComment}) {

    const DeleteButton = ({user, postItem}) => {
        if (username.username === user.username) {
            return (
                <>
                <button onClick={()=> {deletePost(postItem)}} value={postItem.PostId}>
                   {" "} Delete Post
                </button>
                </>
            )
        } else {
            return <></>
        }
    }

    const deletePost = (deletedPost) => {
        axios.delete(`${API}/post/` + deletedPost.PostId).then((response) => {
            setPost(post.filter((post) => post.id !== deletedPost.PostId))
        })
    }

    const handleDelete = (deletedComment) => {
        axios.delete(`${API}/comments/` + deletedComment.CommentId).then((response) => {
            setComment(comments.filter((comments) => comments.CommentId !== deletedComment.CommentId))
        })
    }

    const DeleteComment = ({comment, user}) => {
        if (comment.UserId === user.UserId) {
            return (
                <>
                    <button onClick={()=> {handleDelete(comment)}} value={comment.CommentId}>
                        Delete 
                    </button>
                </>
            )
        } else {
            return <></>
        }
    }


    return (
        <div className='container-feed'>
			<div className='grid-div'>
				{post.map((postItem) => {
					const idPost = postItem.PostId;
					//user
					const idUser = postItem.UserId;
					let user = users.filter((user) => {
						if (user.UserId === idUser) {
							return true;
						} else {
							return false;
						}
					});
					user = user[0];
					const allPostComments = comments.filter((comment) => {
						if (comment.PostId === idPost) {
							return true;
						} else {
							return false;
						}
					});
					return (
						<div className='feed-div'>
							<DeleteButton user={user} postItem={postItem} />
							<p className='user-p'>
								{user.Username}
							</p>
							<div className='border-one'>
								<div className='border-two'>
									<h4 className='title'>
										Song: {postItem.SongTitle}
									</h4>
									<h4 className='title'>
                                        Artist: {postItem.Artist}
                                    </h4>
                                    <h4 className='title'>
                                        Album: {postItem.Album}
                                    </h4>
								</div>
							</div>
							<p> {postItem.Likes}</p>
							{allPostComments.length ? (
								<div>
									{allPostComments.map((comment) => {
										console.log(comment.UserId);
										const idUser = comment.UserId;
										let commenter = users.filter((user) => {
											if (user.UserId === idUser) {
												return true;
											} else {
												return false;
											}
										});
										console.log(commenter);
										return (
											<p>
												{commenter[0].Username}
												<br />
												{comment.CommentBody}
												<DeleteComment comment={comment} user={user} />
											</p>
										);
									})}
								</div>
							) : (
								<div>No comments currently...</div>
							)}
							<Comment
								API={API}
								user={user}
								post={postItem}
								comments={comments}
							/>
						</div>
					);
				})}
			</div>
		</div>
    )
}
