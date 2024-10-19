import Loader from "@/components/Loader";
import UserInfo from "@/components/UserInfo";
import UserTodo from "@/components/UserTodos";
import getUserTodos from "@/lib/getTodos";
import getSingleUser from "@/lib/getUser";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";


export async function generateMetadata({ params }) {
  const user = await getSingleUser(params.userId);
  return {
    title: user?.name,
    description: `Information about ${user?.name}`,
  };
}
const User = async ({ params }) => {
  const userPromise = getSingleUser(params.userId);
  const todosPromise = getUserTodos(params.userId);
  // const [user, todos] = await Promise.all([userPromise, todosPromise]);
  const user = await userPromise;
  if (!user.name) {
    notFound();
    // redirect("/not-found");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <UserInfo user={user} />
      <Suspense fallback={<Loader className={'mt-5'}/>}>
      <UserTodo todosPromise={todosPromise} />
      </Suspense>
    </div>
  );
};

export default User;
