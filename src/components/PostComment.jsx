import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SignedInUserContext } from '../contexts/SignedInUser.jsx';
import { postComment } from '../utils/api-requests.js';
import CommentForm from './CommentForm.jsx';

// post request comment 
const PostComment = ({setArticleComments}) => {
    const [feedback, setFeedback] = useState({body:'', class:''});
    const [disableForm, setDisableForm] = useState(false)
    const { user,setUser } = useContext(SignedInUserContext);
    const { article_id } = useParams();
    
    const handlePostComment = (commentValue) => {
        const optimisticComment = {
            body: commentValue,
            author: user.username,
            username: user.username,
            votes: 0,
            created_at: Date.now()
        }

        setArticleComments((allComments)=>{
            return [optimisticComment,...allComments];
        });

        postComment(article_id,optimisticComment)
        .then((data)=>{
            setFeedback({body:'Your comment has been posted', class:'valid'});
            setDisableForm(false)
        }).catch((error)=>{
            setFeedback({body:'Status '+error.response.status+' : Comment has not been posted', class:'invalid'});
            setDisableForm(false)
        });
    }

    return (
        <CommentForm 
            handlePostComment={handlePostComment} 
            setFeedback={setFeedback}
            feedback={feedback}
            setDisableForm={setDisableForm}
            disableForm={disableForm}
        />
    )
}

export default PostComment;