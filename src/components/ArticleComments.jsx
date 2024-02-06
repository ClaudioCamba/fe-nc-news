import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api-requests.js';
import Comment from './Comment.jsx';
import Loading from './Loading.jsx';
import Error from './Error.jsx';

const ArticleComments = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articleComments, setArticleComments] = useState([]);
    const [error, setError] = useState(null);
    const { article_id } = useParams();

    useEffect(() =>{
        setIsLoading(true)
        getComments(article_id)

        .then((data)=>{ 
            setArticleComments(data.comments)
            setIsLoading(false)
        }).catch((error)=> {
            setError(error.response);
            setIsLoading(false);
          });
    },[]);

    return (<section className="comments">
        <h3 className="title">Comments</h3>
        {isLoading ? <Loading /> : error ? <Error log={error}/> :
        <ul  className="list">
            { articleComments.map((comment)=> <Comment key={comment.comment_id} comment={comment} />)}
        </ul>}
    </section>)
}

export default ArticleComments;