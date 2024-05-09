import { getArticles } from '../utils/api-requests.js';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading.jsx';
import ErrorDisplay from './ErrorDisplay.jsx';
import ArticleListing from './ArticleListing.jsx';
import SortingArticles from './SortingArticles';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useSearchParams();
  
    useEffect(()=>{
      setIsLoading(true);

      getArticles({query}).then((data)=> {
        setArticles(data.articles);
        setIsLoading(false);
        setError(null);
      }).catch((error)=> {
        setError(error.response);
        setIsLoading(false);
      });

    },[query])
      
  return (
  <>
    { isLoading ? <Loading /> : error ? <ErrorDisplay error={error} type={'article'} /> :
    <>
    <SortingArticles />
    <ArticleListing articles={articles} />
    </>
    }
  </>
  )
}

export default ArticleList;