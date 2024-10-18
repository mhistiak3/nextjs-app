"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  
  
  return (
    <div className="text-3xl font-bold h-screen flex justify-center items-center flex-col">
      <h2 className="text-5xl">useRouter</h2>
      <button className="text-3xl bg-purple-600 text-white px-4 py-2" onClick={() => router.push("/about")}>Go To About</button>
    </div>
  );
};

export default Home;
