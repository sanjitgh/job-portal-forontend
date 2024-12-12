import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  const handelLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(from)
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
