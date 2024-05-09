import { useContext } from 'react';
import { SignedInUserContext } from '../contexts/SignedInUser.jsx';

const UserNavigation = () =>{
    const { user } = useContext(SignedInUserContext);
    return (
        <div className="nav-user">
            <p>{user.username}</p>
            <span><img src={user.avatar_url} alt={user.username}/></span>
        </div>
    )
}

export default UserNavigation;