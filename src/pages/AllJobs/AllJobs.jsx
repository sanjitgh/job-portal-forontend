import React, { useEffect, useState } from "react";
import HotJobsCard from "../Home/HotJobsCard";
import axios from "axios";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sort, setSort] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:5000/jobs?sort=${sort}`)
      .then(res => setJobs(res.data))
  }, [sort]);
  return (
    <div>
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-5xl text-center mb-8">All Jobs</h1>
        <div>
          <button onClick={() => setSort(!sort)} className={`btn mb-5 ${sort && 'bg-red-500'}`}>
            {sort ? " Sorted by Salary" : "Stort by Salary"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {jobs.slice(0, 6).map((job) => (
            <HotJobsCard key={job._id} job={job}></HotJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
