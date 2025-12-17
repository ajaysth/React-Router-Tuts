import { Link } from "react-router-dom"


export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const UserLists = ({users}: {users: User[]}) => {
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