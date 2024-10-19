export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{

  //  cache: "no-store",
  next:{
    revalidate:60
  }
  });
  if (!res.ok) {
  throw new Error("Failed to fetch users");
  }
  return res.json();
}
