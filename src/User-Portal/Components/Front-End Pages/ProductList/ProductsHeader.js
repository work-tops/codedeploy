import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Background from '../../../TemplateAssets/common/Background';
import corner6 from '../../../TemplateAssets/assets/illustrations/corner-6.png';
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';



const ListingHeader = ({ layout }) => {
  return (
    <Card className="mb-3 m-4">
      <Card.Header className="position-relative">
        <h5 className="mb-0 mt-1">All Products</h5>
        <Background image={corner6} className="d-none d-md-block bg-card" />
      </Card.Header>
      <Card.Body className="pt-0 pt-md-3">
        <Row className="g-3 align-items-center">
          <Col xs="auto" className="d-xl-none">
            <Button
              className="position-relative p-0"
              size="sm"
              variant="link"
            >
              <FontAwesomeIcon icon="filter" className="fs-0 text-700" />
            </Button>
          </Col>
          <Col>
            <Form className="position-relative">
              <Form.Control
                type="search"
                placeholder="Search..."
                size="sm"
                aria-label="Search"
                className="rounded search-input ps-4"
              />
              <FontAwesomeIcon
                icon="search"
                className="fs--1 text-400 position-absolute text-400 start-0 top-50 translate-middle-y ms-2"
              />
            </Form>
          </Col>
          <Col xs="auto" className="col-md">
            <Row className="g-0 justify-content-end">
              <Col
                xs="auto"
                className="position-md-static position-absolute top-0 end-0 me-3 mt-3 mt-md-0"
              >
                <Form as={Row} className="mt-2 gx-2">
                  <Col xs="auto" className="d-none d-lg-block">
                    <small className='me-2'>Sort By:</small>
                  </Col>
                  <Col xs="auto">
                    <InputGroup size="sm">
                      <Form.Select
                        className=""
                        defaultValue="price"
                        style={{ maxWidth: '6.7rem' }}
                      >
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                        <option value="review">Review</option>
                      </Form.Select>
                      <InputGroup.Text
                        as={Button}
                        variant="link"
                        className="border border-300 text-700"
                      >
                        <FontAwesomeIcon
                          icon={ 'sort-amount-up'}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form>
              </Col>
              <Col xs="auto" className="p-0">
                <Row className="g-2 align-items-center">
                  <Col xs="auto" className="d-none d-lg-block">
                    <small className='me-2'>View :</small>
                  </Col>
                  <Col xs="auto">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Course Grid</Tooltip>}
                    >
                      <Link
                        to="productgrid1"
                        className={`me-3 ${layout === 'grid' ? 'text-700' : 'text-400 hover-700'
                          }`}
                      >
                        <Icon icon="material-symbols:grid-on-sharp" width="24" height="24" />
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Course List</Tooltip>}
                    >
                      <Link
                        to="/productlist1"
                        className={`me-2 ${layout === 'list' ? 'text-700' : 'text-400 hover-700'
                          }`}
                      >
                        <Icon icon="material-symbols:format-list-bulleted-rounded" width="24" height="24" />
                      </Link>
                    </OverlayTrigger>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


export default ListingHeader;
