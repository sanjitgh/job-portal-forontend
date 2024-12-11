import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handelLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-center mb-7">
      <div className="divider">OR</div>
      <button onClick={handelLogin} className="btn">
        Login with google
      </button>
    </div>
  );
};

export default SocialLogin;
