import { Link } from "react-router-dom"
import { useState } from 'react'
import { FaCoins, FaTimes, FaUser } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
    const [navIcon, setNavIcon] = useState(true)
   
    return(
        <>
         <div className= 'nav-container mb-5 shadow-lg bg-neutral'>
             <div className='nav-wrapper py-4 md:px-10 px-7'>
                 <div className='nav-logo font-bold text-2xl cursor-pointer md:ml-2 flex items-center overflow-hidden'>
                     <FaCoins size='21' color='#64ffda'/>
                     <span className='nav-crypto'>Crypto</span>
                     <span className='nav-folio'>Folio</span>
                 </div>
                    <div className='pt-3'>
                      <div className='hidden md:contents relative'>
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
                        <Link to='/Market' className='primary-color link-profile pb-2 pl-5 '>
                            Profile
                        </Link>
                        <div className='flex justify-end absolute top-8 right-8'><FaUser size='14' color='#64ffda'/></div>
                       </div>  
                    </div>
                    <div className='pt-1 md:hidden ml-3 block cursor-pointer z-10'>
                        {navIcon === true ? <GiHamburgerMenu size='25' color='#64ffda' onClick={() => setNavIcon(!navIcon)} /> : <FaTimes size='25' color='#64ffda' onClick={() => setNavIcon(!navIcon)} />}
                    </div>
             </div>
             <div className={ 
                navIcon === false 
                 ? 'md:hidden block fixed top-17 items-center justify-between w-full h-full bg-gray ease-in duration-300 z-10' 
                 : 'fixed items-center -left-96 justify-between h-full bg-gray ease-in duration-300 z-10'} >
                <ul className='w-full p-4'>
                     <li className='border-b py-6 cursor-pointer' onClick={() => setNavIcon(!navIcon)}>
                      <Link to='/'>Home</Link> 
                     </li>

                     <li className='border-b py-6 cursor-pointer' onClick={() => setNavIcon(!navIcon)}>
                      <Link to='/About'>About</Link> 
                     </li>

                     <li className='border-b py-6 cursor-pointer' onClick={() => setNavIcon(!navIcon)}>
                      <Link to='/Contact'>Contact</Link> 
                     </li>

                     <li className='border-b py-6 cursor-pointer' onClick={() => setNavIcon(!navIcon)}>
                      <Link to='/Market'>Coin-Market</Link> 
                     </li>

                     <li className=' py-6 cursor-pointer' onClick={() => setNavIcon(!navIcon)}>
                      <Link to='/Profile'>Profile</Link> 
                     </li>
                </ul>
             </div>
         </div>
        </>
    )
}
export default Navbar;