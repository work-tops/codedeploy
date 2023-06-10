import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

const SocialAuthButtons = () => (
  <Form.Group className="mb-0">
    <div sm={12} className="pe-sm-1 d-flex justify-content-center" >
      <div>
        
        
        <div className='row mt-1 g-2'>
          <div className='col-6'>
            <Button
              variant=""
              size="sm"
              className="border-danger text-danger mt-2 w-100 "
            >
              <Icon icon="icomoon-free:google-plus2" color="#df2020" width="24" height="24" />
              {' '}
              Google
            </Button>
          </div>
          <div className='col-6'>
            <Button
              variant=""
              size="sm"
              style={{ color: '#0072b1', border: '1px solid #0072b1' }}
              className="bg-white  mt-2 w-100"
            >
              <Icon icon="radix-icons:linkedin-logo" color="#0072b1" width="24" height="24" />
              {' '}
              Linkdin
            </Button>
          </div>
          <div className='col-6'>
            <Button
              variant=""
              size="sm"
              style={{ color: '#3b5998', border: '1px solid #3b5998' }}
              className="bg-white  mt-2 w-100"
            >
              <Icon icon="ic:round-facebook" color="#3b5998" width="24" height="24" />
              {' '}
              Facebook
            </Button>
          </div>
          <div className='col-6'>
            <Button
              variant=""
              size="sm"
              style={{ color: '#00acee', border: '1px solid #00acee' }}
              className="bg-white  mt-2 w-100"
            >
              <Icon icon="ri:twitter-fill" color="#00acee" width="24" height="24" />
              {' '}
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>

  </Form.Group>
);

export default SocialAuthButtons;
