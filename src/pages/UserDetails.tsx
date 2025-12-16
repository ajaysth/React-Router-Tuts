import { useParams } from "react-router-dom"
import users from "../data/users";

interface UserDetailsParams extends Record<string, string | undefined> {
    id: string;
}
const UserDetails = () => {
    const { id } = useParams<UserDetailsParams>();
    const user = users.find(u => u.id === id);
    if (!user) {
        return <div className="text-center text-red-600 text-3xl">User not found</div>;
    }
  return (
    <>
    
      <h2 className="text-center text-3xl">User Details for User ID: {id}</h2>
      <ul>
        <li className="text-2xl">ID: {user.id}</li>
        <li className="text-2xl">Name: {user.name}</li>

      </ul>

    </>

  )
}

export default UserDetails