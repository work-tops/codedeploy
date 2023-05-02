import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
const SocialAuthButtons = () => (
  <Form.Group className="mb-0">
        <div sm={12} className="pe-sm-1 d-flex justify-content-center" >
          <div>
            <Button
              variant=""
              size="sm"
              className="bg-white border-danger text-danger mt-2 w-100 "
            >
              <Icon icon="icomoon-free:google-plus2" color="#df2020" width="24" height="24" />
              {' '}
              Google
            </Button>
            <Button
              variant=""
              size="sm"
              style={{color:'#0072b1',border:'1px solid #0072b1'}}
              className="bg-white  mt-2 w-100"
            >
              <Icon icon="radix-icons:linkedin-logo" color="#0072b1" width="24" height="24" />
              {' '}
              Linkdin
            </Button>
            <Button 
            variant=""
            size="sm"
            className="bg-white border-secondary text-secondary mt-2 w-100 "
            >
              Sign Up
            </Button>
          </div>
        </div>
     
  </Form.Group>
);

export default SocialAuthButtons;
