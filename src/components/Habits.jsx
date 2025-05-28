import image2 from "../assets/image 2.png"

const Habits = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="text-center">
        <h3 className="text-5xl font-extrabold text-white">
          Change Your Habits
        </h3>
        <p className="text-sm text-gray-400">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym
        </p>
        <div className="flex justify-between mt-12">
        <div className=" items-center flex flex-col">
            <img className="rounded-full border-gray-500 border-3" src={image2} alt="" />
            <h6 className="text-xl font-semibold text-white">Movement</h6>
            <p className="text-gray-500">We believe fitness should be accessible to everyone</p>
        </div>
       <div className=" items-center flex flex-col">
            <img className="rounded-full border-gray-500 border-3" src={image2} alt="" />
            <h6 className="text-xl font-semibold text-white">Movement</h6>
            <p className="text-gray-500">We believe fitness should be accessible to everyone</p>
        </div>
        <div className=" items-center flex flex-col">
            <img className="rounded-full border-gray-500 border-3" src={image2} alt="" />
            <h6 className="text-xl font-semibold text-white">Movement</h6>
            <p className="text-gray-500">We believe fitness should be accessible to everyone</p>
        </div>
        <div className=" items-center flex flex-col">
            <img className="rounded-full border-gray-500 border-3" src={image2} alt="" />
            <h6 className="text-xl font-semibold text-white">Movement</h6>
            <p className="text-gray-500">We believe fitness should be accessible to everyone</p>
        </div>
        <div className=" items-center flex flex-col">
            <img className="rounded-full border-gray-500 border-3" src={image2} alt="" />
            <h6 className="text-xl font-semibold text-white">Movement</h6>
            <p className="text-gray-500">We believe fitness should be accessible to everyone</p>
           
        </div>
        </div>
      </div>
    </div>
  );
};

export default Habits;
