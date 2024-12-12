import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
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
  } = useLoaderData();

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="card bg-white shadow-2xl rounded-lg overflow-hidden">
        <figure className="bg-gray-100 p-10">
          <img
            src={company_logo || "https://via.placeholder.com/80"}
            alt={`${company} Logo`}
            className="rounded-full h-24 w-24 object-contain shadow-lg"
          />
        </figure>
        <div className="card-body px-8 py-6 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-md text-gray-600 mb-1">
            Category:{" "}
            <span className="text-gray-800 font-medium">{category}</span>
          </p>
          <p className="text-md text-gray-600 mb-1">
            Company:{" "}
            <span className="text-gray-800 font-medium">{company}</span>
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="badge badge-primary text-sm py-2 px-4">
              {jobType}
            </span>
            <span className="badge badge-secondary text-sm py-2 px-4">
              {location}
            </span>
            <span
              className={`badge text-sm py-2 px-4 ${
                status === "active" ? "badge-success" : "badge-warning"
              }`}
            >
              {status}
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Salary Range
            </h3>
            <p className="text-gray-700">
              {salaryRange
                ? `${salaryRange.min} - ${
                    salaryRange.max
                  } ${salaryRange.currency.toUpperCase()}`
                : "Not specified"}
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Job Description
            </h3>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Requirements
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              {requirements?.length > 0 ? (
                requirements.map((req, index) => <li key={index}>{req}</li>)
              ) : (
                <li>No specific requirements mentioned</li>
              )}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Responsibilities
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              {responsibilities?.length > 0 ? (
                responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))
              ) : (
                <li>No specific responsibilities mentioned</li>
              )}
            </ul>
          </div>
          <div className="mt-6 border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800">HR Contact</h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Name:</span> {hr_name}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> {hr_email}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Application Deadline:</span>{" "}
              {applicationDeadline}
            </p>
          </div>
          <div>
            <Link to={`/jobApply/${_id}`}>
              <button className="btn bg-green-500 text-white">
                Apply Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
