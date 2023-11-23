import { faEdit, faPenToSquare, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/reducers/userSlice.";
import { useCallback, useEffect, useState } from "react";
import moment from "moment";
function UserAdmins(){
  const users = useSelector(state=>state.users)
  const userStudents = users?.filter(user=> user.role === 'Admin')
  const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(fetchCourses())
  // }
  //     ,[])
  const [isMobile , setIsMobile] = useState(false)
  const [availableWidth ,setAvailableWidth ] = useState(window.innerWidth)
  const handleMobileView = useCallback(() => {
    console.log(availableWidth,isMobile,userStudents);
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
            {userStudents?.map((user,index)=>(
              <div class="col-12 text-light  " key={index} id="item" >
              <button className={user.status?"table_btn publish_btn":"bg-secondary table_btn text-light"}>
              {user.status ? "Active" : "inActive"}
              </button>
                  <h3>Title</h3>
                  <p>{user.fName} {user.lName}</p>
                  <div class="d-flex  justify-content-between">
                      <div>
                          <h3>User id </h3>
                          <p>{user.userId}</p>
                      </div>
                      <div>
                        <h3>Role</h3>
                      <p>{user.role}</p>
                      </div>
                  </div>
                  <div class="icons2 d-flex justify-content-end gap-2">
                    <FontAwesomeIcon icon={faEdit} className="table-icon"/>
                    <FontAwesomeIcon icon={faTrash} onClick={()=>dispatch(removeUser(user))} className="table-icon"/>
                  </div>
              </div>))}
              <a class="btn row_btn col-12" href="#" role="button">Create New user</a>
            </div>)
            
          : <div class="user-sec  ">
          <Link to="/adminPanel/addUsers">
          <button className="btn color-yellow ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)',border:"1px solid #bf9b30"}}> Create new user</button>
          </Link>
              <div class="user-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">users</h4>
                <div class="search-div">
                  <input type="text" placeholder="Search For Jobs" style={{borderRadius:"5px",padding:"5px"}}/>
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="user-content">
                <table class="  table table-borderless text-light mx-auto table-responsive-sm    ">
                  <thead className="m-3">
                    <tr>
                    <th class="col">Title</th>
                    <th class="col">Status</th>
                    <th class="col">User id</th>
                    <th class="col">Role</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                  <tbody>
                    {
                      userStudents?.map((user,index)=>(
                        <tr key={index}>
                          <td>{user.fName} {user.lName}</td>
                          <td><button className={user.status ? "" :"bg-secondary text-light"}>
                          {user.status ? "Active" : "inActive"}</button></td>
                          <td>{user.userId}</td>
                          <td>{user.role}</td>
                          <td>
                          <Link href="">
                            <FontAwesomeIcon icon={faPenToSquare} className='color-yellow' />
                          </Link> 
                          <Link href="" onClick={()=>dispatch(removeUser(user))}>
                            <FontAwesomeIcon icon={faTrashCan} className='color-yellow' />
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
export default UserAdmins;