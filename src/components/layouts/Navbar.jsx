import { Link } from "react-router-dom";
import { useState, useContext} from "react";
import { FaCoins, FaTimes, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthContext from "../Context/AuthContext";

function Navbar() {
  const [navIcon, setNavIcon] = useState(true);
  const { user } = useContext(AuthContext)

  return (
    <>
      <div className="nav-container mb-5 shadow-lg bg-neutral z-10">
        <div className="nav-wrapper py-4 md:px-10 px-7 ">
          <div className="nav-logo font-bold text-2xl cursor-pointer md:ml-2 flex items-center overflow-hidden">
            <FaCoins size="21" color="#64ffda" />
            <span className="nav-crypto">Krypto</span>
            <span className="nav-folio">Folio</span>
          </div>
          <div className="pt-3">
            <div className="hidden md:contents relative">
              <Link to="/" className="primary-color link pl-5">
                Home
              </Link>
              <Link to="/About" className="primary-color link pl-5 ">
                About
              </Link>
              <Link to="/Contact" className="primary-color link pl-5">
                Contact
              </Link>
              <Link
                to="/Market"
                className="primary-color link-market pb-2 pl-5 pr-5 "
              >
                Coin-Market
              </Link>
            </div>
          </div>
          <div className="pt-1 md:hidden ml-3 block cursor-pointer z-10">
            {navIcon === true ? (
              <GiHamburgerMenu
                size="25"
                color="#64ffda"
                onClick={() => setNavIcon(!navIcon)}
              />
            ) : (
              <FaTimes
                size="25"
                color="#64ffda"
                onClick={() => setNavIcon(!navIcon)}
              />
            )}
          </div>
        </div>
        <div
          className={
            navIcon === false
            ? " fixed overflow-y-hidden md:hidden flex flex-col ease-in duration-700 top-[66px] left-0 w-full h-full px-4 py-7 nav-slide-bg z-10 opacity-[0.9]"
            : "  fixed top-17 h-full left-[-100%] ease-in duration-700"
              // ? "md:hidden fixed top-17 items-center justify-between w-full h-full nav-slide-bg ease-in duration-300 z-10"
              // : "fixed items-center -left-96 justify-between h-full nav-slide-bg ease-in duration-500 z-10"
          }
        >
          <ul className="w-full p-4">
            <li
              className="border-b py-6 cursor-pointer mobile-color"
              onClick={() => setNavIcon(!navIcon)}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              className="border-b py-6 cursor-pointer mobile-color"
              onClick={() => setNavIcon(!navIcon)}
            >
              <Link to="/About">About</Link>
            </li>

            <li
              className="border-b py-6 cursor-pointer mobile-color"
              onClick={() => setNavIcon(!navIcon)}
            >
              <Link to="/Contact">Contact</Link>
            </li>

            <li
              className="border-b py-6 cursor-pointer mobile-color"
              onClick={() => setNavIcon(!navIcon)}
            >
              <Link to="/Market">Coin-Market</Link>
            </li>
            { user?.email? (
              <li
              className=" py-6 cursor-pointer mobile-color"
              onClick={() => setNavIcon(!navIcon)}
            >
              <Link to="/Profile">Profile</Link>
            </li>
            ) : (
              ''
            ) }
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
