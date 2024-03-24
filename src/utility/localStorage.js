const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("jobApplications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  } else [];
};

const saveJobAplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const exist = storedJobApplications.find((jobId) => jobId === id);
  if (!exist) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "jobApplications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { getStoredJobApplication, saveJobAplication };
