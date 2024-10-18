import { redirect } from "next/navigation";

const User = ({ params }) => {
  const users = [
    { id: 1, name: "Istiak" },
    { id: 2, name: "Ahammad" },
    { id: 3, name: "Jubayer" },
    { id: 4, name: "Bappi" },
  ];
  if(params.userId == 4){
    redirect("/not-found")
  }

  const user = users.find((user) => user.id == params.userId);


  
  return <div>User:{user?.name}</div>;
};
export default User;
