export default async function getUserTodos(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }
  return res.json();
}
