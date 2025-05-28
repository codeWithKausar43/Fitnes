const Footer = () => {
  return (
    <div className="bg-gray-500 mt-12 py-12">
      <div className="max-w-7xl mx-auto flex justify-between ">
        <div className="md:w-5/12">
          <h3 className="text-3xl font-bold text-white">Fitnes</h3>
          <p>
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts.
          </p>
        </div>
        <div>
            <h3 className="text-3xl font-bold text-white">Get Started</h3>
            <ul>Service</ul>
            <ul>Affiliate Program</ul>
            <ul>Contact Us</ul>
            <ul>Aboute Us</ul>
        </div>
        <div>
             <h3 className="text-3xl font-bold text-white">Workout Libary</h3>
            <ul>Platform</ul>
            <ul>Fitness</ul>
            <ul>Fitness</ul>
            <ul>App Design</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
