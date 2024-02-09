import { deleteComment } from '../utils/api-requests.js';


const CommentDeleteButton = ({commentId,setCommentDeleted}) =>{

    const handleCommentDeleteClick = () =>{
        setCommentDeleted({body:'Comment deleted', optimistic: true, class: null});
        deleteComment(commentId)
        .then((data)=>{
            setCommentDeleted({body:'Comment has been deleted.', optimistic: true, class: 'pass-delete'});
        }).catch((error)=>{
            setCommentDeleted({
                body:`Status ${error.response.status} : Comment has not been deleted, refresh page to try again.`, 
                optimistic: true, 
                class: 'fail-delete'});
        });
    }

    return (
        <button className="delete-comment" onClick={handleCommentDeleteClick} >
            <span className="material-symbols-outlined">delete</span>
        </button>
    )
}

export default CommentDeleteButton;