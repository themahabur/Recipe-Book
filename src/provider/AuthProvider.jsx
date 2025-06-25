import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  
  const provider = new GoogleAuthProvider();


  const signGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const logoutUser = () => {
    return signOut(auth)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const info = {
    userData,
    loading,
    createUser,
    profileUpdate,
    loginUser,
    logoutUser,
    setLoading,
    signGoogle
  };

  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
