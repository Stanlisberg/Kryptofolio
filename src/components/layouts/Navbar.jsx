import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { FaCoins } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
    const navigate = useNavigate()
    const [display, setDisplay] = useState(true)
   
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
                    <div className='pt-1 md:hidden ml-3 block cursor-pointer z-10'>
                        <GiHamburgerMenu size='25' color='#64ffda' onClick={() => {}}/>
                    </div>
             </div>
             <div className={ display === true ? 'md:hidden fixed top-17 items-center justify-between w-full h-full bg-gray ease-in duration-300 z-10' : 'lolo'}>
                <ul className='w-full p-4'>
                    <li className='border-b py-6 cursor-pointer' onClick={() => {
                        navigate('/')
                        setDisplay(false)
                    }}>
                       Home
                    </li>
                    <li className='border-b py-6 cursor-pointer' onClick={() => {
                        navigate('/About')
                        setDisplay(false)
                    }}>
                       About
                    </li>
                    <li className='border-b py-6 cursor-pointer' onClick={() => {
                        navigate('/Contact')
                        setDisplay(false)
                    }}>
                       Contact
                    </li>
                    <li className='border-b py-6 cursor-pointer' onClick={() => {
                        navigate('/Market')
                        setDisplay(false)
                    }}>
                       Coin-Market
                    </li>
                </ul>
                <div className='absolute'>
                  <div className='relative top-2 bottom-1 left-5 right-2 bg-yellow-600'>
                   <Link to='/Sign-in'>
                    <button>Sign In</button></Link>
                   <Link to='/Sign-up'>
                   <button>Sign In</button></Link>
                 </div>
                 </div>
             </div>
         </div>
        </>
    )
}
export default Navbar;