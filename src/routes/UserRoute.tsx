import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"

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


const UserRoute = () => {
    const API_URL: string = "https://jsonplaceholder.typicode.com/";
    const reqType: string = "users";
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${API_URL}${reqType}`)
                const data = await response.json()
                setUsers(data)
            } catch (err) {
                console.log(err);
            }

            
        }

        fetchUsers();
    }, [])
    return (
        <>
            <div>
                <h1 className="text-center text-4xl border w-full">Users Section</h1>
                <Outlet context={{ users }} />
            </div>

        </>
    )
}

export default UserRoute