import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  // useEffect(() => {
  //   const storedJobIds = getStoredJobApplication();
  //   if (jobs.length) {
  //     const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
  //     console.log(jobs, storedJobIds, jobsApplied);
  //   }
  // }, []);

  return (
    <div>
      <h2>Jobs I have applied</h2>
    </div>
  );
};

export default AppliedJobs;
