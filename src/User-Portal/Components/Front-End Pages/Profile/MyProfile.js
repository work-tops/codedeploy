import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Table, Dropdown, Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import student from '../../Projectimages/student.png'
import chip from '../../Projectimages/chip.png'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import CardDropdown from "../../../TemplateAssets/common/CardDropdown";
import coverimg from '../../Projectimages/7.jpg'
import mastercard from '../../Projectimages/master-card.png'
import PaymentTable from "../../../TemplateAssets/AdvanceTables/PaymentTable";
import InvoiceTable from "../../../TemplateAssets/AdvanceTables/InvoiceTable";
import RecentlyPurchased from "../../../TemplateAssets/AdvanceTables/RecentlyPurchased";
import InvoiceTableCard from "../../../TemplateAssets/AdvanceTables/InvoiceDueTable";
import payment_methods from '../../Projectimages/payment_methods.png'
import paypal from '../../Projectimages/paypal.png'
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Cancel Modal
    const [showModal2, setShowModal2] = useState(false);

    const handleClose2 = () => {
        setShowModal2(false);
    };
    // Cancel Modal
    const [showModal3, setShowModal3] = useState(false);

    const handleClose3 = () => {
        setShowModal3(false);
    };

    const handleCancel3 = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal3(false);
    };
    return (

        <>
            <Container>
                <Row>
                    <Col lg={12} className="mb-4">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12} className="">
                        {/* Profile Header */}
                        <div className="row ">
                            <div className="col-12 mt-5">
                                <div className="card mb-3 btn-reveal-trigger">
                                    <div className="card-header position-relative min-vh-25 mb-8">
                                        <div className="cover-image">
                                            <div className="bg-holder rounded-3 rounded-bottom-0" style={{ backgroundImage: `url(${coverimg})` }}></div>
                                            <input className="d-none" id="upload-cover-image" type="file" /><label className="cover-image-file-input" for="upload-cover-image"><span className="fas fa-camera me-2"></span><span>Change cover photo</span></label>
                                        </div>
                                        <div className="avatar avatar-5xl avatar-profile shadow-sm img-thumbnail rounded-circle">
                                            <div className="h-100 w-100 rounded-circle overflow-hidden position-relative"> <img src={student} width="200" alt="" data-dz-thumbnail="data-dz-thumbnail" /><input className="d-none" id="profile-image" type="file" /><label className="mb-0 overlay-icon d-flex flex-center" for="profile-image"><span className="bg-holder overlay overlay-0"></span><span className="z-index-1 text-white dark__text-white text-center fs--1">
                                                <span className="fas fa-camera"></span><span className="d-block">Update</span></span></label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Profile Header */}


                        {/* Content */}
                        <Row className="g-3 mb-3">
                            <Col xxl={6}>
                                <Row className="g-3">
                                    <Col xs={12}>
                                        {/* StudentInfo */}
                                        <Card className=" btn-reveal-trigger font-sans-serif">
                                            <Card.Header as="h5" className="bg-light text-capitalize">
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
                                                {/*  */}

                                                {/*  */}

                                                <div className="position-absolute top-0 end-0 m-3">
                                                    <CardDropdown iconClassName="fs--1" drop="bottom">
                                                        <div className="py-2">
                                                            <Dropdown.Item
                                                                // onClick={() => setIsEdit(true)}
                                                                onClick={handleShow}
                                                            >Edit Your Profile</Dropdown.Item>
                                                            <Dropdown.Item
                                                                // onClick={() => setIsEdit(false)} 
                                                                onClick={handleShow1}
                                                            >
                                                                Change Your Password
                                                            </Dropdown.Item>
                                                        </div>
                                                    </CardDropdown>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        {/* StudentInfo */}
                                    </Col>

                                    <Col lg={4} md={6}>
                                        {/* Payment */}
                                        <Card className="mb-3 btn-reveal-trigger h-100">
                                            <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                                                <h5 className="text-capitalize">
                                                    Payment Methods
                                                </h5>
                                                <div>
                                                    <div className="position-absolute top-0 end-0 m-3">
                                                        <CardDropdown iconClassName="fs--1" drop="bottom">
                                                            <div className="py-2">
                                                                <Dropdown.Item onClick={() => setShowModal3(true)} href="#!" className="text-success">
                                                                    Add
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href="#!" className="text-secondary">
                                                                    Mark as Default
                                                                </Dropdown.Item>
                                                                <Dropdown.Item onClick={() => setShowModal2(true)} className="text-danger">
                                                                    Remove
                                                                </Dropdown.Item>
                                                            </div>
                                                            {/* Modal */}
                                                            <div>
                                                                <Modal show={showModal3} onHide={handleClose3}>
                                                                    <Modal.Header>
                                                                        <Modal.Title>
                                                                            <h5 className="mb-0">Payment Method</h5>
                                                                        </Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <form>
                                                                            <div className="form-check mb-0"><input className="form-check-input" type="radio" value="" id="credit-card" name="payment-method" /><label className="form-check-label mb-2 fs-1" for="credit-card">Credit Card</label></div>
                                                                            <div className="row gx-0 ps-2 mb-4">
                                                                                <div className="col-sm-8 px-3">
                                                                                    <div className="mb-3"><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Card Number</label><input className="form-control" id="inputNumber" type="text" placeholder="•••• •••• •••• ••••" /></div>
                                                                                    <div className="d-flex gap-2 align-items-center">
                                                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">Exp Date</label><input className="form-control" type="text" placeholder="mm/yyyy" /></div>
                                                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">CVV<a className="d-inline-block" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Card verification value" data-bs-original-title="Card verification value">
                                                                                            <span className="fa fa-question-circle ms-2"></span></a></label><input className="form-control" type="text" placeholder="123" maxlength="3" pattern="[0-9]{3}" /></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-4 ps-3 text-center pt-2 d-none d-sm-block">
                                                                                    <div className="rounded-1 p-2 mt-3 bg-100">
                                                                                        <div className="text-uppercase fs--2 fw-bold">We Accept</div><img src={payment_methods} alt="" width="120" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/*  */}
                                                                            <div className="form-check mb-0"><input className="form-check-input" type="radio" value="" id="credit-card" name="payment-method" /><label className="form-check-label mb-2 fs-1" for="credit-card">Debit Card</label></div>
                                                                            <div className="row gx-0 ps-2 mb-4">
                                                                                <div className="col-sm-8 px-3">
                                                                                    <div className="mb-3"><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Card Number</label><input className="form-control" id="inputNumber" type="text" placeholder="•••• •••• •••• ••••" /></div>
                                                                                    <div className="d-flex gap-2 align-items-center">
                                                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">Exp Date</label><input className="form-control" type="text" placeholder="mm/yyyy" /></div>
                                                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">CVV<a className="d-inline-block" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Card verification value" data-bs-original-title="Card verification value">
                                                                                            <span className="fa fa-question-circle ms-2"></span></a></label><input className="form-control" type="text" placeholder="123" maxlength="3" pattern="[0-9]{3}" /></div>
                                                                                    </div>
                                                                                </div>
                                                                                {/* <div className="col-4 ps-3 text-center pt-2 d-none d-sm-block">
                                                                                            <div className="rounded-1 p-2 mt-3 bg-100">
                                                                                                <div className="text-uppercase fs--2 fw-bold">We Accept</div><img src={payment_methods} alt="" width="120" />
                                                                                            </div>
                                                                                        </div> */}
                                                                            </div>
                                                                            {/*  */}
                                                                            <div className="form-check d-flex align-items-center"><input className="form-check-input" type="radio" value="" id="paypal" name="payment-method" /><label className="form-check-label mb-0 ms-2" for="paypal"><img src={paypal} height="20" alt="" /></label></div>
                                                                           </form>
                                                                    </Modal.Body>
                                                                    <Modal.Footer>
                                                                        <Button variant="primary" onClick={handleClose3}>
                                                                            Save
                                                                        </Button>
                                                                        <Button variant="primary" onClick={handleClose3}>
                                                                            Save & Pay
                                                                        </Button>

                                                                    </Modal.Footer>
                                                                </Modal>
                                                            </div>
                                                            {/*  */}
                                                            <Modal show={showModal2} onHide={handleClose2}>
                                                                <Modal.Header >
                                                                    <Modal.Title>Warning</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <p className="text-capitalize">
                                                                        Are you sure you want to remove this payment details?
                                                                    </p>
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose2}>
                                                                        Cancel
                                                                    </Button>
                                                                    <Button variant="danger" onClick={handleClose2}>
                                                                        Remove
                                                                    </Button>

                                                                </Modal.Footer>
                                                            </Modal>
                                                            {/*  */}
                                                        </CardDropdown>
                                                    </div>
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <Row className="g-3 h-100">
                                                    <Col sm={6} md={12} lg={12}>
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
                                                    <Col sm={12} lg={12}>
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
                                    <Col lg={8} md={6}>
                                        <PaymentTable />
                                    </Col>
                                </Row>
                            </Col>
                            {/*  */}
                            <Col xs={12}>
                                <Card className="mb-3 btn-reveal-trigger h-100">
                                    <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                                        <h5 className="text-capitalize">
                                            Billing Address
                                        </h5>
                                    </Card.Header>
                                    <Card.Body>
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
                                    </Card.Body>
                                </Card>
                            </Col>


                            {/*  */}

                            {/*  */}
                            <Col xs={12}>
                                <RecentlyPurchased />
                            </Col>
                            {/*  */}
                            <Col xs={12} className="mb-4">
                                <InvoiceTableCard />
                            </Col>
                        </Row>
                        {/* Content */}
                    </Col>
                </Row>
            </Container>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <h5>Edit</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                First Name:
                            </Form.Label>
                            <Form.Control
                                className="form-control-sm"
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Last Name:
                            </Form.Label>
                            <Form.Control
                                className="form-control-sm"
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Email:
                            </Form.Label>
                            <Form.Control
                                className="form-control-sm"
                                type="email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Mobile Number
                            </Form.Label>
                            <Form.Control
                                className="form-control-sm"
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Address:
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={1}
                                className="resize-none form-control-sm"
                            // type="email"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
            {/*  */}
            <Modal
                show={show1}
                onHide={() => setShow1(false)}
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <h5 className="mb-0">Change Password</h5>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3"><label className="form-label" for="old-password">Old Password<span className="text-danger ms-1">*</span></label><input className="form-control" id="old-password" type="password" /></div>
                        <div className="mb-3"><label className="form-label" for="new-password">New Password<span className="text-danger ms-1">*</span></label><input className="form-control" id="new-password" type="password" /></div>
                        <div className="mb-3"><label className="form-label" for="confirm-password">Confirm Password<span className="text-danger ms-1">*</span></label><input className="form-control" id="confirm-password" type="password" /></div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-primary d-block" type="submit" onClick={handleClose1}>
                        Update Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default MyProfile
// < Col xs = { 12} >
//     <div className="card mb-3">
//         <div className="card-header">

//         </div>
//         <div className="card-body bg-light">

//         </div>
//     </div>
// </Col >
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