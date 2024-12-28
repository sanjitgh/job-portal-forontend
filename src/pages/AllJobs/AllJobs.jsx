import React, { useEffect, useState } from "react";
import HotJobsCard from "../Home/HotJobsCard";
import axios from "axios";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/jobs?sort=${sort}&search=${search}&minSalary=${minSalary}&maxSalary=${maxSalary}`
      )
      .then((res) => setJobs(res.data));
  }, [sort, search, maxSalary, minSalary]);
  return (
    <div>
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-5xl text-center mb-8">All Jobs</h1>
        <div className="flex gap-5">
          <button
            onClick={() => setSort(!sort)}
            className={`btn mb-5 ${sort && "bg-red-500"}`}
          >
            {sort ? " Sorted by Salary" : "Stort by Salary"}
          </button>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search job by location"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            onChange={(e) => setMinSalary(e.target.value)}
            type="text"
            placeholder="min salary"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            onChange={(e) => setMaxSalary(e.target.value)}
            type="text"
            placeholder="max salary"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <HotJobsCard key={job._id} job={job}></HotJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
