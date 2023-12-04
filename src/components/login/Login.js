import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import image from "../../assest/seff_logo_black.jpg"
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
import { setOnline } from "../redux/reducers/userSlice.";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './../alert/customUi.css';
import { confirmAlert } from "react-confirm-alert";

const LoginComponent = () => {
  
  const submit2 = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="popup-overlay">
        <h5 className='poptitle'>Incorrect Password</h5>
        <button onClick={onClose} className='popclose'>
        <FontAwesomeIcon icon={faXmark} />
        </button>
        <button className="nav-link  p-0 text-light"
          onClick={()=>{onClose();handlelogin()}}
        >
          Try again
        </button>
      </div>
        );
      }
    });
  };
  const navigate=useNavigate()
  function handlelogin(){
    navigate('/login')}
  const [showPassword, setShowPassword] = useState(false);
  const [userid, setuserid] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const Navigate = useNavigate()
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const users = useSelector(state=>state.users)
  const dispatch = useDispatch()
  const setdata = (e) => {
    console.log(users);
    e.preventDefault();
    const foundUser = users.find(user => user.email === userid && user.password === userpassword);
    if (foundUser) {
      dispatch(setOnline(foundUser));
      console.log(foundUser)
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    } else {
      submit2()
    }
    }

  return (
    <div>
    <div className="sign-login-form position-absolute  top-0 start-0 end-0 bg-dark  bottom-0 " style={{zIndex:'7',height:'100vh'}}>
      <div className="container">
        <div className="row align-items-center ">
          <div className="form-parent">
            <div className="form-container position-relative">
              <div className="form-img position-absolute">
                <img src={image} />
              </div>
              <div className="form-content">
                <form>
                  <div className="container  mt-5">
                    <div className="row mt-1">
                      <div className="col-12">
                        <div className="input-group mb-3 position-relative">
                            <FontAwesomeIcon
                              icon={faCircleUser}
                              className="user-icon position-absolute"
                            />
                          <input
                            onChange={(e) => {
                              setuserid(e.target.value);
                            }}
                            type="text"
                            className="form-control text-white radui"
                            placeholder="User ID"
                            value={userid}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group position-relative mb-3 position-relative">
                            <FontAwesomeIcon
                              icon={faLock}
                              className="lock-icon position-absolute"
                            />
                          <input
                            onChange={(e) => {
                              setuserpassword(e.target.value);
                            }}
                            type={showPassword ? "text" : "password"}
                            className="form-control text-white"
                            placeholder="Password"
                            value={userpassword}
                          />
                          <span
                            className="position-absolute pas"
                            onClick={togglePassword}
                          >
                            {showPassword ? (
                              <FontAwesomeIcon
                                icon={faEye}
                                className="eye-icon"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                className="eye-icon eye-slash"
                              />
                            )}
                          </span>
                        </div>
                        <div className="forget-password d-flex justify-content-end">
                          <p>Forgot your password?</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="submit-btn d-flex justify-content-center mt-3 mb-3">
                          <button
                            onClick={setdata}
                            type="submit"
                            className="btn login-btn text-uppercase text-white"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default LoginComponent;
