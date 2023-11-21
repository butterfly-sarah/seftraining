import React from 'react';
import './customUi.css';
import { Link } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomUi(props) {
  return (
    <div className="popup-overlay">
      <h5 className='poptitle'>Please login to view this page</h5>
      <button onClick={props.onClose} className='popclose'>
      <FontAwesomeIcon icon={faXmark} />
      </button>
      <button className="nav-link  p-0"
        onClick={() => {
          props.onClose();
        }}
      >
        <a  href="/login"  >Login</a>
      </button>
    </div>
  );
}

export default CustomUi;