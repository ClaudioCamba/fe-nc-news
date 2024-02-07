const Votes = ({votes}) => {
    return (
        <div className="vote">
            <p><span className="material-symbols-outlined">thumbs_up_down </span> {votes}</p>
            <button className="thumb-up"><span className="material-symbols-outlined">thumb_up</span></button>
            <button className="thumb-down"><span className="material-symbols-outlined">thumb_down</span></button>
        </div>
    )
}

export default Votes;