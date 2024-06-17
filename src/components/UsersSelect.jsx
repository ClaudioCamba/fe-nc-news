import { useEffect, useState } from "react";
import { getUsers } from "../utils/api-requests";
import Users from "./Users.jsx" ;

const UsersSelect = () => {
    const [ users, setUsers ] = useState(null);
    
    useEffect(()=>{
        getUsers()
        .then((data)=>{
            setUsers(data.users);
        })
    },[])


    return (
        <section className='users-select'>
            <h3>Select Account</h3>
            <ul className="users-list">
                {
                    users ? users.map((user, index)=> {
                        return <li key={index}><Users user={user} /></li>
                    }) : null
                }
            </ul>
        </section>
    )
}

export default UsersSelect;