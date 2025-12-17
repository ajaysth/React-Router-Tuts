import UserLists from "../components/UserLists"
import { useOutletContext } from "react-router-dom"

interface User {
    id: string;
    name: string;  
}

interface Users{
    users: User[];
}
const Users = () => {
    const {users} = useOutletContext<Users>()
    return (
        <>
            <UserLists users={users} />
        </>
    )
}

export default Users