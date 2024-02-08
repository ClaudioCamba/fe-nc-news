import { useState } from "react";
import VoteUpButton from './VoteUpButton.jsx';
import VoteDownButton from './VoteDownButton.jsx';

const Votes = ({votes}) => {
    const [vote, setVotes] = useState(votes);
    const [error, setError] = useState(null);

    return (<>
        <div className="vote">
            <p><span className="material-symbols-outlined">thumbs_up_down </span> <span className="vote-display">{vote}</span></p>
            <VoteUpButton setError={setError} setVotes={setVotes}/>
            <VoteDownButton setError={setError} setVotes={setVotes}/>
        </div>

                {
                    error ? <div className="vote-error"><p>{error}</p></div> : null
                }
    </>)
}

export default Votes;