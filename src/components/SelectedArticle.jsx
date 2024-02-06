import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api-requests.js';
import ArticleComments from './ArticleComments.jsx';
import SelectedArticleVisual from './SelectedArticleVisual.jsx';
import Loading from './Loading.jsx';
import Error from './Error.jsx';


const SelectedArticle = () => {
    const [selectedArticle, setSelectedArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { article_id } = useParams();

    useEffect(() =>{
        setIsLoading(true)

        getArticles(article_id)
        .then((data)=>{ 
            setSelectedArticle(data.article)
            setIsLoading(false)
        }).catch((error)=> {
            setError(error.response);
            setIsLoading(false);
          });
    },[]);

    return (<>
    {isLoading ? <Loading /> : error ? <Error log={error}/> :
    <>
        <SelectedArticleVisual selectedArticle={selectedArticle}/>
        <ArticleComments />
    </>
    }</>)
    }

export default SelectedArticle;