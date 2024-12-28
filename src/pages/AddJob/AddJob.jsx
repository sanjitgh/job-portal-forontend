import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  // state for date picker
  const [startDate, setStartDate] = useState(new Date());
  const {user} = useAuth();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newData } = data;

    newData.salaryRange = { min: parseInt(min), max: parseInt(max), currency };
    newData.requirements = newData.requirements.split("\n");
    newData.responsibilities = newData.responsibilities.split("\n");
    console.log(newData);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Job Applied Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs")
        }
      });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-2 min-h-screen">
        <h1 className="text-center text-5xl mb-10">Add a new job</h1>
        <div className="max-w-5xl mx-auto border rounded">
          <form onSubmit={handelSubmit} className="card-body">
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>

            {/* location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="location"
                className="input input-bordered"
                required
              />
            </div>

            {/* JobType */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">JobType</span>
              </label>
              <select defaultValue={"Choose a job type"} name="jobType" className="select select-bordered w-full">
                <option disabled>Choose a job type</option>
                <option>Full-time</option>
                <option>Part-time</option>
              </select>
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select defaultValue={"Choose a Category"} name="category" className="select select-bordered w-full">
                <option disabled>Choose a Category</option>
                <option>Marketing</option>
                <option>Web Developer</option>
              </select>
            </div>

            {/* salary range */}
            <p className="mt-3">Salary Range</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* min */}
              <div className="form-control">
                <input
                  name="min"
                  type="number"
                  placeholder="Min"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* max */}
              <div className="form-control">
                <input
                  name="max"
                  type="number"
                  placeholder="Max"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Currency */}
              <div className="form-control">
                <select
                defaultValue={"Choose Your Currency"}
                  name="currency"
                  className="select select-bordered w-full"
                >
                  <option disabled>Choose Your Currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                </select>
              </div>
            </div>

            {/* Company Name*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                name="company"
                type="text"
                placeholder="Company"
                className="input input-bordered"
                required
              />
            </div>

            {/* Hr-name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hr-name</span>
              </label>
              <input
              defaultValue={user.displayName}
                name="hr_name"
                type="text"
                placeholder="Hr-name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Hr-email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hr-email</span>
              </label>
              <input
              defaultValue={user?.email}
                name="hr_email"
                type="email"
                placeholder="Hr-email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Company Logo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Logo</span>
              </label>
              <input
                name="company_logo"
                type="url"
                placeholder="url"
                className="input input-bordered"
                required
              />
            </div>

            {/* Job requirements */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add requirements</span>
              </label>
              <textarea
                name="requirements"
                className="textarea textarea-bordered w-full h-28"
                placeholder="requirements should be line by line"
              ></textarea>
            </div>

            {/* Job responsibilities */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add responsibilities</span>
              </label>
              <textarea
                name="responsibilities"
                className="textarea textarea-bordered w-full h-28"
                placeholder="responsibilities should be line by line"
              ></textarea>
            </div>

            {/* Job Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full h-28"
                placeholder="Description"
              ></textarea>
            </div>

            {/* deadline */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <DatePicker
                name="applicationDeadline"
                className="input input-bordered w-full cursor-pointer"
                required
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* Status */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select defaultValue={"Status"} name="status" className="select select-bordered w-full"><option disabled>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* submit */}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Add Job"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
