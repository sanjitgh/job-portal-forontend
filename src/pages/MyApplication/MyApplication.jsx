import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import MyApplicationCard from "./MyApplicationCard";
import axios from "axios";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:5000/job-applications?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    axios
      .get(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => setJobs(res.data));
  }, [user.email]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 py-16 min-h-screen">
        <h1 className="text-4xl text-center mb-10">
          My Applications: {jobs.length}
        </h1>
        <div>
          {jobs.map((job) => (
            <MyApplicationCard key={job._id} job={job}></MyApplicationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyApplication;
