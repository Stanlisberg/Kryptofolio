import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { useState, useRef } from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

function SignUp() {
  const [ name, setName] = useState();
  const [ email, seEmail ] = useState();
  const [ error, setError ] = useState(); 
  const [removeNameIcon, setRemoveNameIcon] = useState(true);
  const [removeEmailIcon, setRemoveEmailIcon] = useState(true);
  const [removePasswordIcon, setRemovePasswordIcon] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signUp } = useContext(AuthContext);

  const clearNameInput = () => {
    if (nameRef.current.value) {
      setRemoveNameIcon(false);
    } else {
      setRemoveNameIcon(true);
    }
  };

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
    <div className="max-w-[600px] mx-auto min-h-[500px] px-4 py-20">
      <h2 className=" pb-6 mt-1 font-bold text-3xl overflow-hidden text-gray-300">
        Create Account!
      </h2>
      <form className="">
        <div className="mt-4 mb-5">
          <label htmlFor="Name" className="text-gray-300">
            Name
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-xl">
            <input
              ref={nameRef}
              onChange={(e) => console.log(e.target.value)}
              onFocus={() => setRemoveNameIcon(false)}
              onBlur={() => {
                setRemoveNameIcon(true);
                clearNameInput();
              }}
              type="text"
              className="bg-input w-full p-2 rounded-2xl"
              placeholder="Name"
            />
            {removeNameIcon === true ? (
              <FaUserTie
                className="absolute left-2 top-3 text-gray-400"
                color="teal"
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className='mb-5'>
          <label htmlFor="Name" className="text-gray-300">
            Email
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-xl">
            <input
              ref={emailRef}
              onFocus={() => setRemoveEmailIcon(false)}
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
            {/* <div className='max-w-[500px] border'> */}
            <input
              ref={passwordRef}
              onFocus={() => setRemovePasswordIcon(false)}
              onBlur={() => {
                setRemovePasswordIcon(true);
                clearPasswordInput();
              }}
              type="text"
              className="bg-input w-full p-2 rounded-2xl"
              placeholder="Password"
            />
            {/* </div> */}
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
        <p className="flex justify-end mt-5 color-green cursor-pointer">
          Forgot Password ?
        </p>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="border w-full p-2 bg-green text-gray-300 cursor-pointer hover:scale-90 ease-in-out duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex justify-around mt-3">
        <p className="text-gray-300">Aready have an account?</p>
        <div className="sign-instead hover:text-gray-300 color-green">
          Sign In Instead
        </div>
      </div>
    </div>
  );
}
export default SignUp;
