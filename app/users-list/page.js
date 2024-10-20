import getAllUsers from "@/lib/getUsers";
import Link from "next/link";

export const metadata = {
  title: "Users | Next.js",
  description: "Generated by create next app",
};
const UsersList = async () => {
  const users = await getAllUsers();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-8">Users List</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-gray-200 last:border-0 py-4"
          >
            <Link href={`/users-list/${user.id}`}>
              <button className="text-blue-500 hover:underline">{user.name}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
