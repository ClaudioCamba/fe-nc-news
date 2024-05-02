import { getArticles } from '../utils/api-requests.js';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading.jsx';
import Error from './Error.jsx';
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
    <SortingArticles />
    { isLoading ? <Loading /> : 
    error ? <Error log={error}/> : 
    <ArticleListing articles={articles} />}
  </>
  )
}

export default ArticleList;