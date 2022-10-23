import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { useState, useRef } from 'react'

function SignIn() {
    const [removeNameIcon, setRemoveNameIcon] = useState(true);
    const [removeEmailIcon, setRemoveEmailIcon] = useState(true);
    const [removePasswordIcon, setRemovePasswordIcon] = useState(true);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const clearNameInput = () => {
       if(nameRef.current.value) {
           setRemoveNameIcon(false)
        } else {
            setRemoveNameIcon(true)
        }
    }

    const clearEmailInput = () => {
        if(emailRef.current.value) {
            setRemoveEmailIcon(false)
         } else {
             setRemoveEmailIcon(true)
         }
     }

     const clearPasswordInput = () => {
        if(passwordRef.current.value) {
            setRemovePasswordIcon(false)
         } else {
             setRemovePasswordIcon(true)
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
                    ref={nameRef}
                    onFocus={() =>  setRemoveNameIcon(false) }
                    onBlur={() =>  {
                        setRemoveNameIcon(true)
                        clearNameInput()
                    }}
                    type='text'
                    className="bg-input w-full p-2 rounded-2xl"
                    placeholder='Name'
                   />
                    {removeNameIcon === true
                    ? <FaUserTie className='absolute left-2 top-3 text-gray-400' color='#64ffda' />
                    : ''
                    }
                  </div>
                </div>

                <div>
                 <label htmlFor="Name" className='text-gray-300'>Email</label>
                  <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                   <input
                    ref={emailRef}
                    onFocus={() =>  setRemoveEmailIcon(false) }
                    onBlur={() =>  {
                        setRemoveEmailIcon(true)
                        clearEmailInput()
                    }}
                    type='text'
                    className='bg-input w-full p-2 rounded-2xl'
                    placeholder='Email'
                    />
                     {removeEmailIcon === true
                    ? <AiOutlineMail className='absolute left-2 top-3 text-gray-400' color='#64ffda' />
                    : ''
                    }
                  </div>
                 </div>

                 <div>
                  <label htmlFor="Name" className='text-gray-300'>Password</label>
                  <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    {/* <div className='max-w-[500px] border'> */}
                   <input
                    ref={passwordRef}
                    onFocus={() =>  setRemovePasswordIcon(false) }
                    onBlur={() =>  {
                        setRemovePasswordIcon(true)
                        clearPasswordInput()
                    }}
                    type='text'
                    className="bg-input w-full p-2 rounded-2xl"
                    placeholder='Password'
                   />
                   {/* </div> */}
                    {removePasswordIcon === true
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