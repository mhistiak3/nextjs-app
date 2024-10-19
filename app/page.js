import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600  to-purple-800 text-white">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-10 shadow-lg text-center">
        <h2 className="text-5xl font-bold mb-8">Welcome to Next.js App</h2>
        <Link href="/about">
          <button className="text-xl bg-purple-600    px-6 py-3 rounded-lg">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
