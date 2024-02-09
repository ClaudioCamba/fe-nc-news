import { getArticles } from '../utils/api-requests.js';
import { useState, useEffect } from 'react';
import Loading from './Loading.jsx';
import Error from './Error.jsx';
import SingleArticleList from './SingleArticleList';

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
            isLoading ? <Loading /> : error ? <Error log={error}/> :
            <section className="article-list">
            { articles.map((article,index)=> <SingleArticleList key={article.article_id} articleData={article} index={index}/>) }
            </section> 
        }</>)
}

export default ArticleList;