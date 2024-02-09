import { getArticles } from '../utils/api-requests.js';
import { useState, useEffect } from 'react';
import Loading from './Loading.jsx';
import Error from './Error.jsx';
import ArticleListing from './ArticleListing.jsx';
import SortingArticles from './SortingArticles';

const ArticleList = ({query}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
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
    },[])
      
  return (<>{
            isLoading ? <Loading /> : 
            error ? <Error log={error}/> : 
            <>
              <SortingArticles articles={articles} setArticles={setArticles}/>
              <ArticleListing articles={articles} />
            </>
        }</>)
}

export default ArticleList;