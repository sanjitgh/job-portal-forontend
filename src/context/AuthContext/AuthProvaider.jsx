import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebase.init";

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvaider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvaider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrbe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log("login token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "http://localhost:5000/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("logout token", res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unsubscrbe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvaider;
