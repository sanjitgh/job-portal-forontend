import React, { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://job-portal-server-theta-three.vercel.app/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl text-center mb-8">Hot Jobs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {jobs.slice(0, 6).map((job) => (
            <HotJobsCard key={job._id} job={job}></HotJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotJobs;
