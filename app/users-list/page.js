import Link from "next/link";

const UsersList = () => {
  // throw new Error("Something went wrong");
  const users = [
    { id: 1, name: "Istiak" },
    { id: 2, name: "Ahammad" },
    { id: 3, name: "Jubayer" },
    { id: 4, name: "Bappi" },
  ];
  return <div>
    <h1>Users List</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users-list/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>;
};
export default UsersList;
