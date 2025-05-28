import image1 from "../assets/exercise1.jpg"
const Team = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-white">Meet Our Team</h3>
        <p className="text-gray-400">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym.
        </p>
      </div>
      <div className="bg-gray-400 grid grid-cols-3 gap-8 p-5">
        <div className="relative flex flex-col inset-0 justify-center items-center">
            <img className="rounded-xl" src={image1} alt="" />
            <div className="absolute">
                <h3 className="text-xl text-red-400">kausar Ahammed</h3>
                <p className="">Lorem, ipsum.</p>
            </div>
        </div>
     <div className="relative flex flex-col inset-0 justify-center items-center">
            <img className="rounded-xl" src={image1} alt="" />
            <div className="absolute">
                <h3 className="text-xl text-red-400">kausar Ahammed</h3>
                <p className="">Lorem, ipsum.</p>
            </div>
        </div>
        <div className="relative flex flex-col inset-0 justify-center items-center">
            <img className="rounded-xl" src={image1} alt="" />
            <div className="absolute">
                <h3 className="text-xl text-red-400">kausar Ahammed</h3>
                <p className="">Lorem, ipsum.</p>
            </div>
        </div>
        <div className="relative flex flex-col inset-0 justify-center items-center">
            <img className="rounded-xl" src={image1} alt="" />
            <div className="absolute">
                <h3 className="text-xl text-red-400">kausar Ahammed</h3>
                <p className="">Lorem, ipsum.</p>
            </div>
        </div>
        <div className="relative flex flex-col inset-0 justify-center items-center">
            <img className="rounded-xl" src={image1} alt="" />
            <div className="absolute">
                <h3 className="text-xl text-red-400">kausar Ahammed</h3>
                <p className="">Lorem, ipsum.</p>
            </div>
        </div>
        <div className="relative flex flex-col inset-0 justify-center items-center">
            <img className="rounded-xl" src={image1} alt="" />
            <div className="absolute">
                <h3 className="text-xl text-red-400">kausar Ahammed</h3>
                <p className="">Lorem, ipsum.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
