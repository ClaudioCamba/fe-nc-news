import { useContext, useState } from 'react';
import { SignedInUserContext } from '../contexts/SignedInUser.jsx';
import { utcToTimeAgo } from '../utils/time-formatter.js';
import CommentDeleteButton from './CommentDeleteButton.jsx';


    
const Comment = ({comment}) => {
    const { signedUser } = useContext(SignedInUserContext);
    const [commentDeleted, setCommentDeleted] = useState({body:'Deleting comment...', optimistic: false, class: null});

    return(<>
        { commentDeleted.optimistic ? <li className={`comment ${commentDeleted.class}`}><p>{commentDeleted.body}</p></li> :
            <li className="comment">
            <p>comment id: {comment.comment_id ? comment.comment_id : null}</p>
            <p>article id: {comment.article_id? comment.article_id : null}</p>
            <p>comment body: {comment.body? comment.body : null}</p>
            <p>comment created: {comment.created_at? utcToTimeAgo(comment.created_at) : null}</p>
            <p>comment author: {comment.author? comment.author : null}</p>
            <p>comment votes: {comment.votes}</p>
            {
                signedUser.username === comment.author &&  comment.comment_id ? 
                <CommentDeleteButton commentId={comment.comment_id} setCommentDeleted={setCommentDeleted}/>
                : null
            }
        </li>
       }
</>)
}

export default Comment;