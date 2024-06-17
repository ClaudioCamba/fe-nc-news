import { useContext } from 'react';
import { SignedInUserContext } from '../contexts/SignedInUser.jsx';

const UserNavigation = () => {
    const { signedUser } = useContext(SignedInUserContext);
    return (
        <div className="nav-user">
            <p>{signedUser.username}</p>
            <span><img src={signedUser.avatar_url} alt={signedUser.username}/></span>
        </div>
    )
}

export default UserNavigation;