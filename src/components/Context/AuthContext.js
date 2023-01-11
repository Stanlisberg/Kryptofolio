import { useState, useEffect, createContext } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // Sign Up
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      console.log(response.user)
      alert('Account created!')
      navigate('/')
    })
    .catch((e) => {
      alert(e.message)
    })
    return setDoc(doc(db, "users", email), { 
      watchList: [],
    });
  };

  // Sign In
  const signIn = (email, password) => {
     signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response.user)
    })
  }

  // Log Out
  const logOut = () => {
     signOut(auth)
     .then(() => {
     })
  }

  // Check if user is logged in
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  },[])

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
