import Votes from "./Votes";

const SelectedArticleVisual = ({selectedArticle}) =>{
    return (
        <section className="article">
        <div className="intro">
            <h1>{selectedArticle.title}</h1>
            <p>By {selectedArticle.author} 
            <span className="material-symbols-outlined">schedule </span> 
            {selectedArticle.created_at} 
            <span className="material-symbols-outlined">comment</span> {selectedArticle.comment_count}
            </p>
        </div>
        
        <div className="banner">
            <span className="topic-badge">{selectedArticle.topic}</span>
            <img src={selectedArticle.article_img_url} alt={selectedArticle.body} />
        </div>
        
        <div className="detail">    
            <p>{selectedArticle.body}</p>
        </div>
        <Votes votes={selectedArticle.votes}/>

        </section>
    )
}

export default SelectedArticleVisual;