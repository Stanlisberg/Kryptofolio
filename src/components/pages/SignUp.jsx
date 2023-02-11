import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useState, useRef, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [removeEmailIcon, setRemoveEmailIcon] = useState(true);
  const [removePasswordIcon, setRemovePasswordIcon] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();

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

  const submitForm = (e) => {
    signUp(email, password);

    setDoc(doc(db, "users", email), {
      watchList: [],
    }).then(() => {});

    e.preventDefault();
  };

  return (
    <div className=" sign-up-bg max-w-[700px] min-h-[490px] my-14 mx-auto px-5 py-3 rounded-lg">
      <h2 className=" pb-6 mt-4 font-bold text-3xl overflow-hidden text-gray-300">
        Create Account!
      </h2>
      <form className="mt-5" onSubmit={submitForm}>
        <div className="mb-6">
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
        <Link to="/Forget-password">
          <p className="flex justify-end mt-5 hover:text-gray-300 color-green cursor-pointer">
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
      <div className="flex justify-around mt-6">
        <p className="text-gray-300">Aready have an account?</p>
        <Link to="/sign-in">
          <div className="sign-instead hover:text-gray-300 color-green">
            Sign In Instead
          </div>
        </Link>
      </div>
    </div>
  );
}
export default SignUp;
