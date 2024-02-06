import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getArticles } from '../utils/api-requests.js';
import Navigation from './Navigation.jsx';
import ArticleList from './ArticleList.jsx';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    getArticles()
    .then((data)=>{
      setArticles(data.articles);
      setIsLoading(false);
    })
  },[])
 

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ArticleList isLoading={isLoading} articles={articles} />} />
        <Route path="/article" element={<h1>Article test</h1>} />
      </Routes>
    </>
  )
}

export default App



