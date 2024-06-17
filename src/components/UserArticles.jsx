import { useContext, useEffect, useState } from 'react';
import { SignedInUserContext } from '../contexts/SignedInUser.jsx';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../utils/api-requests.js';
import ArticleListing from './ArticleListing.jsx';

const UserArticles = () => {
    const { signedUser } = useContext(SignedInUserContext);
    const [ userArticles, setUserArticles ] = useState([]);
    const [query, setQuery] = useSearchParams();
  
    useEffect(()=>{
      getArticles({query}).then((data)=> {
        const matchingArticles = data.articles.filter((article) => article.author === signedUser.username);
        setUserArticles(matchingArticles);
      }).catch((error)=> {
        console.log(error)
      });
    },[signedUser])
    
    return (<>
        <h3>Articles by {signedUser.username}</h3>
        <ArticleListing articles={ userArticles }  />
    </>)
};

export default UserArticles;