export default async function getSingleUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}
