const UserInfo = ({user}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      <div className="space-y-4">
        <div>
          <strong>Name:</strong> {user?.name}
        </div>
        <div>
          <strong>Username:</strong> {user?.username}
        </div>
        <div>
          <strong>Email:</strong> {user?.email}
        </div>
        <div>
          <strong>Address:</strong>{" "}
          {`${user?.address.street}, ${user?.address.suite}, ${user?.address.city}, ${user?.address.zipcode}`}
        </div>
        <div>
          <strong>Phone:</strong> {user?.phone}
        </div>
        <div>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${user?.website}`}
            className="text-blue-500 hover:underline"
          >
            {user?.website}
          </a>
        </div>
        <div>
          <strong>Company:</strong> {user?.company.name} -{" "}
          {user?.company.catchPhrase}
        </div>
      </div>
    </div>
  );
}
export default UserInfo