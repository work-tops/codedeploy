// import React from 'react'
// import {
//   Button,
//   Card,
//   Col,
//   Image,
//   Form,
//   Row,
// } from 'react-bootstrap';
// import Flex from '../../../TemplateAssets/common/Flex';
// import { Link } from 'react-router-dom';
// import image from '../../../Components/Images/Granite.png'
// import { Icon } from '@iconify/react';
// import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard';
// import ListingHeader from './ProductsHeader';
// import ProductsFilters from './ProductsFilter';


// const ProductGrid = () => {

//   return (
//     <>
//       <Row>
//         <Col lg={12} className='mb-5'>
//           <NavbarStandard />
//         </Col>
//         <Col className='mt-5' lg={3}>
//           <ProductsFilters />
//         </Col>
//         <Col className='mt-5' lg={9}>
//           <ListingHeader />
//           {/*  */}
//           <Row className='m-4 d-flex justify-content-around'>
//             <Col lg={5} className='mb-3'>
//               <Card className="h-100  overflow-hidden">
//                 <Card.Body
//                   as={Flex}
//                   direction="column"
//                   justifyContent="between"
//                   className="p-0"
//                 >
//                   <div>


//                     <Col lg={12}>
//                       <Image src={image} alt="" className="w-100 h-100 fit-cover" />
//                     </Col>

//                     <div className="p-3">
//                       <h5 className="fs-0 mb-2">
//                         <Link
//                           to="#"
//                           style={{ fontSize: '1rem' }}
//                           className="text-dark"
//                         >
//                           CALACATTA LIGHT QUARTZ
//                         </Link>
//                       </h5>

//                     </div>
//                   </div>
//                   <Row className="g-0 mb-3 align-items-end">
//                     <Col className="ps-3">
//                       <h4 className="fs-1 text-warning d-flex align-items-center">
//                         <span style={{ fontSize: '1.2rem', color: '#f68f57' }}>£ 308.69</span>
//                         <del className="ms-2 fs--1 text-700">£ 139.90</del>

//                       </h4>
//                       <p className="mb-0 fs--1 text-800">
//                         92,632 Members Purchased
//                       </p>

//                       <Link to="/RequestQuote">
//                         <Button
//                           size="md"
//                           variant="falcon-default"
//                           style={{ background: '#003f6b' }}
//                           className="fs--1 text-600 mt-3 text-white white-space-nowrap w-50"

//                         >
//                           Get a Quote
//                         </Button>
//                       </Link>
//                     </Col>
//                     <Col xs="auto" className="pe-3">
//                       <Link to="/wishlist/product">
//                         <Button
//                           variant="falcon-default"
//                           size="sm"
//                           className="me-2 hover-danger"
//                         >
//                           <Icon icon="flat-color-icons:like" width="20" height="20" />
//                         </Button>
//                       </Link>
//                       <Link to="/Cart">
//                         <Button
//                           variant="primary"
//                           size="sm"
//                         >
//                           <Icon icon="ic:round-shopping-cart" color="white" width="20" height="20" />
//                         </Button>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//             </Col>
//             {/*  */}
//             <Col lg={5} className='mb-3'>
//               <Card className="h-100  overflow-hidden">
//                 <Card.Body
//                   as={Flex}
//                   direction="column"
//                   justifyContent="between"
//                   className="p-0"
//                 >
//                   <div>


//                     <Col lg={12}>
//                       <Image src={image} alt="" className="w-100 h-100 fit-cover" />
//                     </Col>

//                     <div className="p-3">
//                       <h5 className="fs-0 mb-2">
//                         <Link
//                           to="#"
//                           style={{ fontSize: '1rem' }}
//                           className="text-dark"
//                         >
//                           CALACATTA LIGHT QUARTZ
//                         </Link>
//                       </h5>

//                     </div>
//                   </div>
//                   <Row className="g-0 mb-3 align-items-end">
//                     <Col className="ps-3">
//                       <h4 className="fs-1 text-warning d-flex align-items-center">
//                         <span style={{ fontSize: '1.2rem', color: '#f68f57' }}>£ 308.69</span>
//                         <del className="ms-2 fs--1 text-700">£ 139.90</del>

//                       </h4>
//                       <p className="mb-0 fs--1 text-800">
//                         92,632 Members Purchased
//                       </p>

//                       <Link to="/RequestQuote">
//                         <Button
//                           size="md"
//                           variant="falcon-default"
//                           style={{ background: '#003f6b' }}
//                           className="fs--1 text-600 mt-3 text-white white-space-nowrap w-50"

//                         >
//                           Get a Quote
//                         </Button>
//                       </Link>
//                     </Col>
//                     <Col xs="auto" className="pe-3">
//                       <Link to="/wishlist/product">
//                         <Button
//                           variant="falcon-default"
//                           size="sm"
//                           className="me-2 hover-danger"
//                         >
//                           <Icon icon="flat-color-icons:like" width="20" height="20" />
//                         </Button>
//                       </Link>
//                       <Link to="/Cart">
//                         <Button
//                           variant="primary"
//                           size="sm"
//                         >
//                           <Icon icon="ic:round-shopping-cart" color="white" width="20" height="20" />
//                         </Button>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={5} className='mb-3'>
//               <Card className="h-100  overflow-hidden">
//                 <Card.Body
//                   as={Flex}
//                   direction="column"
//                   justifyContent="between"
//                   className="p-0"
//                 >
//                   <div>


//                     <Col lg={12}>
//                       <Image src={image} alt="" className="w-100 h-100 fit-cover" />
//                     </Col>

//                     <div className="p-3">
//                       <h5 className="fs-0 mb-2">
//                         <Link
//                           to="#"
//                           style={{ fontSize: '1rem' }}
//                           className="text-dark"
//                         >
//                           CALACATTA LIGHT QUARTZ
//                         </Link>
//                       </h5>

//                     </div>
//                   </div>
//                   <Row className="g-0 mb-3 align-items-end">
//                     <Col className="ps-3">
//                       <h4 className="fs-1 text-warning d-flex align-items-center">
//                         <span style={{ fontSize: '1.2rem', color: '#f68f57' }}>£ 308.69</span>
//                         <del className="ms-2 fs--1 text-700">£ 139.90</del>

//                       </h4>
//                       <p className="mb-0 fs--1 text-800">
//                         92,632 Members Purchased
//                       </p>

//                       <Link to="/RequestQuote">
//                         <Button
//                           size="md"
//                           variant="falcon-default"
//                           style={{ background: '#003f6b' }}
//                           className="fs--1 text-600 mt-3 text-white white-space-nowrap w-50"

//                         >
//                           Get a Quote
//                         </Button>
//                       </Link>
//                     </Col>
//                     <Col xs="auto" className="pe-3">
//                       <Link to="/wishlist/product">
//                         <Button
//                           variant="falcon-default"
//                           size="sm"
//                           className="me-2 hover-danger"
//                         >
//                           <Icon icon="flat-color-icons:like" width="20" height="20" />
//                         </Button>
//                       </Link>
//                       <Link to="/Cart">
//                         <Button
//                           variant="primary"
//                           size="sm"
//                         >
//                           <Icon icon="ic:round-shopping-cart" color="white" width="20" height="20" />
//                         </Button>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={5} className='mb-3'>
//               <Card className="h-100  overflow-hidden">
//                 <Card.Body
//                   as={Flex}
//                   direction="column"
//                   justifyContent="between"
//                   className="p-0"
//                 >
//                   <div>


//                     <Col lg={12}>
//                       <Image src={image} alt="" className="w-100 h-100 fit-cover" />
//                     </Col>

//                     <div className="p-3">
//                       <h5 className="fs-0 mb-2">
//                         <Link
//                           to="#"
//                           style={{ fontSize: '1rem' }}
//                           className="text-dark"
//                         >
//                           CALACATTA LIGHT QUARTZ
//                         </Link>
//                       </h5>

//                     </div>
//                   </div>
//                   <Row className="g-0 mb-3 align-items-end">
//                     <Col className="ps-3">
//                       <h4 className="fs-1 text-warning d-flex align-items-center">
//                         <span style={{ fontSize: '1.2rem', color: '#f68f57' }}>£ 308.69</span>
//                         <del className="ms-2 fs--1 text-700">£ 139.90</del>

//                       </h4>
//                       <p className="mb-0 fs--1 text-800">
//                         92,632 Members Purchased
//                       </p>

//                       <Link to="/RequestQuote">
//                         <Button
//                           size="md"
//                           variant="falcon-default"
//                           style={{ background: '#003f6b' }}
//                           className="fs--1 text-600 mt-3 text-white white-space-nowrap w-50"

//                         >
//                           Get a Quote
//                         </Button>
//                       </Link>
//                     </Col>
//                     <Col xs="auto" className="pe-3">
//                       <Link to="/wishlist/product">
//                         <Button
//                           variant="falcon-default"
//                           size="sm"
//                           className="me-2 hover-danger"
//                         >
//                           <Icon icon="flat-color-icons:like" width="20" height="20" />
//                         </Button>
//                       </Link>
//                       <Link to="/Cart">
//                         <Button
//                           variant="primary"
//                           size="sm"
//                         >
//                           <Icon icon="ic:round-shopping-cart" color="white" width="20" height="20" />
//                         </Button>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={5} className='mb-3'>
//               <Card className="h-100  overflow-hidden">
//                 <Card.Body
//                   as={Flex}
//                   direction="column"
//                   justifyContent="between"
//                   className="p-0"
//                 >
//                   <div>


//                     <Col lg={12}>
//                       <Image src={image} alt="" className="w-100 h-100 fit-cover" />
//                     </Col>

//                     <div className="p-3">
//                       <h5 className="fs-0 mb-2">
//                         <Link
//                           to="#"
//                           style={{ fontSize: '1rem' }}
//                           className="text-dark"
//                         >
//                           CALACATTA LIGHT QUARTZ
//                         </Link>
//                       </h5>

//                     </div>
//                   </div>
//                   <Row className="g-0 mb-3 align-items-end">
//                     <Col className="ps-3">
//                       <h4 className="fs-1 text-warning d-flex align-items-center">
//                         <span style={{ fontSize: '1.2rem', color: '#f68f57' }}>£ 308.69</span>
//                         <del className="ms-2 fs--1 text-700">£ 139.90</del>

//                       </h4>
//                       <p className="mb-0 fs--1 text-800">
//                         92,632 Members Purchased
//                       </p>

//                       <Link to="/RequestQuote">
//                         <Button
//                           size="md"
//                           variant="falcon-default"
//                           style={{ background: '#003f6b' }}
//                           className="fs--1 text-600 mt-3 text-white white-space-nowrap w-50"

//                         >
//                           Get a Quote
//                         </Button>
//                       </Link>
//                     </Col>
//                     <Col xs="auto" className="pe-3">
//                       <Link to="/wishlist/product">
//                         <Button
//                           variant="falcon-default"
//                           size="sm"
//                           className="me-2 hover-danger"
//                         >
//                           <Icon icon="flat-color-icons:like" width="20" height="20" />
//                         </Button>
//                       </Link>
//                       <Link to="/Cart">
//                         <Button
//                           variant="primary"
//                           size="sm"
//                         >
//                           <Icon icon="ic:round-shopping-cart" color="white" width="20" height="20" />
//                         </Button>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={5} className='mb-3'>
//               <Card className="h-100  overflow-hidden">
//                 <Card.Body
//                   as={Flex}
//                   direction="column"
//                   justifyContent="between"
//                   className="p-0"
//                 >
//                   <div>


//                     <Col lg={12}>
//                       <Image src={image} alt="" className="w-100 h-100 fit-cover" />
//                     </Col>

//                     <div className="p-3">
//                       <h5 className="fs-0 mb-2">
//                         <Link
//                           to="#"
//                           style={{ fontSize: '1rem' }}
//                           className="text-dark"
//                         >
//                           CALACATTA LIGHT QUARTZ
//                         </Link>
//                       </h5>

//                     </div>
//                   </div>
//                   <Row className="g-0 mb-3 align-items-end">
//                     <Col className="ps-3">
//                       <h4 className="fs-1 text-warning d-flex align-items-center">
//                         <span style={{ fontSize: '1.2rem', color: '#f68f57' }}>£ 308.69</span>
//                         <del className="ms-2 fs--1 text-700">£ 139.90</del>

//                       </h4>
//                       <p className="mb-0 fs--1 text-800">
//                         92,632 Members Purchased
//                       </p>

//                       <Link to="/RequestQuote">
//                         <Button
//                           size="md"
//                           variant="falcon-default"
//                           style={{ background: '#003f6b' }}
//                           className="fs--1 text-600 mt-3 text-white white-space-nowrap w-50"

//                         >
//                           Get a Quote
//                         </Button>
//                       </Link>
//                     </Col>
//                     <Col xs="auto" className="pe-3">
//                       <Link to="/wishlist/product">
//                         <Button
//                           variant="falcon-default"
//                           size="sm"
//                           className="me-2 hover-danger"
//                         >
//                           <Icon icon="flat-color-icons:like" width="20" height="20" />
//                         </Button>
//                       </Link>
//                       <Link to="/Cart">
//                         <Button
//                           variant="primary"
//                           size="sm"
//                         >
//                           <Icon icon="ic:round-shopping-cart" color="white" width="20" height="20" />
//                         </Button>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//               {/* pagination */}
//               <Card className="mt-3">
//                 <Card.Body>
//                   <Row className="g-3 flex-center justify-content-between">
//                     <Col xs="auto" className="d-flex align-items-center">
//                       <small className="d-none d-lg-block me-2">Show:</small>
//                       <Form.Select
//                         size="sm"
//                         // value={itemsPerPage}
//                         // onChange={({ target }) => {
//                         //     setItemsPerPage(target.value);
//                         //     setCoursePerPage(target.value);
//                         // }}
//                         style={{ maxWidth: '4.875rem' }}
//                       >
//                         <option >1</option>
//                         <option >2</option>
//                         <option >3</option>
//                         <option >All</option>
//                       </Form.Select>
//                     </Col>
//                     <Col xs="auto" className="d-flex">
//                       <div>
//                         <Button
//                           variant="falcon-default"
//                           className="me-2"
//                         >
//                           Preview
//                         </Button>
//                       </div>

//                       <div>
//                         <Button
//                           variant="falcon-default"
//                         >
//                           Next
//                         </Button>

//                       </div>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//               {/* pagination */}
//             </Col>
//           </Row>

//         </Col>
//       </Row>
//       {/*  */}

//     </>
//   );
// };


// export default ProductGrid;
