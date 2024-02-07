const SelectedArticleVisual = ({selectedArticle}) =>{
    return (
        <section className="article">
        <div className="intro">
            <h1>{selectedArticle.title}</h1>
            <p>By {selectedArticle.author} <span class="material-symbols-outlined">schedule </span> {selectedArticle.created_at}</p>
        </div>
        
        <div className="banner">
            <span className="topic-badge">{selectedArticle.topic}</span>
            <img src={selectedArticle.article_img_url} alt={selectedArticle.body} />
        </div>
        
        <div className="detail">    
            <p>{selectedArticle.body}</p>
            <div className="comment-like">
            <p><span class="material-symbols-outlined">comment</span> {selectedArticle.comment_count}</p>
            {/* <p>id: {selectedArticle.article_id}</p> */}
            <p><span class="material-symbols-outlined">thumbs_up_down </span> {selectedArticle.votes}</p>
            </div>

        </div>
        </section>
    )
}

export default SelectedArticleVisual;