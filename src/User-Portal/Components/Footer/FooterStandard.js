import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from '../../TemplateAssets/helpers/createMarkup';
import Section from '../../TemplateAssets/common/Section';
import { Icon } from '@iconify/react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../TemplateAssets/Images/MP-logo.png'
const FooterTitle = ({ children }) => (
  <h5 className="text-uppercase text-white opacity-85 mb-3">{children}</h5>
);

FooterTitle.propTypes = { children: PropTypes.node.isRequired };

const FooterList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map(({ title, to }, index) => (
      <li className="mb-1" key={index}>
        <Link className="text-600" to={to}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

FooterList.propTypes = { list: PropTypes.array.isRequired };

const FooterBlogList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map((blog, index) => (
      <li key={index}>
        <h5 className="fs-0 mb-0">
          <Link className="text-600" to="#!">
            {blog.title}
          </Link>
        </h5>
        <p className="text-600 opacity-50">
          {blog.date} &bull; {blog.read} read{' '}
          {blog.star && (
            <span dangerouslySetInnerHTML={createMarkup('&starf;')} />
          )}
        </p>
      </li>
    ))}
  </ul>
);

FooterBlogList.propTypes = { list: PropTypes.array.isRequired };

const FooterStandard = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div style={{background:'#003f6b'}}>
        <Section className="pt-0 pb-3 light">
          <div
            className="position-absolute  start-50 btn-back-to-top"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon
              icon="chevron-up"
              transform="rotate-360"
              className="text-600 cursor-pointer text-white"
            />
          </div>
          <Row className=''>
            <Col className='mt-4' lg={4}>
              <img src={logo} width="135px" />
              <div className='mt-2'>
              <Icon className='ms-2' icon="ic:round-facebook" color="#3b5998" width="32" height="32" />
              <Icon className='ms-2' icon="akar-icons:twitter-fill" color="#00acee" width="32" height="32" />
              <Icon className='ms-2' icon="mdi:instagram" color="#C13584" width="32" height="32"  />
              <Icon className='ms-2' icon="radix-icons:linkedin-logo" color="#0072b1" width="32" height="32" />
              </div>
            </Col>
            <Col className="ps-lg-6 ps-xl-8">
              <Row className="mt-5 mt-lg-0">
                <Col className='mt-5' xs={6} md={3}>
                  <p className='text-white'>Privacy Policy</p>
                </Col>
                <Col className='mt-5' xs={6} md={3}>
                  <p className='text-white'>Terms Of Use</p>
                </Col>
                <Col className="mt-5">
                  <p className='text-white'>Cookie Settings</p>
                </Col>
                <Col className="mt-5">
                  <p className='text-white'>Contact Us</p>
                </Col>
              </Row>
              {/* <div>
              <p>Copyrights@2023 MyProject.ai All Rights Reserved</p>
              </div> */}
            </Col>
          </Row>
        </Section>
      </div>
    </>
  );
};

export default FooterStandard;
