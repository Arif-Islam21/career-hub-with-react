import { IoLocationSharp } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="btn px-5 py-2 font-extrabold border-2 rounded border-lime-50 mr-4 text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="btn px-5 py-2 font-extrabold border-2 rounded border-lime-50 mr-4 text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="my-4 flex ">
            <h2 className="flex text-2xl mr-16">
              <IoLocationSharp className="" />
              {location}
            </h2>
            <h2 className="text-2xl flex">
              <CiDollar />
              {salary}
            </h2>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
