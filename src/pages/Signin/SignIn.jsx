import Lottie from "lottie-react";
import signin from "../../assets/signin.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handelSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handelSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              value={"Sign In"}
            />
          </form>
        </div>
        <div>
          <Lottie animationData={signin} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
