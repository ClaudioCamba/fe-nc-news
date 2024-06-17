import { useContext } from 'react';
import { SignedInUserContext } from '../contexts/SignedInUser.jsx';

const Users = ({user}) => {

    const { setSignedUser } = useContext(SignedInUserContext);

    return (
        <button className="user-btn" onClick={()=> {
            setSignedUser(user);
        }}>
            <div className="user-icon">
                <img src={`${user.avatar_url}`} alt={`${user.username}`}/>
            </div>
            <h5>{`${user.username}`}</h5>
            <h6>{`${user.name}`}</h6>
        </button>
    )
}
export default Users;