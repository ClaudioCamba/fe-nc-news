const Users = ({user}) => {
    
    return (
        <div className="user-card">
            <div className="user-icon">
                <img src={`${user.avatar_url}`} alt={`${user.username}`}/>
            </div>
            <h5>{`${user.username}`}</h5>
            <h6>{`${user.name}`}</h6>
        </div>
    )
}
export default Users;