import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import { SignedInUserProvider } from '../contexts/SignedInUser.jsx'
import Navigation from '../components/Navigation.jsx';
import ArticleListPage from './ArticleListPage.jsx';
import ArticlePage from './ArticlePage.jsx';


function App() {
  return (
    <SignedInUserProvider>
    <Navigation />
      <Routes>
        <Route path="/" element={ <ArticleListPage /> }/>
        <Route path="/article/:article_id" element={ <ArticlePage /> } />
      </Routes>
    </SignedInUserProvider>
  )
}

export default App



