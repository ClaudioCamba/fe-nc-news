import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getArticles } from '../utils/api-requests.js';
import Navigation from './Navigation.jsx';
import ArticleList from './ArticleList.jsx';
import ArticlePage from '../pages/ArticlePage.jsx';
import Loading from './Loading.jsx';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setIsLoading(true);
    getArticles()
    .then((data)=>{
      setArticles(data.articles);
      setIsLoading(false);
      setError(null);
    }).catch((error)=>{
      setError(error.response.data.msg);
      setIsLoading(false);
    });
  },[])
 

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<main className='article-list-page'>
        {isLoading ? <Loading /> : 
        error ? <h1 className='error'>{error}</h1> : <ArticleList articles={articles} /> }
        </main>} />

        <Route path="/article/:article_id" element={ <ArticlePage /> } />
      </Routes>
    </>
  )
}

export default App



