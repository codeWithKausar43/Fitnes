import bannerImg from "../assets/Images 2.png";
const Hero = () => {
  return (
    <div className="border">
      <div className="flex justify-between items-center max-w-7xl mx-auto mt-12">
        <div>
          <h3 className="text-7xl font-extrabold w-5/12 text-white">
            Get body in shape & stay healthy
          </h3>
          <p className="text-gray-500 font-semibold mt-8 w-8/12 ">
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </p>
          <div className="flex gap-10 items-center">
            <button className="py-4 px-10 bg-[#E6533C] border rounded-4xl mt-3 text-white font-semibold">
              Join Club Now!
            </button>
            <button className="py-4 px-10 border rounded-4xl mt-3 text-white font-semibold">
              Join Club Now!
            </button>
          </div>
        </div>
        <div className="relative border-red-400">
          <img src={bannerImg} alt="" />
          {/* card one */}
          <div className="bg-[#3030308A] flex justify-center items-center gap-4 absolute -mt-96 ml-50 px-4 py-2 w-[180px] rounded-2xl">
            <div className="size-8 rounded-full bg-[#E6533C]"></div>
            <div className="">
              <h3 className="text-2xl font-semibold text-white"> 350+</h3>
              <p className="text-md font-semibold text-gray-500">Video tutorial</p>
            </div>
          </div>
           {/* card two */}
           <div className="bg-[#3030308A] flex justify-center items-center gap-4 absolute -mt-30 -ml-22 px-4 py-2 w-[180px] rounded-2xl">
            <div className="size-8 rounded-full bg-[#E6533C]"></div>
            <div className="">
              <h3 className="text-2xl font-semibold text-white"> 350+</h3>
              <p className="text-md font-semibold text-gray-500">Video tutorial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
