import UserArticles from "../components/UserArticles";
import UsersSelect from "../components/UsersSelect";

const UserAccountPage = () => {
    return (
        <main className='user-account-page'>
            <h1>ACCOUNT PAGE</h1>
            <UsersSelect />
            <UserArticles />
        </main>
    )
}

export default UserAccountPage;