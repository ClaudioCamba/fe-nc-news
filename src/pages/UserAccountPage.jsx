import { useEffect, useState } from "react";
import { getUsers } from "../utils/api-requests";

const UserAccountPage = () => {
    const [users, SetUsers] = useState();
    useEffect(()=>{
        getUsers()
        .then((data)=>{
            SetUsers(data);
            console.log(data)
        })
    },[])


    return (
        <main className='article-list-page'>
            <h1>ACCOUNT!</h1>

        </main>
    )
}

export default UserAccountPage;