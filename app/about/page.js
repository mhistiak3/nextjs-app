import Button from "@/components/Button";

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
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
