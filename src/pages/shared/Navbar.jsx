import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/all-jobs"}>All Jobs</NavLink>
      <NavLink to={"/myApplication"}>My Application</NavLink>
      <NavLink to={"/addJob"}>Add Job</NavLink>
      <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
      
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="flex gap-3 items-center text-3xl font-medium">
        <img className="w-14" src={logo} alt="" />
        Job Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <button onClick={signOutUser} className="btn bg-cyan-400">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/register"} className="btn">
              Register
            </Link>
            <Link to={"/signin"} className="btn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
