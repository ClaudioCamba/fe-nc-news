const SelectedArticleVisual = ({selectedArticle}) =>{
    return (
        <section className="article">
        <img className="banner" src={selectedArticle.article_img_url} alt={selectedArticle.body} />
        <div className="detail">
            <h1>Title: {selectedArticle.title}</h1>
            <p>Topic: {selectedArticle.article_id}</p>
            <p>Topic: {selectedArticle.topic}</p>
            <p>Votes: {selectedArticle.votes}</p>
            <p>Created: {selectedArticle.created_at}</p>
            <p>Comment Count: {selectedArticle.comment_count}</p>
            <p>Author: {selectedArticle.author}</p>
            <p>body: {selectedArticle.body}</p>
        </div>
        </section>
    )
}

export default SelectedArticleVisual;