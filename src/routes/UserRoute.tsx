import { Outlet } from "react-router-dom"
import users from "../data/users";


const UserRoute = () => {
    return (
        <>
            <div>
                <h1 className="text-center text-4xl border w-full">Users Section</h1>
                <Outlet context={{users}} />
            </div>
            
        </>
    )
}

export default UserRoute