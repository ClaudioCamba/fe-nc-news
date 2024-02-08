import { useParams } from 'react-router-dom';
import { patchVotes } from "../utils/api-requests";

const VoteUpButton = ({setVotes, setError}) => {
const { article_id } = useParams();
    
    const handleUpVoteClick = (event) => {
        setVotes((num)=>{
            return num + 1;
        })

        patchVotes(article_id, 'upvote')
        .then(()=>{
            setError(null)
        }).catch((error) => {
            setError('Status '+error.response.status+' : Article up vote has no been updated');
        })
    };

    return (
        <button onClick={handleUpVoteClick} className="thumb-up"><span className="material-symbols-outlined">thumb_up</span></button>
    )
}

export default VoteUpButton;