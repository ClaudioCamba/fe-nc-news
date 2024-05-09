import { useSearchParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList.jsx';

const ArticleTopicPage = ({}) => {
    const [query, setQuery] = useSearchParams('');

    return (
        <main className='article-topic-page'>
            {
                query?.size === 0 ? <h1>All Articles</h1> : 
                <h1>Articles related to : '{ query.get('topic') }'</h1>
            }
           
            <ArticleList query={query}/>
        </main>
    )
}

export default ArticleTopicPage;