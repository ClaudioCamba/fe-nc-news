import { useParams } from 'react-router-dom';
import { patchVotes } from "../utils/api-requests";
import Loading from './Loading.jsx';
import Error from './Error.jsx';

const VoteDownButton = ({setVotes, setError}) => {
const { article_id } = useParams();
    
    const handleDownVoteClick = (event) => {
        setVotes((num)=>{
            return num - 1;
        })

        patchVotes(article_id, 'downvote')
        .then(()=>{
            setError(null)
        }).catch((error) => {
            setError('Status '+error.response.status+' : Article down vote has no been updated');
        })
    };

    return (
        <button onClick={handleDownVoteClick} className="thumb-down"><span className="material-symbols-outlined">thumb_down</span></button>
    )
}

export default VoteDownButton;