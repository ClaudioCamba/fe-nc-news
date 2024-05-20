import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api-requests.js';
import ErrorDisplay from './ErrorDisplay.jsx';
import ArticleComments from './ArticleComments.jsx';
import SelectedArticleVisual from './SelectedArticleVisual.jsx';
import Loading from './Loading.jsx';

const SelectedArticle = () => {
    const [selectedArticle, setSelectedArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { article_id } = useParams();

    useEffect(() =>{
        setIsLoading(true)
        getArticles({article_id})
        .then((data)=>{ 
            setSelectedArticle(data.article)
            setIsLoading(false)
        }).catch((error)=> {
            setError(error.response);
            setIsLoading(false);
          });
    },[]);

    return (<>
    {isLoading ? <Loading /> : error ? 
    <ErrorDisplay error={error} type={'article'} /> : 
        <>
            <SelectedArticleVisual selectedArticle={selectedArticle}/>
            <ArticleComments />
        </>
    }
    </>)
    }

export default SelectedArticle;