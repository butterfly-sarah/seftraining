import React from 'react';
import './customUi.css';
import { Link, Navigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CustomUi(props) {
  function handlelogin(){
    window.location.href = '/login';
  }
  return (
    <div className="popup-overlay">
      <h5 className='poptitle'>Please login to view this page</h5>
      <button onClick={props.onClose} className='popclose'>
      <FontAwesomeIcon icon={faXmark} />
      </button>
      <button className="nav-link  p-0 text-light"
        onClick={handlelogin}
      >
        Login
      </button>
    </div>
  );
}

export default CustomUi;