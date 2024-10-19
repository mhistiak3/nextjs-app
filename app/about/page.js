import Button from "@/components/Button";
import Image from "next/image";
import logo from "@/public/logo.png";


const About = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <div className="w-[100px]">
          <Image src={logo} alt="Logo" quality={100} placeholder="blur" />
        </div>
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p className="text-gray-700">
          Welcome to the About page. Here we share our story and mission.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default About;
