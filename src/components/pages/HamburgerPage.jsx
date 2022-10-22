import {Link } from 'react-router-dom'
function HamburgerPage() {
    return(
        <> 
        <div className="pt-3 grid items-center justify-center h-screen ease-in duration-300 bg-gray-500">
          <div className="contents md:hidde ">
            <Link to="/" className="primary-color link pl-5 ">
              Home
            </Link>
            <Link to="/About" className="primary-color link pl-5 ">
              About
            </Link>
            <Link to="/Contact" className="primary-color link pl-5 ">
              Contact
            </Link>
            <Link to="/Market" className="primary-color link-market pb-2 pl-5 ">
              Coin-Market
            </Link>
          </div>
        </div>
        </>
    )
}

export default HamburgerPage;