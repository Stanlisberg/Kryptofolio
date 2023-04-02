import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useState, useRef, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify'

function SignIn() {
  const { signIn, user } = useContext(AuthContext);

  const [removeEmailIcon, setRemoveEmailIcon] = useState(true);
  const [removePasswordIcon, setRemovePasswordIcon] = useState(true);
  const [ password, setPassword] = useState();
  const [ email, setEmail ] = useState()

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    try{
        signIn(email, password);
        toast.success('signed in successful')
        navigate('/Profile')
    } catch(e) {
        console.log(e.message);
        toast.error('wrong details')
     }

    e.preventDefault();
  }

  const clearEmailInput = () => {
    if (emailRef.current.value) {
      setRemoveEmailIcon(false);
    } else {
      setRemoveEmailIcon(true);
    }
  };

  const clearPasswordInput = () => {
    if (passwordRef.current.value) {
      setRemovePasswordIcon(false);
    } else {
      setRemovePasswordIcon(true);
    }
  };

  return (
    <div className="sign-in-bg max-w-[700px] min-h-[490px] my-14 mt-32 mx-auto px-5 py-3 rounded-lg ">
      <h2 className="pb-4 mt-4 font-bold text-3xl overflow-hidden text-gray-300">
        Welcome Back!
      </h2>
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

        <div>
          <label htmlFor="Name" className="text-gray-300">
            Password
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-xl">
            <input
              ref={passwordRef}
              onFocus={() => setRemovePasswordIcon(false)}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                setRemovePasswordIcon(true);
                clearPasswordInput();
              }}
              type="text"
              className="bg-input w-full p-2 rounded-2xl"
              placeholder="Password"
            />
            {removePasswordIcon === true ? (
              <AiFillLock
                className="absolute left-2 top-3 text-gray-400"
                color="teal"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex justify-end mt-5 color-green cursor-pointer hover:text-gray-300" onClick={() => {navigate('/Forget-password')}}>
          Forgot Password ?
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="border w-full p-2 bg-green text-gray-300 cursor-pointer hover:scale-90 ease-in-out duration-300"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-around mt-6 ">
        <p className="text-gray-300">Dont have an account?</p>
        <Link to='/sign-up'>
        <div className="sign-instead hover:text-gray-300 color-green">
          Sign Up
        </div>
        </Link>
      </div>
    </div>
  );
}
export default SignIn;
