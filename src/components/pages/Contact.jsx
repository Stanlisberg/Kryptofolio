import { useRef } from "react";
import { toast } from 'react-toastify'
import { ImPhone } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'
import { IoIosRocket} from 'react-icons/io'

function Contact() {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const submitForm = (e) => {
    toast.success('Success')
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''

    e.preventDefault()
  }
  return (
    <>
      <div className=' mt-24 text-center text-2xl font-mono'>Contact Us...</div>
      <div className="mt-8 py-32 rounded-lg mx-auto max-w-[1200px] bg-[#15273a] mb-8">
       <div className="flex mx-10 flex-col justify-center items-center lg:flex-row lg:justify-between">
          <div className="w-full lg:w-[40%] items-center px-2 lg:px-0">
            <div className=" lg:mx-0 text-justify font-mono text-4xl text-white-500 text-blue-300">
              {" "}
              Let's talk.
            </div>
            <p className="  my-6 text-justify font-md p-6 border-2 border-dashed border-blue-300 flex items-center w-full">
              Ask us anything or just say hi. We are very much available to respond to your enquires.
              
            </p>
            <div className='mt-14'>
              <div className='flex'>
                 <ImPhone style={{marginTop: '2px'}}/>
                <p className='ml-2  mb-2'>+234 814 748 7463</p>
              </div>
              <div className='flex'>
                <FaEnvelope style={{marginTop: '3px'}}/>
                <p className='ml-2'>stanlisberg@gmail.com</p>
              </div>
            </div>
          </div>
          <form 
            className="w-full mt-20 lg:w-[40%] lg:mt-0"
            onSubmit={submitForm}>
            <div className='flex flex-col lg:flex-row lg:justify-between p-2'>
              <div className='flex flex-col lg:w-[45%]'>
                <label htmlFor="Name" className='text-[#ccd6f6]'>Name</label>
                <input 
                 type='text' 
                 required
                 placeholder="John Doe" 
                 ref={nameRef}
                 className='bg-[#15273a] border-b-2 outline-none contact-input  mt-2 border-dashed border-blue-300' ></input>
              </div>
              <div className='flex flex-col mt-12 lg:mt-0 lg:w-[45%]'>
                <label htmlFor="Name" className='text-[#ccd6f6]'>Email</label>
                <input 
                type='email' 
                required
                placeholder="doe@example.com" 
                ref={emailRef}
                className='bg-[#15273a] border-b-2 outline-none contact-input mt-2 border-dashed border-blue-300' ></input>
              </div>
            </div>
            <div className='flex flex-col mt-10  mx-2'>
                <label htmlFor="Name" className='text-[#ccd6f6]'>Message</label>
                <input 
                 type='text' 
                 required
                 placeholder="Hi There..." 
                 ref={messageRef}
                 className='bg-[#15273a] border-b-2 outline-none contact-input mt-2 border-dashed border-blue-300' ></input>
            </div>
            <button 
              className="bg-[teal] text-gray-300 py-2 px-3 mt-14 ml-2 cursor-pointer rounded-md flex items-center hover:scale-90 ease-in-out duration-300"
              type='submit'>
              Send <IoIosRocket style={{marginLeft: '4px'}}/>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
