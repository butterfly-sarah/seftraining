import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../footer/Footer'
import Title from '../title/title'
import './addexam.css'
const courses=["react js development","front end angular","backend nodejs"]
function Addexam(){
    return(<>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <div class="exams m-3 container mx-auto add-exam">
        <div className='container mx-auto '>
            <Title title={'Create New Exam'}/>
        </div>
        <div class="exams-container position-relative mt-3 ">
        <div className='d-flex justify-content-between container mb-5'>
        <div className='' style={{fontWeight:"900"}}>
        <h3 class=" text-capitalize text-white" >add exam details</h3>
        
        </div>
        <button className="rounded border-0  course_button text-light px-5 py-0  text-uppercase" style={{fontWeight:"300"}}>publish</button>
        </div>
        </div>
        <h5 class=" text-capitalize text-white m-3 my-5">exam information</h5>
        <form>
        <div className="rounded m-2 row px-md-5 darked">
            <span className="col-md-8 px-md-3">
                <label for="coursename" className="text-light text-capitalize fw-bold d-block">course name</label>
                <select name="coursename" className="w-100 rounded">
                    <option hidden></option>
                    {courses.map((coursename)=>(<option value={coursename} style={{background:"#ffffff1e"}}>{coursename}</option>))}
                </select>
            </span>
            <span className="col-md-4 px-md-3">
                <label for="date" className="text-light text-capitalize fw-bold d-block">date</label>
                <input type="date" name="date" className="w-100 rounded"></input>
            </span>
            <span className="col-md-4 px-md-3">
                <label for="duration" className="text-light text-capitalize fw-bold d-block">duration</label>
                <input type="time" name="duration" className="w-100 rounded"></input>
            </span>
            <span className="col-md-8 px-md-3">
                <label for="link" className="text-light text-capitalize fw-bold d-block">link</label>
                <input type="url" name="link" className="w-100 rounded"></input>
            </span>
            
        </div>
        <span className="row d-flex justify-content-end my-5 m-2  px-md-0">
            <button className="col-sm-10 col-md-1 rounded border-0 text-uppercase course_button bg-secondary text-light px-1 py-2 font-weight-bold mx-md-3 my-2" style={{fontWeight:"300"}}>cancel</button>
            <button className="col-sm-10 col-md-1 rounded border-0 text-uppercase course_button text-light px-1 py-2  font-weight-bold my-2" style={{fontWeight:"300"}}>save</button>
            </span>
        </form>
        </div>
        
        <Footer/>
    </>)
}
export default Addexam