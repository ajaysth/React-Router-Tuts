import { Outlet } from "react-router-dom"


const UserRoute = () => {
    return (
        <>
            <div>
                <h1 className="text-center text-4xl border w-full">Users Section</h1>
                <Outlet />
            </div>
            
        </>
    )
}

export default UserRoute