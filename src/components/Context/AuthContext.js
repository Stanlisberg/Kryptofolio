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

  const signIn = (email, password) => {
     signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response.user)
    })
  }

  const logOut = () => {
     signOut(auth)
     .then(() => {
     })
    
  }

  // useEffect(() => {
  //   const subscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log(currentUser);
  //   });

  //   return subscribe();
  // }, []);
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
