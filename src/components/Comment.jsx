const Comment = ({comment}) => {
    return(
        <li className="comment">
            <p>comment id: {comment.comment_id}</p>
            <p>article id: {comment.article_id}</p>
            <p>article body: {comment.body}</p>
            <p>article created: {comment.created_at}</p>
            <p>article author: {comment.author}</p>
            <p>article votes: {comment.votes}</p>
        </li>
    )
}

export default Comment;