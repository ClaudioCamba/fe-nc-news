import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import { SignedInUserProvider } from '../contexts/SignedInUser.jsx';
import Navigation from '../components/Navigation.jsx';
import ArticleListPage from './ArticleListPage.jsx';
import ArticlePage from './ArticlePage.jsx';
import ArticleTopicPage from './ArticleTopicsPage.jsx';
import InvalidPathPage from './InvalidPathPage.jsx';

function App() {

  return (
    <SignedInUserProvider>
    <Navigation />
      <Routes>
        <Route path="/" element={ <ArticleListPage /> }/>
        <Route path="/articles" element={ <ArticleTopicPage /> } />
        <Route path="/article/:article_id" element={ <ArticlePage /> } />
        <Route path="/*" element={ <InvalidPathPage /> }/>
      </Routes>
    </SignedInUserProvider>
  )
}

export default App



