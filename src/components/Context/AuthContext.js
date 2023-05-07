import { useState, useEffect, createContext } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const data = auth.currentUser;
  console.log(data?.email);

  //----------Sign Up
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
       toast.success('Account created!')
       navigate('/')
    })
    .catch(err => {
      if(err) {
        console.log(err)
        toast.error('Email alrealy exist')
      }
    })
  };

  //------------Sign In
  const signIn = (email, password) => {
     signInWithEmailAndPassword(auth, email, password)
     .then(() => {
        toast.success('Signed in successful')
        navigate('/')
      })
     .catch(err => {
        if(err) {
          console.log(err)
          toast.error('User not found')
        }
     })
  } 

  //-----------Log Out
  const logOut = () => {
     signOut(auth)
     .then(() => {
     })
  }

  //----------Check if user is logged in
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
