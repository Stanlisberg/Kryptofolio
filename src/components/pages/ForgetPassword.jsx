import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useState, useRef, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { sendPasswordResetEmail} from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from "../../firebase";

function ForgetPassword() {
  const { signIn, user } = useContext(AuthContext);

  const [removeEmailIcon, setRemoveEmailIcon] = useState(true);
  const [ email, setEmail ] = useState()

  const emailRef = useRef();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    //   navigate('/')
      await sendPasswordResetEmail(auth, user?.email)
      toast.success('Email was sent')
     .catch((e) => {
      console.log(e.message);
      alert(e.message);
     })

    e.preventDefault();
  }

  const clearEmailInput = () => {
    if (emailRef.current.value) {
      setRemoveEmailIcon(false);
    } else {
      setRemoveEmailIcon(true);
    }
  };

  return (
    <div className="forget-bg max-w-[700px] min-h-[350px] my-14 mx-auto px-5 py-3 rounded-lg ">
      <h2 className="pb-4 mt-1 font-bold text-3xl overflow-hidden text-gray-300">
        Forget Password!
      </h2>
      <div>
      </div>
      <form className="mt-5" onSubmit={ handleSubmit }>
        <div className='mb-6'> 
          <label htmlFor="Name" className="text-gray-300">
            Email
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-xl">
            <input
              ref={emailRef}
              onFocus={() => setRemoveEmailIcon(false)}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                setRemoveEmailIcon(true);
                clearEmailInput();
              }}
              type="text"
              className="bg-input w-full p-2 rounded-2xl"
              placeholder="Email"
            />
            {removeEmailIcon === true ? (
              <AiOutlineMail
                className="absolute left-2 top-3 text-gray-400"
                color="teal"
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className=" mt-8 border w-full p-2 bg-green text-gray-300 cursor-pointer hover:scale-90 ease-in-out duration-300"
          >
           Send reset Link
          </button>
        </div>
      </form>
    </div>
  );
}
export default ForgetPassword