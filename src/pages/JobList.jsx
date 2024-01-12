import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobs } from "../services/jobServices";


export const JobList = ({setToken, token}) => {

    const [jobs, setJobs] =([])
    const [sortBy, setSortBy] = useState("publication_date");

    const getAndSetJobs = () => {
        getJobs().then((jobsArray) => {
          setJobs(jobsArray);
        });
      };
    
      useEffect(() => {
        getAndSetJobs();
      }, []);

      const handleSort = (sortByOption) => {
        setSortBy(sortByOption);
      };
    
      const sortedJobs = [...jobs].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
      );
    

    let navigate = useNavigate();

    return (
        <div>
          <h2>Job List</h2>
    
          <div>
            <button onClick={() => handleSort("publication_date")}>
              Sort by Publication Date
            </button>
            <button onClick={() => handleSort("service_date")}>
              Sort by Service Date
            </button>
          </div>
    
          <ul>
            {sortedJobs.map((job) => (
              <li key={job.id}>
                {`Publication Date: ${job.publication_date}, Service Date: ${job.service_date}`}
              </li>
            ))}
          </ul>
        </div>
      );
    };