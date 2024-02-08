const Comment = ({comment}) => {
    return(
        <li className="comment">
            <p>comment id: {comment.comment_id ? comment.comment_id: null}</p>
            <p>article id: {comment.article_id? comment.article_id: null}</p>
            <p>comment body: {comment.body? comment.body: null}</p>
            <p>comment created: {comment.created_at? comment.created_at: null}</p>
            <p>comment author: {comment.author? comment.author: null}</p>
            <p>comment votes: {comment.votes}</p>
        </li>
    )
}

export default Comment;