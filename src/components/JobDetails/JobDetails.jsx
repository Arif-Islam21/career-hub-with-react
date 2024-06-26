import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobAplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobAplication(id);
    toast("You have applied sucesfuly");
  };
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Details coming soon</h2>
          <h2>Job details of :{job.job_title} </h2>
        </div>
        <div className="border md:col-span-1">
          <h2 className="text-4xl">Side Panel</h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
