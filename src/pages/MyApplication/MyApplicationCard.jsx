import React from "react";

const MyApplicationCard = ({ job }) => {
  const {
    applicant_email,
    github,
    linkdin,
    resume,
    title,
    company_logo,
    company,
  } = job;
  return (

      <div className="overflow-x-auto mb-5">
        <table className="table w-full border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Field
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">
                Applicant Email
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {applicant_email}
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">GitHub</td>
              <td className="px-4 py-2 text-sm text-blue-500 hover:underline">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  {github}
                </a>
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">LinkedIn</td>
              <td className="px-4 py-2 text-sm text-blue-500 hover:underline">
                <a href={linkdin} target="_blank" rel="noopener noreferrer">
                  {linkdin}
                </a>
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">Resume</td>
              <td className="px-4 py-2 text-sm text-blue-500 hover:underline">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">Job Title</td>
              <td className="px-4 py-2 text-sm text-gray-800">{title}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">Company</td>
              <td className="px-4 py-2 text-sm text-gray-800">{company}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">Company Logo</td>
              <td className="px-4 py-2">
                <img
                  src={company_logo}
                  alt="Company Logo"
                  className="w-16 h-16 object-cover border rounded-full"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

  );
};

export default MyApplicationCard;
