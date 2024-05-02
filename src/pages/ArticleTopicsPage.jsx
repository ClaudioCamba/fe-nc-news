import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import ArticleList from '../components/ArticleList.jsx';

const ArticleTopicPage = ({}) => {
    const [query, setQuery] = useSearchParams('');
 
    return (
        <main className='article-topic-page'>
            <h1>Articles related to : '{ query.get('topic') }'</h1>
            <ArticleList query={query}/>
        </main>
    )
}

export default ArticleTopicPage;