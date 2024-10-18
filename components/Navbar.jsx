import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-purple-600 py-5 px-3">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="bg-white rounded py-2 px-4 ">
          <h2 className="text-xl text-purple-600 font-bold">Logo</h2>
        </div>

        <ul className="flex gap-x-4 items-center text-white">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/users-list"}>Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
