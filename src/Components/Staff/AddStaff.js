// import React from "react";
// import AiMenu from "../Menubar/AiMenu";
// import AiHeader from "../Header/AiHeader";
// function AddStaff() {
//     return (
//         <>
//             <div className="row">
//                 <div className="col-2">
//                     <AiMenu />
//                 </div>
//                 <div className="col-10">
//                     <div className="row">
//                         <div className="col-12">
//                             <AiHeader />
//                         </div>
//                         <div className="col-12 page-bg">
//                             <div className="ms-3">
//                                 <p className="ai-sub-title">Dashboard / My Staff</p>
//                                 <h4>My Staff</h4>

//                             </div>
//                             <br></br>
//                             <div className="global-com-setting-div">
//                                 <p className="ms-3 pt-2">Staff Details</p>
//                                 <p className="add-staff-des">Add details of staff here</p>
//                                 <form>
//                                     <label className="label">First Name</label>
//                                     <input type="text" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Last Name</label>
//                                     <input type="text" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Email Id</label>
//                                     <input type="email" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Password</label>
//                                     <input type="password" id="staff-ip-box" required />
//                                     <br></br>
//                                     <label className="label">Confirm Password</label>
//                                     <input type="text" id="staff-ip-box" required />
//                                 </form>
//                                 <p className="note-defi"><span className="not-titile-staff">Note :</span> </p>
//                             </div>
//                             <br></br>
//                             <div className="global-com-setting-div">
//                                 <p className="ms-3 pt-2">Permission</p>
//                                 <p className="add-staff-des">Add here permission for staff</p>
//                                 <input type="checkbox" className="ms-3" /><span>Select All</span>
//                                 <br></br>
//                                 <br></br>
//                                 <div className="row">
//                                     <div className="col-4">
//                                         <table className="ms-5">
//                                             <tr>
//                                                 <th><input type="checkbox" />Dashboard</th>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                     <div className="col-8">
//                                         <table className="ms-5">
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                             <br></br>
//                                             <tr>
//                                                 <th><input type="checkbox" />Freelance</th>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Edit</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> View</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Create</td>
//                                             </tr>
//                                             <tr>
//                                                 <td><input type="checkbox" /> Delete</td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                                 <br></br>
//                                 <button className="create-acc-btn">Save Changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default AddStaff




import { Card, Button, Row, Col, Form,Breadcrumb } from "react-bootstrap"
import AdminHeader from "../Menubar/AiMenu"



function AddStaff() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light">
                            <h5 className="mb-2">My Staff</h5>
                            <Breadcrumb className="fs--1 mt-2">
                                <Breadcrumb.Item>
                                    All Staff
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Add Staff
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <p className="fs--1 ">Here are the staff Members on your shop</p>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="text" placeholder="Confirm Password" maxLength={15} minLength={3} />
                                </Form.Group>
                                <Button className="mb-3" variant="primary">Submit</Button>
                                <p className="fs--1"><span className="fw-semibold me-1 text-danger">Note:</span>This Staff will be notified by email containing login details.</p>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light">
                            <h5 className="mb-2">Permission</h5>
                            <p className="fs--1 ">Here Add Permission for Staff</p>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Check type={"checkbox"}>
                                    <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                    <Form.Check.Label>Select All</Form.Check.Label>
                                </Form.Check>
                                <Row>
                                    <Col md={6}>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Dashboard</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Freelance</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label className="fw-bold">Freelance</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Edit</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>View</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Create</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Delete</Form.Check.Label>
                                        </Form.Check>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label className="fw-bold">Freelance</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Edit</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>View</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Create</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Delete</Form.Check.Label>
                                        </Form.Check>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label className="fw-bold">Freelance</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Edit</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>View</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Create</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Delete</Form.Check.Label>
                                        </Form.Check>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label className="fw-bold">Freelance</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Edit</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>View</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Create</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type={"checkbox"}>
                                            <Form.Check.Input type={"checkbox"} className="cursor-pointer" />
                                            <Form.Check.Label>Delete</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                </Row>
                                <Button variant="success">Save Changes</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default AddStaff