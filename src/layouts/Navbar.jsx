const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col text-center">
      <div className="bg-black rotate-2 inline-block">
        <h1 className="font-punktype text-3xl sm:text-4xl md:text-6xl text-gray-300 -rotate-2">
          Puta Mierda
        </h1>
      </div>
      <h2 className="text-gray-300 font-roboto text-sm sm:text-base md:text-lg mt-2">
        No estamos aquí para agradar.
      </h2>
    </div>
  );
};

export default Navbar;
