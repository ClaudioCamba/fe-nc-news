import { useEffect, useState } from "react";
import { getUsers } from "../utils/api-requests";
// import { SignedInUserContext } from '../contexts/SignedInUser.jsx';

const UsersSelect = () => {
    const [ users, SetUsers ] = useState(null);
    // const { user, setUser } = useContext(SignedInUserContext);
    
    useEffect(()=>{
        getUsers()
        .then((data)=>{
            SetUsers(data.users);
            console.log(data)
        })
    },[])


    return (
        <section className='users-select'>
            <ol className="users-list">
                {
                    users ? users.map((user, index)=> {
                        return <li key={user.username}>{user.username}</li>
                    }) : null
                }
            </ol>
        </section>
    )
}

export default UsersSelect;