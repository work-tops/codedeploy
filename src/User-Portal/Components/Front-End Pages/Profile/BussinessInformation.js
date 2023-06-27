// import React from "react";
// import ProfileMenu from "./ProfileMenu";
// import { Row, Col, Card, Button, Form } from "react-bootstrap";
// import profile_img from '../../Projectimages/Handyman.jpg'
// import Divider from "../../../TemplateAssets/common/Divider";
// function BussinessInformation() {
//     return (
//         <>
//             <Row>
//                 <Col lg={2}>
//                     <ProfileMenu />
//                 </Col>
//                 <Col lg={9}>
//                     <Card className="mt-4 mb-4">
//                         <Card.Body>
//                             <div className="d-flex justify-content-between">
//                                 <h5 className="mt-3 ms-5">Bussiness Settings</h5>
//                                 <div>
//                                     <Button className="btn border-0  bg-secondary">Edit</Button>
//                                     <Button className="btn border-0 ms-2  bg-primary">Save</Button>
//                                 </div>
//                             </div>
//                             <Divider />
//                             <h5 className="ms-5">Bussiness Information</h5>
//                             <div className="d-flex justify-content-between">
//                                 <div className="ms-5">
//                                     <Form.Label className="d-block">
//                                         Bussiness Name
//                                     </Form.Label>
//                                     <Form.Label className="d-block fw-semibold">
//                                         Rafiqur
//                                     </Form.Label>
//                                     <Form.Group className="mb-3">
//                                         <Form.Control value={"Rafiqur"} type="text" />
//                                     </Form.Group>
//                                     <Form.Label className="d-block">
//                                         Bussiness Email Address
//                                     </Form.Label>
//                                     <Form.Label className="d-block fw-semibold">
//                                         rr67@gmail.co
//                                     </Form.Label>
//                                     <Form.Group className="mb-3">
//                                         <Form.Control value={"rr67@gmail.co"} type="text" />
//                                     </Form.Group>
//                                     <Form.Label className="d-block">
//                                         No.Of Employee
//                                     </Form.Label>
//                                     <Form.Select>
//                                         <option>Myself Only</option>
//                                         <option>2-5</option>
//                                         <option>5-10</option>
//                                         <option>10 +</option>
//                                     </Form.Select>
//                                 </div>
//                                 <div className="ms-5">
//                                     <Form.Label className="d-block">
//                                         You Operate as
//                                     </Form.Label>
//                                     <Form.Group className="mb-3">
//                                         <Form.Select>
//                                             <option>
//                                                 Self-Employed / Sole Trader
//                                             </option>
//                                             <option>
//                                                 Limited Company
//                                             </option>
//                                             <option>
//                                                 Ordinary Partnership
//                                             </option>
//                                             <option>
//                                                 Limited Partnership
//                                             </option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                     <Form.Label className="d-block">
//                                         Phone Number
//                                     </Form.Label>
//                                     <Form.Label className="d-block fw-semibold">
//                                         +44567890
//                                     </Form.Label>
//                                     <Form.Group className="mb-3">
//                                         <Form.Control value={" +44567890"} type="text" />
//                                     </Form.Group>
//                                 </div>
//                                 <div>
//                                     <Button className="btn border-0  bg-secondary">Edit</Button>
//                                     <Button className="btn border-0 ms-2  bg-primary">Save</Button>
//                                 </div>
//                             </div>
//                             <Divider />
//                             <div className="d-flex justify-content-between">
//                                 <h5 className="ms-5">Bussiness Address</h5>
//                                 <div>
//                                     <Button className="btn border-0  bg-secondary">Edit</Button>
//                                     <Button className="btn border-0 ms-2  bg-primary">Save</Button>
//                                 </div>
//                             </div>
//                             <div className="m-5">
//                                 <Form.Group>
//                                     <Form.Control as="textarea" placeholder='Bussiness Address...' rows={8} />
//                                 </Form.Group>
//                             </div>

//                             <Divider />
//                             {/* <div className="d-flex justify-content-between">
//                                 <h5 className="ms-5">Billing Address</h5>
//                                 <div>
//                                     <Button className="btn border-0  bg-secondary">Edit</Button>
//                                     <Button className="btn border-0 ms-2  bg-primary">Save</Button>
//                                 </div>
//                             </div>
//                                 <Form.Group className="ms-5">
//                                     <Form.Check />
//                                     <Form.Check.Label>
//                                         Address and Billing Address Should be Same.
//                                     </Form.Check.Label>
//                                 </Form.Group>
//                             <div className="m-5">
//                                 <Form.Group>
//                                     <Form.Control as="textarea" placeholder='Billing Address...' rows={8} />
//                                 </Form.Group>
//                             </div>
//                             <Divider /> */}
//                             <h5 className="mt-3 mb-3 ms-5">Portfolio</h5>
//                             <div className="d-flex mb-3 justify-content-end">
//                                 <Button className="btn border-0 bg-success m-2">Add</Button>
//                                 <Button className="btn border-0 bg-danger m-2">Remove</Button>
//                             </div>
//                             <div className="d-flex justify-content-between ms-5">
//                                 <div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                     <div className="d-inline-block m-2">
//                                         <Form.Check />
//                                         <img src={profile_img} width="150px" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </>
//     )
// }
// export default BussinessInformation