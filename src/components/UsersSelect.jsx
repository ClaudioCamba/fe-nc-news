import { useEffect, useState } from "react";
import { getUsers } from "../utils/api-requests";
import Users from "./Users.jsx" 
// import { SignedInUserContext } from '../contexts/SignedInUser.jsx';

const UsersSelect = () => {
    const [ users, SetUsers ] = useState(null);
    // const { user, setUser } = useContext(SignedInUserContext);
    
    useEffect(()=>{
        getUsers()
        .then((data)=>{
            console.log(data)
            SetUsers(data.users);
        })
    },[])


    return (
        <section className='users-select'>
            <ol className="users-list">
                {
                    users ? users.map((user, index)=> {
                        return <li key={index}><Users user={user} /></li>
                    }) : null
                }
            </ol>
        </section>
    )
}

export default UsersSelect;