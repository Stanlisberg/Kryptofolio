import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useState, useRef } from "react";

function SignIn() {
  const [removeEmailIcon, setRemoveEmailIcon] = useState(true);
  const [removePasswordIcon, setRemovePasswordIcon] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

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
    <div className="sign-bg max-w-[700px] min-h-[490px] my-14 mx-auto px-5 py-3 rounded-lg ">
      <h2 className="pb-4 mt-1 font-bold text-3xl overflow-hidden text-gray-300">
        Welcome Back!
      </h2>
      <div>
        
      </div>
      <form className="mt-5">
        <div className='mb-6'> 
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
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-around mt-3">
        <p className="text-gray-300">Dont have an account?</p>
        <div className="sign-instead hover:text-gray-300 color-green">
          Sign Up
        </div>
      </div>
    </div>
  );
}
export default SignIn;
