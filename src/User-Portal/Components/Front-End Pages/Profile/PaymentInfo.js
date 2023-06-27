// import React from "react";
// import { Row, Col, Card, Button, Form } from "react-bootstrap";
// import ProfileMenu from "./ProfileMenu";
// import Divider from "../../../TemplateAssets/common/Divider";
// import atm from '../../Projectimages/atmcard.png'
// import PaymentTable from "../../../TemplateAssets/AdvanceTables/PaymentTable";

// function PaymentInfo() {
//     return (
//         <>
//             <Row>
//                 <Col lg={2}>
//                     <ProfileMenu />
//                 </Col>
//                 <Col lg={9}>
//                     <Card className="mt-4 mb-4">
//                         <Card.Body>
//                             <h5 className="mt-3 ms-5">Payment Details</h5>
//                             <Divider />
//                             <h6 className="mb-3 ms-5">Payment Methods</h6>
//                             <div className="d-flex justify-content-start">
//                                 <div>
//                                     <Row>
//                                         <Col lg={6}>
//                                             <img src={atm} width="100px" height="60px" className="ms-5 " />
//                                         </Col>
//                                         <Col lg={6}>
//                                             <p className="mb-0 fw-semibold">Visa : 6291</p>
//                                             <p className="mb-0 fw-semibold">Exp Date : 12/26</p>
//                                             <div className="d-flex mb-3 justify-content-end">
//                                                 <Button className="btn border-0 bg-success m-2">Add</Button>
//                                                 <Button className="btn border-0 bg-danger m-2">Remove</Button>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </div>
//                                 <div>
//                                     <Row>
//                                         <Col lg={6}>
//                                             <img src={atm} width="100px" height="60px" className="ms-5 " />
//                                         </Col>
//                                         <Col lg={6}>
//                                             <p className="mb-0 fw-semibold">Visa : 6291</p>
//                                             <p className="mb-0 fw-semibold">Exp Date : 12/26</p>
//                                             <div className="d-flex mb-3 justify-content-end">
//                                                 <Button className="btn border-danger bg-transparent text-danger m-2">Default</Button>
//                                                 <Button className="btn border-danger bg-transparent text-danger m-2">Remove</Button>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </div>
//                             </div>
//                             <Divider />
//                             <h6 className="mb-3 ms-5">Transactions</h6>
//                             <div className="d-flex m-5 justify-content-between">
//                             <PaymentTable/>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </>
//     )
// }
// export default PaymentInfo