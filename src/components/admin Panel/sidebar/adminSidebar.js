import { Link } from 'react-router-dom';
import './AdminSideBar.css'
import { useState } from 'react';
function AdminSideBar(){
  const [cirtificateBtn ,setCertifiCateeBtn] = useState(false)
  const [userDropdown ,setuserDropdown] = useState(true)
  const [articleDropdown ,setarticleDropdown] = useState(false)
  const [jobDropdown ,setjobDropdown] = useState(false)
  const [courseDropdown ,setcourseDropdown] = useState(false)

  const handleShowDropdown = (drop)=>{
    switch (drop) {
      case 'user':
          setuserDropdown(true)
          setjobDropdown(false)
          setcourseDropdown(false)
          setarticleDropdown(false)
        break;
        case 'job':
          setuserDropdown(false)
          setjobDropdown(true)
          setcourseDropdown(false)
          setarticleDropdown(false)
        break;
        case 'course':
          setuserDropdown(false)
          setjobDropdown(false)
          setcourseDropdown(true)
          setarticleDropdown(false)
        break;
        case 'article':
          setuserDropdown(false)
          setjobDropdown(false)
          setcourseDropdown(false)
          setarticleDropdown(true)
        break;
      default:
        break;
    }
  }
    return(
      <>
        <div class="users-sec" >
        <div className='parent-users'> 
          <h2 onClick={()=>{setCertifiCateeBtn(false);handleShowDropdown('user')}}>
            <Link to="users" className={userDropdown ? 'color-yellow':'' }>Users</Link></h2>

            {/*  */}
          <div class="lg-ul">
            <ul>
              <li><Link to="userAdmins">Admins</Link></li>
              <li><Link to="#">Editors</Link></li>
              <li><Link to="userInstructors">Instructors</Link></li>
              <li onClick={()=>setCertifiCateeBtn(true)}><Link to="userstudents">Students</Link></li>
            </ul>
          </div>
          
        </div>


        <div className='parent-users'>
          <h2 onClick={()=>{setCertifiCateeBtn(false);handleShowDropdown('article')}}><Link to="articles"  className={articleDropdown ? 'color-yellow ':'' }>Articles</Link></h2>
            
          <div class="lg-ul">
            <ul>
            <li><Link to="publishedarticles">Published Articles</Link></li>
            <li><Link to="">Scheduled Articles</Link></li>
            <li><Link to="draftarticles">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>

        <div className='parent-users'>
          <h2 onClick={()=>{setCertifiCateeBtn(false);handleShowDropdown('job')}} ><Link to="Jobbs" className={jobDropdown ? 'color-yellow':'' }>Jobs</Link></h2>
        
          <div class="lg-ul">
            <ul>
            <li><Link to="">Published Jobs</Link></li>
            <li><Link to="">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>

        <div className='parent-users '>
          <h2 onClick={()=>{setCertifiCateeBtn(false);handleShowDropdown('course')}} ><Link to="courses" className={courseDropdown ? 'color-yellow':'' }>Courses</Link></h2>
            
          <div class="lg-ul">
             <ul>
            <li><Link to="publishedcourses">Published Courses</Link></li>
            <li><Link to="">Scheduled Courses</Link></li>
            <li><Link to="draftcourses">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>
        {
          cirtificateBtn ?<Link to="addCertificate" > <button className=' btn text-light w-100' style={{background:"#bf9b30"}}> Add Certificate</button></Link>:''
        }

      </div>
      <div className='drop container w-100 mt-3'>
            {
              userDropdown ?( <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-xs-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                users
              </button>
              <ul className='dropdown-menu col-xs-12'>
                <li ><Link className='dropdown-item text-dark' to="userAdmins">Admins</Link></li>
                <li><Link className='dropdown-item text-dark' to="userInstructors">Instructors</Link></li>
                <li><Link className='dropdown-item text-dark' to="userstudents">Students</Link></li>
              </ul>
            </div>):''
            }

            {
              articleDropdown ? (<div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-xs-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                articles
              </button>
              <ul className='dropdown-menu col-xs-12'>
                <li><Link className='dropdown-item text-dark' to="publishedarticles">Published articles</Link></li>
                <li><Link className='dropdown-item text-dark' to="#">Scheduled articles</Link></li>
                <li><Link className='dropdown-item text-dark' to="draftarticles">Saved Drafts articles</Link></li>
              </ul>
            </div>):''
            }

            {
              jobDropdown ? (<div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-xs-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                jobs
              </button>
              <ul className='dropdown-menu col-xs-12'>
                <li><Link className='dropdown-item text-dark' to="#">Published jobs</Link></li>
                <li><Link className='dropdown-item text-dark' to="#">Scheduled jobs</Link></li>
                <li><Link className='dropdown-item text-dark' to="#">Saved Drafts</Link></li>
              </ul>
            </div>):''
            }
            {
              courseDropdown ?(<div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-xs-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                courses
              </button>
              <ul className='dropdown-menu col-xs-12'>
                <li><Link className='dropdown-item text-dark' to="publishedcourses">Published courses</Link></li>
                <li><Link className='dropdown-item text-dark' to="#">Scheduled courses </Link></li>
                <li><Link className='dropdown-item text-dark' to="draftcourses">Saved Drafts</Link></li>
              </ul>
            </div>
          ): ''
            }
            </div> 
      </>
    )
}
export default AdminSideBar;