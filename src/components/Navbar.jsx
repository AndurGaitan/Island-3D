import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white item-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">AG</p>
      </NavLink>
    </header>
  );
};

export default Navbar;