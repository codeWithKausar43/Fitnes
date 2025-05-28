 import exercise1 from "../assets/exercise1.jpg"
 import exercise2 from "../assets/exercise2.png"
  import exercise3 from "../assets/exercise3.png"
   import exercise4 from "../assets/exercise4.png"
    import exercise5 from "../assets/exercise5.jpg"
     import exercise6 from "../assets/exercise6.jpg"

const Exercises = () => {
    return (
        <div className="max-w-7xl mx-auto mt-12">
            <div>
                <h3 className="text-3xl text-white font-bold mb-3">Trainings and Exercises</h3>
                <p className="text-sm text-gray-400 ">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.</p>
            </div>

            <div className="grid grid-cols-10 mt-12">
        <div className="col-span-3 relative">
            <img className="w-full h-50 object-cover" src={exercise1} alt="" />
            <div class="absolute inset-0 bg-red-500/30"></div>
        </div>
       <div  className="col-span-4">
            <img className="w-full h-50 object-cover" src={exercise2} alt="" />
        </div>
        <div  className="col-span-3">
            <img className="w-full h-50 object-cover" src={exercise3} alt="" />
        </div>
        <div className="col-span-4">
            <img className="w-full h-50 object-cover" src={exercise4} alt="" />
        </div>
        <div className="col-span-2">
            <img className="w-full h-50 object-cover" src={exercise5} alt="" />
        </div>
        <div className="col-span-4">
            <img className="w-full h-50 object-cover" src={exercise6} alt="" />
        </div>
            </div>
        </div>
    );
};

export default Exercises;