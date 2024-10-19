const UserTodo = async({ todosPromise }) => {
  const todos = await todosPromise;
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mt-5">
      <h1 className="text-2xl font-bold mb-4">User Todos</h1>
      {todos.map((todo) => (
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-3">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="space-y-4">
              <div>
                <strong className="text-gray-700">Title:</strong> {todo?.title}
              </div>
              <div>
                <strong className="text-gray-700">Completed:</strong>{" "}
                {todo?.completed ? "Yes" : "No"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTodo;
