import { useState, useEffect } from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}



const Posts = () => {
  const API_URL: string = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState<string>("posts");
  const [items, setItems] = useState<Post[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
  }, [reqType])

  return (
    <>
      <h2>Posts</h2>
      
        <div>
          <table className="min-w-full table-auto border border-black">
            <thead>
              <tr className="bg-gray-400">
              <th className="border px-4 py-2 text-left">Id</th>
              <th className="border px-4 py-2 text-left">UserId</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Body</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item: Post) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default Posts