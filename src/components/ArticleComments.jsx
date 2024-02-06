import { useState } from "react";

const ArticleComments = ({comments}) => {
    return (<section className="comments">
        <h3 className="title">Comments</h3>
        <ul  className="list">
            {
                comments.map((comment)=>{
                    return <li key={comment.comment_id} className="comment">
                        <p>comment id: {comment.comment_id}</p>
                        <p>article id: {comment.article_id}</p>
                        <p>article body: {comment.body}</p>
                        <p>article created: {comment.created_at}</p>
                        <p>article author: {comment.author}</p>
                        <p>article votes: {comment.votes}</p>
                    </li>
                })
            }
        </ul>
    </section>)
}

export default ArticleComments;