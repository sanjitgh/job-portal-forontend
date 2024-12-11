import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";



const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
   const unsubscrbe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
        
    })
    return () =>{
        unsubscrbe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvaider;
