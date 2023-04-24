import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialAuthButtons = () => (
  <Form.Group className="mb-0">
        <div sm={12} className="pe-sm-1 d-flex justify-content-center" >
          <div>
            <Button
              variant=""
              size="sm"
              className="btn-outline-google-plus mt-2 w-100 "
            >
              <FontAwesomeIcon
                icon={['fab', 'google-plus-g']}
                transform="grow-8"
                className="me-2"
              />{' '}
              google
            </Button>
            <Button
              variant=""
              size="sm"
              className="btn-outline-primary  mt-2 w-100"
            >
              {/* <FontAwesomeIcon
            icon={['fab', 'facebook-square']}
            transform="grow-8"
            className="me-2"
          /> */}
              {' '}
              Linkdin
            </Button>
            <Button 
            variant=""
            size="sm"
            className="btn-outline-secondary mt-2 w-100 "
            >
              Sign Up
            </Button>
          </div>
        </div>
     
  </Form.Group>
);

export default SocialAuthButtons;
