import { useState, useEffect, createContext, useContext } from 'react'
import { auth, db } from '../../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut  
 } from 'firebase/auth';
 import { doc, setDoc } from "firebase/firestore"; 


  const AuthContext = createContext();

  export const AuthContextProvider = ( {children} ) => {

  }