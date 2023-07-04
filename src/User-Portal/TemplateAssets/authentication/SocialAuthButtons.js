import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

const SocialAuthButtons = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 gap-2">
        <button style={{background:'#f3f3f3'}} className="btn btn-falcon-default icon-item fs--2 icon-item-xl">
          <span className="fs-0 fab fa-facebook-f mr-1 text-primary"></span>
        </button>
        <button style={{background:'#f3f3f3'}} className="btn btn-falcon-default icon-item fs--2 icon-item-xl">
          <span className="fs-0 fab fa-twitter mr-1 text-twitter"></span>
        </button>
        <button style={{background:'#f3f3f3'}} className="btn btn-falcon-default icon-item fs--2 icon-item-xl">
          <span className="fs-0 fab fa-google-plus-g mr-1 text-google-plus"></span>
        </button>
        <button style={{background:'#f3f3f3'}} className="btn btn-falcon-default icon-item fs--2 icon-item-xl">
          <span className="fs-0 fab fa-linkedin-in mr-1 text-info"></span>
        </button>
      </div>
    </>
  )
};

export default SocialAuthButtons;
