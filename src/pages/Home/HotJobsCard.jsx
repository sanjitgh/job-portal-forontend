import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    applicationDeadline,
    status,
  } = job;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={company_logo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h4 className="font-medium">Company: {company}</h4>
        <p className="flex gap-2 items-center">
          <FaLocationDot />
          {location}
        </p>
        <p>Job Type: {jobType}</p>
        <p>HR Name: {hr_name}</p>
        <p>HR Email: {hr_email}</p>
        <p>Category: {category}</p>
        <p>{description}</p>
        <div>
          {requirements.map((skill) => (
            <p className="rounded bg-slate-200 mr-2 mb-2 btn-sm btn">{skill}</p>
          ))}
        </div>
        <div>
          {responsibilities.map((res) => (
            <p className="rounded bg-green-200 mr-2 mb-2 btn-sm btn">{res}</p>
          ))}
        </div>
        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>Status: <span className="badge bg-purple-500 text-white">{status}</span></p>
        <p>Deadline: {applicationDeadline}</p>
        <div className="text-end">
            <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply Now!</Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
