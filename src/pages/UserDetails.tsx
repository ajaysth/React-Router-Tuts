import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



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

interface UserDetailsParams extends Record<string, string | undefined> {
  id: string;
}
const UserDetails = () => {
  const { id } = useParams<UserDetailsParams>();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const API_URL: string = "https://jsonplaceholder.typicode.com/";
  const reqType: string = `users/${id}`;

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: User = await response.json();

        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  },[id])

  if (loading) return <div className="text-center text-3xl">Loading...</div>;
  if (error) return <div className="text-center text-red-600 text-3xl">{error}</div>;
  if (!user) return null; // safety
  return (
    <>

      <div className="p-4">
        <h2 className="text-center text-3xl mb-4">User Details for ID: {user.id}</h2>
        <ul className="text-2xl space-y-2">
          <li><strong>Name:</strong> {user.name}</li>
          <li><strong>Username:</strong> {user.username}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Phone:</strong> {user.phone}</li>
          <li><strong>Website:</strong> {user.website}</li>
          <li><strong>Company:</strong> {user.company.name}</li>
          <li><strong>City:</strong> {user.address.city}</li>
        </ul>
      </div>

    </>

  )
}

export default UserDetails