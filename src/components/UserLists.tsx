import { Link } from "react-router-dom"
import users from "../data/users"

interface User{
    id: string;
    name: string;
}
const UserLists = () => {
    return (
        <>
            <h1 className="text-center text-4xl border w-full">Users Lists</h1>
            <div className="text-2xl flex justify-center">
                <ul>
                    {
                        users.map((user: User) => {
                            return <li key={user.id}>
                                <Link to={`${user.id}`}>
                                    {user.id}. {user.name}
                                </Link>
                            </li>

                        })

                    }
                </ul>
            </div></>
    )
}

export default UserLists