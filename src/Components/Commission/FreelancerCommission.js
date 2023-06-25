// import React, { useState, useEffect } from "react";
// import AiMenu from "../Menubar/AiMenu";
// import AiHeader from "../Header/AiHeader";
// import { createData, getAllData } from "../../Services/ProxyService";
// import toast, { Toaster } from 'react-hot-toast';
// import { Link } from "react-router-dom";
// function FreelancerCommission() {
//     const [form, setform] = useState([]);
//     const [form1, setForm1] = useState({ update_old_values: false });
//     const [salesemail, setsalesemail] = useState([]);

//     const handlechange = (e) => {
//         const myData = { ...form };
//         myData[e.target.name] = e.target.value;
//         setform(myData)
//     }

//     const handlechange1 = (e) => {
//         setForm1({
//             ...form1,
//             [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
//         });
//     };

//     const selleremails = async () => {
//         const response = await getAllData('admin/users');
//         setsalesemail(response.data.users);
//     }

//     useEffect(() => {
//         selleremails()
//     }, [])

//     const AddFCcommission = async () => {
//         const GBcommdata = {
//             commission_type: form.commission_type,
//             commission_category: 4,
//             email: form.email,
//             first_commission: form.first_commission,
//             second_commission: form.second_commission,
//             category: "default",
//             option: "default",
//             status: true,
//             update_old_values: form1.update_old_values,
//             created_by: "1",
//         }
//         const response = await createData("commission/new", GBcommdata)
//         if (response.status === 201) {
//             toast.success('Successfully Trader Commission Added')
//             setform("")
//             setForm1("")
//             cleardata()
//         } else {
//             toast.error('Something went wrong')
//         }
//         console.log(response)
//     }

//     const formsubmit = (e) => {
//         e.preventDefault()
//         AddFCcommission();
//         setForm1("")
//     }

//     const cleardata = () => {
//         setform({
//             commission_type: "",
//             email: "",
//             first_commission: "",
//             second_commission: "",
//             category: "",
//             option: "",
//             update_old_values: false,

//         })
//     }
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
//                             <div >
//                                 <p className="ms-3 ai-sub-title">Commission / Trader Commission</p>
//                                 <h4 className="ms-3">Trader Commission</h4>
//                                 <p className="ms-3 ai-tit-desc">Here are setting for Trader Commission</p>
//                                 <div className="imp-note">
//                                     <p className="not-tit">Note:</p>
//                                     <ul type="none">
//                                         <li id="note-list">% - In this type of commission,the
//                                             percentage amount will be deducted from the base price of the product.</li>
//                                         <li id="note-list">
//                                             Fixed -In this type of commission ,
//                                             the fixed amount will be deducted from the base price.
//                                         </li>
//                                         <li id="note-list">% + Fixed - In this type of commission ,
//                                             first the percentage amount will be deducted from the base price of the product
//                                             and then a fixed amount will be deducted from the remaining amount.
//                                         </li>
//                                         <li id="note-list">
//                                             Fixed + % - In this type of commission , first a fixed amount will be deducted from the base price
//                                             and then the percentage amount will be deducted from the remaining price.
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <form onSubmit={(e) => { formsubmit(e) }}>
//                                     <div className="global-com-setting-div">
//                                         <p className="global-com-setting-heading">Trader Commission</p>
//                                         <p className="global-desc">Here are the setting for Trader Commission</p>
//                                         <p className="gct">Select Freelancer Email</p>
//                                         <select value={form.email} required name="email" onChange={(e) => { handlechange(e) }} className="cgct">
//                                             <option value="">Select</option>
//                                             {salesemail.map((data, key) => (
//                                                 <option key={key} value={data.email}>{data.email}</option>
//                                             ))}

//                                         </select>
//                                         <p className="gct">Trader Commission Type</p>

//                                         <select value={form.commission_type} required name="commission_type" onChange={(e) => { handlechange(e) }} className="cgct">
//                                             <option value="">Choose Trader Commission type</option>
//                                             <option value="%">%</option>
//                                             <option value="Fixed">Fixed</option>
//                                             <option value="% + Fixed">% + Fixed</option>
//                                             <option value="Fixed + %">Fixed + %</option>
//                                         </select>


//                                         {form.commission_type == "%" || form.commission_type == "Fixed" ? (
//                                             <>
//                                                 <label className="label">Trader Commission</label>
//                                                 <input type="number" required value={form.first_commission} id="fgc" name="first_commission" onChange={(e) => { handlechange(e) }} /><button className="per-btn-dis fix-btn-dis" disabled>{form.commission_type}</button>

//                                             </>
//                                         ) : ""}
//                                         {form.commission_type == "% + Fixed" || form.commission_type == "Fixed + %" ? (
//                                             <>
//                                                 <label className="label">Trader Commission</label>
//                                                 <input type="number" required value={form.first_commission} name="first_commission" onChange={(e) => { handlechange(e) }} id="fgc" /><button className="per-btn-dis" disabled>%</button>

//                                                 <label className="label">Second Trader Commission</label>
//                                                 <input type="number" id="fgc" required value={form.second_commission} name="second_commission" onChange={(e) => { handlechange(e) }} /><button className="fix-btn-dis" disabled>FIXED</button>

//                                             </>
//                                         ) : ""}
//                                         <p className="upd-titl">UPDATE EARLIER PRODUCT PRICE</p>
//                                         <div class="form-check form-switch">
//                                             <input
//                                                 name="update_old_values"
//                                                 checked={form1.update_old_values}
//                                                 onChange={handlechange1}
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 role="switch"
//                                                 id="flexSwitchCheckDefault"
//                                             />                                            <br></br>
//                                             <p className="switch-des">If you enable this option , all the prices of exisiting products will change according to the given commission value</p>
//                                             <Link to="allfreelancercommission" role="button">
//                                                 <button type="submit" className="create-acc-btn-1">Save Changes</button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Toaster />
//         </>
//     )
// }
// export default FreelancerCommission

import React from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";

function TraderCommission() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header as="h5" className='bg-light text-justify text-uppercase'>Note</Card.Header>
                        <Card.Body className="">
                            <ul>
                                <li style={{ fontSize: '14px', width: '100%' }} className="">% - In this type of commission,the
                                    percentage amount will be deducted from the base price of the product.</li>
                                <li style={{ fontSize: '14px', width: '100%' }} className="">
                                    Fixed -In this type of commission ,
                                    the fixed amount will be deducted from the base price.
                                </li>
                                <li style={{ fontSize: '14px', width: '100%' }} className="">% + Fixed - In this type of commission ,
                                    first the percentage amount will be deducted from the base price of the product
                                    and then a fixed amount will be deducted from the remaining amount.
                                </li>
                                <li style={{ fontSize: '14px', width: '100%' }} className="">
                                    Fixed + % - In this type of commission , first a fixed amount will be deducted from the base price
                                    and then the percentage amount will be deducted from the remaining price.
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className=" ms-3 me-3 mb-3">
                        <Card.Header className="bg-light">
                            <h5>Trader Commission</h5>
                            <p className="fs--1 mt-2">Here are the setting for Trader Commission</p>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Trader Commission Type
                                </Form.Label>
                                <Form.Select
                                    // value={form.commission_type}
                                    required name="commission_type"
                                    // onChange={(e) => { handlechange(e) }}
                                    className="">
                                    <option value="">Choose Trader Commission type</option>
                                    <option value="%">%</option>
                                    <option value="Fixed">Fixed</option>
                                    <option value="% + Fixed">% + Fixed</option>
                                    <option value="Fixed + %">Fixed + %</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Trader Commission</Form.Label>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            %    {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            Fixed    {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Second Trader Commission</Form.Label>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            % + Fixed  {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            Fixed + %    {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                            </Form.Group>
                            <h6 className="mt-3">UPDATE EARLIER PRODUCT PRICE</h6>
                            <div className="form-check form-switch">
                                <input
                                    name="update_old_values"
                                    // checked={form1.update_old_values}
                                    // onChange={handlechange1}
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="custom-switch"
                                />
                            </div>
                            <p className="fs--1 fw-semibold">If you enable this option , all the prices of exisiting products will change according to the given commission value</p>
                            <Button type="submit" variant="success">Save Changes</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default TraderCommission