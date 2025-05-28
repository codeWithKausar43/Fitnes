const Bmi = () => {
  return (
    <div className="bg-gray-500 mt-12">
      <div className="max-w-7xl mx-auto py-12 flex justify-between items-center">
        <div>
          <h3 className="text-lg text-white">BMI Calculator Chart</h3>
          <div className=" grid grid-cols-2 text-gray-400">
            <p className="border border-r-gray-400">BMI </p>
            <p className="border border-r-gray-400">CAlCULATOR</p>
            <p className="border border-r-gray-400">Below 18.5</p>
            <p className="border border-r-gray-400">Underweight</p>
            <p className="border border-r-gray-400">18.5 - 24.9</p>
            <p className="border border-r-gray-400">Healthy</p>
            <p className="border border-r-gray-400">25.0 - 29.9</p>
            <p className="border border-r-gray-400">Overweight</p>
            <p className="border border-r-gray-400">30.0 - and Above</p>
            <p className="border border-r-gray-400">Obese</p>
          </div>
        </div>
        <div>
          <h3>Calculate your BMI</h3>
          <p>
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </p>
          <div className="grid grid-cols-4 gap-3 mt-12">
            <input className="border col-span-2 rounded-md bg-gray-400" type="text" />
            <input className="border col-span-2 rounded-md bg-gray-400" type="text" />
            <input className="border col-span-2 rounded-md bg-gray-400" type="text" />
            <input className="border col-span-2 rounded-md bg-gray-400" type="text" />
            <input className="border col-span-4 rounded-md bg-gray-400" type="text" />
          </div>
          <button className="py-4 px-8 bg-[#E6533C] border rounded-4xl mt-3 text-white font-semibold">
              Calculate!
            </button>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
