const Article = ({ArticleData,index}) => {
    return (<>
    <li className="article-item">
        <a href={`/article/${ArticleData.article_id}`}>
            <img src={ArticleData.article_img_url } alt="new articles image" />
            <div className="details">
                <p>ID: {ArticleData.article_id}</p>
                <p>Title: {ArticleData.title}</p>
                <p>Created: {ArticleData.created_at}</p>
                <p>Number of Comment: {ArticleData.comment_count}</p>
                <p>Topic: {ArticleData.topic}</p>
                <p>Votes: {ArticleData.votes}</p>
            </div>
        </a>
    </li>
    </>)
}

export default Article;