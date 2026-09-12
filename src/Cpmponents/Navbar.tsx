

import logo from '../assets/logo-text.png'


const Navbar = () => {
    return (
     <nav className="sticky top-0 z-50 grid grid-cols-3 items-center border-b border-gray-200 bg-white px-14 py-3 container mx-auto">

  {/* Logo - Left */}
  <div className="flex items-center">
    <img src={logo} alt="logo" className="w-32" />
  </div>

  {/* Navigation - Center */}
  <ul className="flex items-center justify-center gap-8 text-sm text-gray-600">
    <li className="cursor-pointer text-pink-600">Home</li>
    <li className="cursor-pointer hover:text-pink-600">Technologies</li>
    <li className="cursor-pointer hover:text-pink-600">Projects</li>
    <li className="cursor-pointer hover:text-pink-600">About</li>
    <li className="cursor-pointer hover:text-pink-600">Contact</li>
  </ul>

  {/* Buttons - Right */}
  <div className="flex items-center justify-end gap-4">
    <button className="text-sm text-gray-600 hover:text-pink-600">
      Sign In
    </button>

    <button className="rounded-full bg-pink-600 px-5 py-2 text-sm text-white hover:bg-pink-700">
      Sign Up
    </button>
  </div>

</nav>
    );
};
   
export default Navbar;