import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles, getComments } from '../utils/api-requests.js';
import SelectedArticle from '../components/SelectedArticle.jsx';
import ArticleComments from '../components/ArticleComments.jsx';
import Loading from '../components/Loading.jsx';

const ArticlePage = () => {
    const [selectedArticle, setSelectedArticle] = useState({});
    const [articleComments, setArticleComments] = useState([]);
    const [isLoadingArticle, setIsLoadingArticle] = useState(false);
    const [isLoadingComments, setIsLoadingComments] = useState(false);
    const { article_id } = useParams();

    useEffect(() =>{
        setIsLoadingArticle(true)
        setIsLoadingComments(true)

        getArticles(article_id)
        .then((data)=>{ 
            setSelectedArticle(data.article)
            setIsLoadingArticle(false)
        }).catch((err)=>{console.log(err)})

        getComments(article_id)
        .then((data)=>{ 
            setArticleComments(data.comments)
            setIsLoadingComments(false)
        }).catch((err)=>{console.log(err)})
    },[]);
    



    return (<main className='article-page'>
        {isLoadingArticle? <Loading/> : <SelectedArticle selectedArticle={selectedArticle}/>}
        {isLoadingComments? <Loading/> : <ArticleComments comments={articleComments} />}
        </main>)
}

export default ArticlePage;