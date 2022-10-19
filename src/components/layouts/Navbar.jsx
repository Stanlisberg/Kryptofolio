import { Link } from "react-router-dom"
import { FaCoins } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
// import { GiTwoCoins } from 'react-icons/gi'
function Navbar() {
   
    return(
        <>
         <div className= 'nav-container mb-5 shadow-lg bg-neutral'>
             <div className='nav-wrapper py-4 md:px-10 px-7'>
                 <div className='nav-logo font-bold text-2xl cursor-pointer md:ml-2 flex items-center overflow-hidden'>
                     <FaCoins size='21' color='#64ffda'/>
                     <span className='nav-crypto'>Krypto</span>
                     <span className='nav-folio'>Folio</span>
                 </div>
                    <div className='pt-3'>
                      <div className='hidden md:contents'>
                        <Link to='/' className='primary-color link pl-5 '>
                            Home
                        </Link>
                        <Link to='/About' className='primary-color link pl-5 '>
                           About
                        </Link>
                        <Link to='/Contact' className='primary-color link pl-5 '>
                          Contact
                        </Link>
                        <Link to='/Market' className='primary-color link-market pb-2 pl-5 '>
                            Coin-Market
                        </Link>
                       </div>
                    </div>
                    <div className='pt-1 md:hidden ml-3'>
                        <GiHamburgerMenu size='25' color='#64ffda'/>
                    </div>
             </div>
         </div>
        </>
    )
}
export default Navbar;