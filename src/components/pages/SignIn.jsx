import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { useState, useRef } from 'react'

function SignIn() {
    const [removeIcon, setRemoveIcon] = useState(true);
    const inputRef = useRef();

    const clearInput = () => {
       if(inputRef.current.value) {
           setRemoveIcon(false)
        } else {
            setRemoveIcon(true)
        }
    }

    return(
        <div className='max-w-[600px] mx-auto min-h-[500px] px-4 py-20 border'>
            <h2 className='mt-3 font-bold text-3xl overflow-hidden'>Create Account!</h2>
            <form className='mt-5'>
                <div className='my4'>
                 <label htmlFor="Name" className='text-gray-300'>Name</label>
                 <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                   <input
                    type='text'
                    className="bg-input w-full p-2 rounded-2xl"
                    placeholder='Name'
                   />
                   <FaUser className='absolute left-2 top-3 text-gray-400' color='#64ffda'/>
                  </div>
                </div>

                <div>
                 <label htmlFor="Name" className='text-gray-300'>Email</label>
                  <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                   <input
                    type='text'
                    className='bg-input w-full p-2 rounded-2xl'
                    placeholder='Email'
                    />
                    <AiOutlineMail className='absolute left-2 top-3 text-gray-400' color='#64ffda' />
                  </div>
                 </div>

                 <div>
                  <label htmlFor="Name" className='text-gray-300'>Password</label>
                  <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    {/* <div className='max-w-[500px] border'> */}
                   <input
                    ref={inputRef}
                    onFocus={() =>  setRemoveIcon(false) }
                    onBlur={() =>  {
                        setRemoveIcon(true)
                        clearInput()
                    }}
                    type='text'
                    className="bg-input w-full p-2 rounded-2xl"
                    placeholder='Password'
                   />
                   {/* </div> */}
                    {removeIcon === true
                    ? <AiFillLock className='absolute left-2 top-3 text-gray-400' color='#64ffda' />
                    : ''
                    }
                    
                  </div>
                 </div>
            </form>

        </div>
    )
}
export default SignIn;