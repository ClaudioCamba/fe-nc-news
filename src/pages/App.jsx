import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import ArticleListPage from './ArticleListPage.jsx';
import ArticlePage from './ArticlePage.jsx';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ArticleListPage /> }/>
        <Route path="/article/:article_id" element={ <ArticlePage /> } />
      </Routes>
    </>
  )
}

export default App



