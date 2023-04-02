import { ImPhone } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'
import { IoIosRocket} from 'react-icons/io'

function Contact() {
  return (
    <>
      <div className=' mt-24 text-center text-2xl font-mono'>Contact Us...</div>
      <div className="mt-8 py-28 rounded-lg mx-auto max-w-[1200px] bg-[#15273a] ">
      <div className="flex mx-10 justify-between">
          <div className="w-[45%] items-center">
            <div className="mx-4 text-justify font-mono text-2xl text-white-500 text-blue-300">
              {" "}
              Lets talk.
            </div>
            <p className=" mx-4 my-6 text-justify font-md p-6 border-2 border-dashed border-blue-300 flex items-center">
              Ask us anything or just say hi. We are very much available to respond to your enquires.
              
            </p>
            <div className='mt-16'>
              <div className='mx-4 flex'>
                 <ImPhone style={{marginTop: '2px'}}/>
                <p className='ml-2  mb-2'>+234 814 748 7463</p>
              </div>
              <div className='mx-4 flex'>
                <FaEnvelope style={{marginTop: '3px'}}/>
                <p className='ml-2'>stanlisberg@gmail.com</p>
              </div>
            </div>
          </div>
          <form className="mr-4">
            <div className='flex justify-between p-2'>
              <div className='flex flex-col'>
                <label htmlFor="Name" className='text-[#ccd6f6]'>Name</label>
                <input type='text' placeholder="John Doe" className='bg-[#15273a] border-b-2 outline-none contact-input  mt-2 border-dashed border-blue-300' ></input>
              </div>
              <div className='flex flex-col ml-8'>
                <label htmlFor="Name" className='text-[#ccd6f6]'>Email</label>
                <input type='text' placeholder="doe@example.com" className='bg-[#15273a] border-b-2 outline-none contact-input mt-2 border-dashed border-blue-300' ></input>
              </div>
            </div>
            <div className='flex flex-col mt-10  mx-2'>
                <label htmlFor="Name" className='text-[#ccd6f6]'>Message</label>
                <input type='text' placeholder="Hi There..." className='bg-[#15273a] border-b-2 outline-none contact-input mt-2 border-dashed border-blue-300' ></input>
            </div>
            <button className="bg-[teal] text-gray-300 py-2 px-3 mt-14 ml-2 cursor-pointer rounded-md flex items-center hover:scale-90 ease-in-out duration-300">
              Send <IoIosRocket style={{marginLeft: '4px'}}/>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
