
const User = ({ params }) => {
  const users = [
    { id: 1, name: "Istiak" },
    { id: 2, name: "Ahammad" },
    { id: 3, name: "Jubayer" },
    { id: 4, name: "Bappi" },
  ];

  const user = users.find((user) => user.id == params.userId);
console.log(user);

  
  return <div>User:{user?.name}</div>;
};
export default User;
