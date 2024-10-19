import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-full py-2 px-4 shadow-md">
            <h2 className="text-2xl text-purple-600 font-bold">Logo</h2>
          </div>
   
        </div>
        <ul className="flex gap-x-6 items-center text-white">
          <li className="hover:text-gray-300 transition duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <Link href="/users-list">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
