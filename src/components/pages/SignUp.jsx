import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { useState, useRef, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [removeNameIcon, setRemoveNameIcon] = useState(true);
  const [removeEmailIcon, setRemoveEmailIcon] = useState(true);
  const [removePasswordIcon, setRemovePasswordIcon] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signUp } = useContext(AuthContext);
  
  const navigate = useNavigate()

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

  const submitForm= (e) => {
      signUp(email, password);
      navigate('/')

    e.preventDefault();
  }

  return (
    <div className=" sign-up-bg max-w-[700px] min-h-[600px] my-14 mx-auto px-5 py-3 rounded-lg">
      <h2 className=" pb-6 mt-1 font-bold text-3xl overflow-hidden text-gray-300">
        Create Account!
      </h2>
      <form onSubmit={submitForm}>
        <div className="mt-4 mb-5">
          <label htmlFor="Name" className="text-gray-300">
            Name
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-xl">
            <input
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
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

        <div className="mb-5">
          <label htmlFor="Name" className="text-gray-300">
            Email
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-xl">
            <input
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
        <Link to='/Forget-password'>
        <p className="flex justify-end mt-5 color-green cursor-pointer">
          Forgot Password ?
        </p>
        </Link>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="border w-full p-2 bg-green text-gray-300 cursor-pointer hover:scale-90 ease-in-out duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex justify-around mt-8">
        <p className="text-gray-300">Aready have an account?</p>
        <Link to='/sign-in'>
        <div className="sign-instead hover:text-gray-300 color-green">
          Sign In Instead
        </div>
        </Link>
      </div>
    </div>
  );
}
export default SignUp;
