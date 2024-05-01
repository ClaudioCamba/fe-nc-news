import {utcToDayMonthYear} from '../utils/time-formatter';

const SingleArticleList = ({articleData,index}) => {
    return (<>
    <article className="article-item">
        <a href={`/article/${articleData.article_id}`}>
            <img src={articleData.article_img_url } alt={articleData.title} />
            <div className="details">
                <p>ID: {articleData.article_id}</p>
                <p>Title: {articleData.title}</p>
                <p>Created: {articleData.created_at}</p>
                <p>Number of Comment: {articleData.comment_count}</p>
                <p>Topic: {articleData.topic}</p>
                <p>Votes: {articleData.votes}</p>
            </div>
        </a>
    </article>
    </>)
}

export default SingleArticleList;