import axios from 'axios'
import react from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Comment ({API, user, post, comments}) {
    const navigate = useNavigate()

    const [CommentBody, setCommentBody] = useState("")

    const handleNewComment = (e) => {
        setCommentBody(e.target.value)
    }

    // const newComment = () => {
    //     let obj = {
    //         PostId: PostId,
    //         UserId: UserId,
    //         CommentBody: CommentBody

    //     }

    //     axios.post(`${API}/comments`, obj).then((response) => {
    //         navigate('/feed')
    //     })
    // }

//     <form onSubmit={(e)=> {e.preventDefault(); newComment()}}>
//     <input onChange={handleNewComment} type='text' value={CommentBody}/>
//     <button>
//         Comment
//     </button>
// </form>

    return (
        <>
         <h2>Comment</h2>
        </>
    )
}