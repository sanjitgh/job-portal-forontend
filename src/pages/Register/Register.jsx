import Lottie from "lottie-react";
import register from "../../assets/register.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message);
    })
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handelSubmit} className="card-body">
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
              value={"Register"}
            />
          </form>
        </div>
        <div>
          <Lottie animationData={register} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
