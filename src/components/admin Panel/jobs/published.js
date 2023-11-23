import { faEdit, faPenToSquare, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeJob } from "../../redux/reducers/JobSlice.";
import { useCallback, useEffect, useState } from "react";
function Jobs(){

  const jobs = useSelector(state=>state.jobs)
  
  const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(fetchCourses())
  // }
  //     ,[])
  const [isMobile , setIsMobile] = useState(false)
  const [availableWidth ,setAvailableWidth ] = useState(window.innerWidth)
  const handleMobileView = useCallback(() => {
    console.log(availableWidth,isMobile);
    if (availableWidth <= 778) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [availableWidth]);

  useEffect(() => {
    const handleResize = () => {
      setAvailableWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleMobileView();
  }, [handleMobileView]);
  
    return(
        <>
        {
          isMobile ? (<div class="row m-0 mt-5 col-12" id="items" >
          {jobs?.map((job,index)=>(
            <div class="col-12 text-light  " key={index} id="item" >
            <button className={job.status?"table_btn publish_btn":"bg-secondary table_btn text-light"}>
            {job.status ? "opened" : "closed"}
            </button>
                <h3>company Name</h3>
                <p>{job.companyName}</p>
                <div class="d-flex flex-column  gap-2">
                    <div className="col-xs-12">
                        <h3>field</h3>
                        <p>{job.field}</p>
                    </div>
                    <div className="col-xs-12">
                      <h3>published data</h3>
                    <p>{job.date}</p>
                    </div>
                    <div className="col-xs-12">
                      <h3>published time</h3>
                    <p>{job.time}</p>
                    </div>
                </div>
                <div class="icons2 d-flex justify-content-end gap-2">
                  <FontAwesomeIcon icon={faEdit} className="table-icon"/>
                  <FontAwesomeIcon icon={faTrash} onClick={()=>dispatch(removeJob(job))} className="table-icon"/>
                </div>
            </div>))}
            <a class="btn row_btn col-12" href="#" role="button">Create New user</a>
          </div>)
          : <div class="article-sec  ">
          <Link to="/adminPanel/addJobs">
          <button className="btn btn-outline-warning ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)'}}> Create new job</button>
          </Link>
              <div class="article-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">Jobs</h4>
                <div class="search-div">
                  <input type="text" placeholder="Search For Jops"/>
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="article-content">
                <table class="  table table-borderless text-light mx-auto table-responsive-sm    ">
                  <thead className="m-3">
                    <tr>
                    <th class="col">Title</th>
                    <th class="col">position</th>
                    <th class="col">Status</th>
                    <th class="col">Posted at</th>
                    <th class="col">#Apllications</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                  <tbody>
                    {
                      jobs?.map((job,index)=>(
                        <tr key={index} className="text-light">
                          <td>{job.companyName}</td>
                          <td>{job.position}</td>
                          <td><button className={job.status?"table_btn publish_btn":"bg-secondary table_btn text-light"}>
                            {job.status ? "opened":"closed"}
                            </button></td>
                          <td>{job.date} <br/>{job.time}</td>
                          <td>{job.application}</td>
                          <td>
                          <Link href="">
                            <FontAwesomeIcon icon={faPenToSquare} className='text-warning' />
                          </Link> 
                          <Link href="" onClick={()=>dispatch(removeJob(job))}>
                            <FontAwesomeIcon icon={faTrashCan} className='text-warning' />
                          </Link>
                          </td>
                    </tr>
                      ))
                    }
                  </tbody>

            </table>
              </div>
            </div>
        }
        </>
    )
}
export default Jobs;