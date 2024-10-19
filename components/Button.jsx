"use client"
const Button = () => {
      const showMyInfo = () => {
        console.log('More info');
        
      };
  return (
    <button
      className="bg-purple-600 px-4 py-2 rounded-lg text-white mt-5"
      onClick={() => showMyInfo()}
    >
      More About me
    </button>
  );
}
export default Button