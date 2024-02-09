import SingleArticleList from './SingleArticleList';

const ArticleListing = ({articles}) =>{
    return (
        <section className="article-list">
        { articles.map((article,index)=> <SingleArticleList key={article.article_id} articleData={article} index={index}/>) }
        </section> 
    )
}

export default ArticleListing;