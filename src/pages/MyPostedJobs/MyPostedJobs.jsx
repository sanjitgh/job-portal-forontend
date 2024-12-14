import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-2">
        <h1 className="text-center text-5xl mb-10">
          My Posted Jobs: {jobs.length}
        </h1>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Job Title</th>
                <th>Job Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.jobType}</td>
                  <td className="badge bg-green-500">{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobs;
