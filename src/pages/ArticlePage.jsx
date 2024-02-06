import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles, getComments } from '../utils/api-requests.js';
import SelectedArticle from '../components/SelectedArticle.jsx';
import ArticleComments from '../components/ArticleComments.jsx';

const ArticlePage = () => {
    const [selectedArticle, setSelectedArticle] = useState({});
    const [articleComments, setArticleComments] = useState([]);
    const { article_id } = useParams();

    useEffect(() =>{
        getArticles(article_id)
        .then((data)=>{ setSelectedArticle(data.article) })
        .catch((err)=>{console.log(err)})
    },[]);
    
    useEffect(() =>{
        getComments(article_id)
        .then((data)=>{ setArticleComments(data.comments) })
        .catch((err)=>{console.log(err)})
    },[]);


    return (<main className='article-page'>
        <SelectedArticle selectedArticle={selectedArticle}/>
        <ArticleComments comments={articleComments} />
        </main>)
}

export default ArticlePage;