import { useState } from "react";

const handleUpVote = (event) => {
    console.log('Up')
    // console.log('clicked')
}
const handleDownVote = (event) => {
    console.log('Down')
    // console.log('clicked')
}

const Votes = ({votes}) => {
    const [vote, setVotes] = useState(votes);

    return (
        <div className="vote">
            <p><span className="material-symbols-outlined">thumbs_up_down </span> {vote}</p>
            <button onClick={handleUpVote} className="thumb-up"><span className="material-symbols-outlined">thumb_up</span></button>
            <button onClick={handleDownVote} className="thumb-down"><span className="material-symbols-outlined">thumb_down</span></button>
        </div>
    )
}

export default Votes;