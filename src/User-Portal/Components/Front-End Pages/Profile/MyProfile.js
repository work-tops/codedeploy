import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Table, Dropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import student from '../../Projectimages/student.png'
import chip from '../../Projectimages/chip.png'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import CardDropdown from "../../../TemplateAssets/common/CardDropdown";
import coverimg from '../../Projectimages/7.jpg'
import mastercard from '../../Projectimages/master-card.png'
import PaymentTable from "../../../TemplateAssets/AdvanceTables/PaymentTable";
import InvoiceTable from "../../../TemplateAssets/AdvanceTables/InvoiceTable";

function MyProfile() {
    const [user, setUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        setUser(_json);
    }, [])

    // Calender
    const events = [
        { title: 'Meeting', start: new Date() }
    ]


    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12} className="mt-4">
                        {/* Profile Header */}
                        <Card size="5xl" style={{ backgroundImage: `url(${coverimg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className="m-3">
                            <Card.Body className="d-flex gap-2 flex-wrap flex-between-center">
                                <div>
                                    <h5 className="mb-2 text-white">Profile</h5>
                                    {/* <h6 className="text-primary">Private</h6> */}
                                    <img
                                        width="100px"
                                        src={student}
                                        alt="student profile image"
                                    />
                                </div>
                                <div>
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <CardDropdown iconClassName="fs--1" drop="bottom">
                                            <div className="py-2">
                                                <Dropdown.Item href="#!" className="text-danger">
                                                    Logout
                                                </Dropdown.Item>
                                            </div>
                                        </CardDropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        {/* Profile Header */}


                        {/* Content */}
                        <Row className="g-3 mb-3">
                            <Col xxl={6}>
                                <Row className="g-3">
                                    <Col xs={12}>
                                        {/* StudentInfo */}
                                        <Card className="m-3 font-sans-serif">
                                            <Card.Header as="h5" className="bg-white text-capitalize">
                                                Personal Information
                                            </Card.Header>
                                            <Card.Body className="d-flex gap-3 flex-column flex-sm-row align-items-center">

                                                <Table borderless className="fs--1 fw-medium mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                First Name:
                                                            </td>
                                                            <td className="p-1 text-600">{user?.first_name} </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Last Name :
                                                            </td>
                                                            <td className="p-1 text-600">{user?.last_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Email:
                                                            </td>
                                                            <td className="p-1">
                                                                <Link to="mailto:goodguy@nicemail.com" className="text-600">
                                                                {user?.email}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Mobile No:
                                                            </td>
                                                            <td className="p-1">
                                                                <Link to="tel:+01234567890" className="text-600">
                                                                {user?.phone}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Address:
                                                            </td>
                                                            <td className="p-1">
                                                                <Link to="1 De La Warr Way, Cambridge, CB23 6DX" className="text-600">
                                                                {user?.address}
                                                                </Link>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                <div className="position-absolute top-0 end-0 m-3">
                                                    <CardDropdown iconClassName="fs--1" drop="bottom">
                                                        <div className="py-2">
                                                            <Dropdown.Item onClick={() => setIsEdit(true)} href="#!">Edit</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setIsEdit(false)} href="#!">Save</Dropdown.Item>
                                                        </div>
                                                    </CardDropdown>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        {/* StudentInfo */}
                                    </Col>
                                    <Col xs={12}>
                                        {/* Bussiness Information */}
                                        <Card className="m-3 font-sans-serif">
                                            <Card.Header as="h5" className="bg-white text-capitalize">
                                                Bussiness Information
                                            </Card.Header>
                                            <Card.Body className="d-flex gap-3 flex-column flex-sm-row align-items-center">
                                                {/* <img
                                                width="100px"
                                                src={student}
                                                alt="student profile image"
                                            /> */}
                                                <Table borderless className="fs--1 fw-medium mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Bussiness Name:
                                                            </td>
                                                            <td className="p-1 text-600">Worktops </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Bussiness Email:
                                                            </td>
                                                            <td className="p-1">
                                                                <Link to="mailto:goodguy@nicemail.com" className="text-600">
                                                                    testworktops@gmail.com
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Phone No:
                                                            </td>
                                                            <td className="p-1">
                                                                <Link to="tel:+01234567890" className="text-600">
                                                                    +012-345-67890
                                                                </Link>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                Bussiness Address:
                                                            </td>
                                                            <td className="p-1">
                                                                <Link to="1 De La Warr Way, Cambridge, CB23 6DX" className="text-600">
                                                                    1 De La Warr Way, Cambridge, CB23 6DX
                                                                </Link>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                You Operate as:
                                                            </td>
                                                            <td className="p-1 text-600">
                                                                <Link to="Limited Company" className="text-600">
                                                                    Limited Company
                                                                </Link>
                                                                {/* <Form.Select className="w-25" style={{ height: '30px', fontSize: '12px' }}>
                                                                <option>Self-Employed/Sole Trader</option>
                                                                <option>Limited Company</option>
                                                                <option>Ordinary Partnership</option>
                                                                <option>Limited Partnership</option>
                                                            </Form.Select> */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-1" style={{ width: '35%' }}>
                                                                No.Of Employee:
                                                            </td>
                                                            <td className="p-1 text-600">
                                                                <Link to="Myself Only" className="text-600">
                                                                    Myself Only
                                                                </Link>
                                                                {/* <Form.Select className="w-25" style={{height:'30px',fontSize:'12px'}}>
                                                                <option>Myself Only</option>
                                                                <option>2-5</option>
                                                                <option>5-10</option>
                                                                <option>10+</option>
                                                            </Form.Select> */}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                <div className="position-absolute top-0 end-0 m-3">
                                                    <CardDropdown iconClassName="fs--1" drop="bottom">
                                                        <div className="py-2">
                                                            <Dropdown.Item href="#!">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#!">Save</Dropdown.Item>
                                                        </div>
                                                    </CardDropdown>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        {/* Bussiness Information */}
                                    </Col>
                                    <Col md={6}>
                                        {/* Payment */}
                                        <Card className="m-3 h-100">
                                            <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                                                <h5 className="text-capitalize">
                                                    Payment Methods
                                                </h5>
                                                <div>
                                                    <div className="position-absolute top-0 end-0 m-3">
                                                        <CardDropdown iconClassName="fs--1" drop="bottom">
                                                            <div className="py-2">
                                                                <Dropdown.Item href="#!" className="text-success">
                                                                    Add
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href="#!" className="text-secondary">
                                                                    Mark as Default
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href="#!" className="text-danger">
                                                                    Remove
                                                                </Dropdown.Item>
                                                            </div>
                                                        </CardDropdown>
                                                    </div>
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <Row className="g-3 h-100">
                                                    <Col sm={6} lg={12}>
                                                        <Card className="position-relative rounded-4">
                                                            <Card.Body className="p-3 pt-5 pt-xxl-4">
                                                                <img
                                                                    fluid
                                                                    width={30}
                                                                    src={chip}
                                                                    alt="mastercard chip"
                                                                    className="mb-3"
                                                                />
                                                                <h6 className="text-primary font-base lh-1 mb-1">
                                                                    **** **** **** 9876
                                                                </h6>
                                                                <h6 className="fs--2 fw-semi-bold text-facebook mb-3">12/26</h6>
                                                                <h6 className="mb-0 text-facebook">Peter Leverkus</h6>
                                                                <img
                                                                    fluid
                                                                    width={70}
                                                                    src={mastercard}
                                                                    alt="mastercard logo"
                                                                    className="position-absolute end-0 bottom-0 mb-2 me-2"
                                                                />
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col sm={4} lg={12}>
                                                        <Table borderless className="fw-medium font-sans-serif fs--1 mb-2">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="p-1" style={{ width: '35%' }}>
                                                                        Type:
                                                                    </td>
                                                                    <td className="p-1 text-600">Mastercard debit card</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="p-1" style={{ width: '35%' }}>
                                                                        Name:
                                                                    </td>
                                                                    <td className="p-1 text-600">Peter Leverkus</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="p-1" style={{ width: '35%' }}>
                                                                        Expires:
                                                                    </td>
                                                                    <td className="p-1 text-600">DEC 2026</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="p-1" style={{ width: '35%' }}>
                                                                        Issuer:
                                                                    </td>
                                                                    <td className="p-1 text-600">Virtual Stone</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="p-1" style={{ width: '35%' }}>
                                                                        ID:
                                                                    </td>
                                                                    <td className="p-1 text-600">card_3d1avx3zcafd62</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        {/* Payment */}
                                    </Col>
                                    <Col md={6}>
                                        <PaymentTable />
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={12}>
                                <InvoiceTable />
                            </Col>
                            <Col xs={12}>
                                <Card className="m-3">
                                    <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                                        <h5 className="text-capitalize">
                                            Notifications
                                        </h5>
                                        <div>
                                            <div className="position-absolute top-0 end-0 m-3">
                                                <CardDropdown iconClassName="fs--1" drop="bottom">
                                                    <div className="py-2">
                                                        <Dropdown.Item href="#!" className="text-success">
                                                            Add
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!" className="text-danger">
                                                            Remove
                                                        </Dropdown.Item>
                                                    </div>
                                                </CardDropdown>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12}>
                                <Card className="m-3">
                                    <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                                        <h5 className="text-capitalize">
                                            Calender
                                        </h5>
                                        <div>
                                            <div className="position-absolute top-0 end-0 m-3">
                                                <CardDropdown iconClassName="fs--1" drop="bottom">
                                                    <div className="py-2">
                                                        <Dropdown.Item href="#!" className="text-success">
                                                            Add
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!" className="text-danger">
                                                            Remove
                                                        </Dropdown.Item>
                                                    </div>
                                                </CardDropdown>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12}>
                                <Card className="m-3">
                                    <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                                        <h5 className="text-capitalize">
                                            Project
                                        </h5>
                                        <div>
                                            <div className="position-absolute top-0 end-0 m-3">
                                                <CardDropdown iconClassName="fs--1" drop="bottom">
                                                    <div className="py-2">
                                                        <Dropdown.Item href="#!" className="text-success">
                                                            Add
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!" className="text-danger">
                                                            Remove
                                                        </Dropdown.Item>
                                                    </div>
                                                </CardDropdown>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                        {/* Content */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default MyProfile
// <Row>
//     <Col lg={2}>
//         <ProfileMenu />
//     </Col>
//     <Col lg={9}>
//         <Card className="mt-4 mb-4">
//             <Card.Body>
//                 <div className="d-flex justify-content-between">
//                     <h5 className="mt-3 ms-5">My Profile</h5>
//                     <div>
//                         <Button className="btn border-0  bg-secondary" >Edit</Button>
//                         <Button className="btn border-0 ms-2  bg-primary" >Save</Button>
//                     </div>
//                 </div>
//                 <Divider />
//                 <div className="d-flex justify-content-between">
//                     <div>
//                         <Row>
//                             <Col lg={6}>
//                                 <img src={profile_img} width="60px" height="60px" className="ms-5 rounded-circle" />
//                                 <small role="button" className="d-block text-center ms-3 mt-2">Edit</small>
//                             </Col>
// <Col lg={6}>
{/* <img src={profile_img} width="60px" height="60px" className="ms-5 rounded-circle" /> */ }
//                 <p className="mb-2 fw-semibold">{user?.name}</p>

//                 <small className="mb-2  d-block ">{user?.role}</small>

//                 <small className="mb-2   d-block w-100">{user?.company_address}</small>

//             </Col>
//         </Row>
//     </div>
// </div>
// <Divider />
// <div className="d-flex justify-content-between">
//     <h5 className="ms-5">Personal Information</h5>
{/* <div className="d-none">
                                    <Button className="btn border-0  m-2 bg-secondary">Edit</Button>
                                    <Button className="btn border-0 m-2  bg-primary">Save</Button>
                                </div> */}
//                             </div>
//                             <div className="d-flex justify-content-between">
//                                 <div className="ms-5">
//                                     <Form.Label className="d-block">
//                                         First Name
//                                     </Form.Label>
//                                     {isEdit == false &&
//                                         <Form.Label className="d-block fw-semibold">
//                                             {user?.first_name}
//                                         </Form.Label>
//                                     }
//                                     {isEdit == true &&
//                                     <Form.Group className="mb-3">
//                                         <Form.Control value={user?.first_name} type="text" />
//                                     </Form.Group>
// }
//                                     <Form.Label className="d-block">
//                                         Email Address
//                                     </Form.Label>
//                                     {isEdit == false &&
//                                     <Form.Label className="d-block fw-semibold">
//                                         {user?.email}
//                                     </Form.Label>
// }
// {isEdit == true &&
//                                     <Form.Group className="mb-3">
//                                         <Form.Control value={"rr67@gmail.co"} type="text" />
//                                     </Form.Group>
// }

{/* <Form.Label className="d-block">
                                        Primary Skill
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Fabricator"} type="text" />
                                    </Form.Group> */}

//                                 </div>
//                                 <div className="ms-5">
//                                     <Form.Label className="d-block">
//                                         Last Name
//                                     </Form.Label>
//                                     {isEdit == false &&
//                                     <Form.Label className="d-block fw-semibold">
//                                         {user?.last_name}
//                                     </Form.Label>
// }
// {isEdit == true &&

//                                     <Form.Group className="mb-3">
//                                         <Form.Control value={user?.last_name} type="text" />
//                                     </Form.Group>
// }
//                                     <Form.Label className="d-block">
//                                         Phone
//                                     </Form.Label>
//                                     {isEdit == true &&
//                                     <Form.Label className="d-block fw-semibold">
//                                         {user?.phone}
//                                     </Form.Label>
// }
// {isEdit == true &&
//                                     <Form.Group className="mb-3">
//                                         <Form.Control value={"+44567890"} type="text" />
//                                     </Form.Group>
// }
{/* <Form.Label className="d-block">
                                        Secondary Skill
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Worktops Installation
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Worktops Installation"} type="text" />
                                    </Form.Group> */}
//     </div>

// </div>
// <Divider />
// <div className="d-flex justify-content-between">
//     <h5 className="ms-5">Address</h5>
{/* <div>
                                    <Button className="btn border-0  m-2 bg-secondary">Edit</Button>
                                    <Button className="btn border-0 m-2  bg-primary">Save</Button>
                                </div> */}
            //                 </div>
            //                 <Form.Group className="ms-5">
            //                 </Form.Group>
            //                 <div className="m-5">
            //                     <Form.Group>
            //                         <Form.Control as="textarea" placeholder=' Address...' rows={8} />
            //                     </Form.Group>
            //                 </div>
            //             </Card.Body>
            //         </Card>
            //     </Col>
            // </Row>