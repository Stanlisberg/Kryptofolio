import { useState, useEffect, createContext } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      console.log(response.user)
    })
    .catch((e) => {
      alert(e.message)
    })
    return setDoc(doc(db, "users", email), {
      watchList: [],
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
