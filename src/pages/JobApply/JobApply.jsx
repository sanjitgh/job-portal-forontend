import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkdin,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Applied Successfully Done.",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/myApplication")
        }
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
        <h1 className="text-center text-5xl font-bold my-10">Apply Now</h1>
        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkdin URL</span>
            </label>
            <input
              name="linkdin"
              type="url"
              placeholder="linkdin"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>
            <input
              name="github"
              type="url"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              name="resume"
              type="url"
              placeholder="resume"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Apply" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
