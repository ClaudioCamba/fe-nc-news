import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignedInUserProvider } from '../contexts/SignedInUser.jsx';
import { getTopics } from '../utils/api-requests.js';
import Navigation from '../components/Navigation.jsx';
import ArticleListPage from './ArticleListPage.jsx';
import ArticlePage from './ArticlePage.jsx';
import ArticleTopicPage from './ArticleTopicsPage.jsx';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
    .then((data)=>{
      setTopics(data.topics);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);

  return (
    <SignedInUserProvider>
    <Navigation topics={topics}/>
      <Routes>
        <Route path="/" element={ <ArticleListPage /> }/>
        <Route path="/articles/" element={ <ArticleTopicPage /> } />
        <Route path="/article/:article_id" element={ <ArticlePage /> } />
      </Routes>
    </SignedInUserProvider>
  )
}

export default App



