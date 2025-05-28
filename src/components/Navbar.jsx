const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center pt-12">
      <div>
        <h2 className="text-[#E6533C] text-4xl font-extrabold">Fitnes</h2>
      </div>
      <div className="flex gap-4 border rounded-4xl px-4 py-2 border-gray-400">
        <ul className="bg-[#E6533C] rounded-3xl px-2 text-white font-semibold ">Home</ul>
        <ul className="text-gray-600">Contact</ul>
        <ul className="text-gray-600">Service</ul>
        <ul className="text-gray-600">About</ul>
      </div>
    </div>
  );
};

export default Navbar;
