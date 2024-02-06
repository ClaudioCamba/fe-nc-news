import Article from './Articles';

const ArticleList = ({isLoading,articles}) => {
  return (<>
        { isLoading ? <h1>Loading...</h1> :
        <ul className="article-list">
            { articles.map((article,index)=> <Article key={article.article_id} ArticleData={article} index={index}/>) }
        </ul> }
    </>)
}

export default ArticleList;