import runImage from "../assets/edit.jpg"
const Run = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="bg-[#222222] flex justify-between items-center rounded-2xl">
        <div className="p-12 w-6/12">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Run an Extra Mile Easily
          </h3>
          <p className="text-sm font-semibold text-gray-500 ">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts.Z
          </p>
            <button className="py-4 px-10 bg-[#E6533C] border rounded-4xl mt-12 text-white font-semibold">
              Join Now!
            </button>
        </div>
        <div className="p-12">
            <img className="size-70 rounded-2xl " src={runImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Run;
