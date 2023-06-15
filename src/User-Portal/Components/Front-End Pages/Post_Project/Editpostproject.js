import { React, useState, useCallback, useRef } from "react"
import {
    Col,
    Form,
    Row,
    Button,
    Card,
    Dropdown,
    Image,
    Container, Modal, ListGroup
} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Editor } from '@tinymce/tinymce-react';
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import { useDropzone } from 'react-dropzone';
import { getSize } from '../../../TemplateAssets/helpers/utils';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';
import file from '../../Projectimages/BathroomFitting.jpg'

function Editpostproject() {

    // Upload Img
    const [covers, setCovers] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Map the acceptedFiles to add the preview property
        const updatedCovers = acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        setCovers((prevCovers) => [...prevCovers, ...updatedCovers]);
    }, []);

    const removeCover = (cover) => {
        setCovers((prevCovers) => prevCovers.filter((c) => c !== cover));
    };


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });
    // Upload Img

    // 
    const editorRef = useRef(null);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal(false);
    };

    // 
    const counties = [
        'Bedfordshire',
        'Berkshire',
        'Bristol',
        'Buckinghamshire',
    ];

    // 
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // 

    // 
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    // 


    const [inputValue, setInputValue] = useState('');
    const [filteredCounties, setFilteredCounties] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        const filtered = counties.filter((county) =>
            county.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCounties(filtered);
    };

    const handleCountySelect = (county) => {
        setInputValue(county);
        setFilteredCounties([]);
    };
    //


    return (
        <>
            <Form>
                <Row className=" font-sans-serif">
                    {/* Header */}
                    <Col lg={12} className='mb-5' >
                        <NavbarStandard />
                    </Col>


                    <Container>
                        <Card className="mt-5">
                            <Card.Header as="h4" className='bg-light text-justify text-uppercase'>Note</Card.Header>
                            <Card.Body className="">
                                <ul>
                                    <li style={{ fontSize: '14px', width: '100%' }}>
                                        The customers who have described their requirements with better clarity while uploading the project have always connected with the right professionals and received better proposals, and hence completed their projects on time.

                                    </li>
                                    <li style={{ fontSize: '14px', width: '100%' }}>
                                        To make it even better, we recommend that you upload as much relevant information (pictures, documents, specifications, etc) as possible to give clarity.
                                    </li>

                                </ul>
                            </Card.Body>
                        </Card>

                        {/* Note */}

                        {/* Post A Project */}
                        <Card className="mb-3 mt-3">
                            <Card.Header className='bg-light text-uppercase text-justify '>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h4 className="mb-3">Edit Your Project</h4>
                                        <span className="d-block" style={{ fontSize: '12px' }}>Project Created On :<span className="ms-2 fw-semibold text-primary">01/01/01/05/2023</span> </span>
                                        <span className="" style={{ fontSize: '12px' }}>Last Update On :<span className="ms-2 fw-semibold text-success">10/01/01/05/2023</span> </span>
                                    </div>
                                    <div className="col-lg-4 mt-3 d-flex justify-content-lg-end align-items-lg-end">
                                        <button className="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">View Comment History</button>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body className="bg-white">
                                <Row className="gx-2 gy-3">
                                    <p className='mt-2 me-2 fw-semibold' style={{ fontSize: '14px' }}>Select a relevant category so that traders can find your project</p>

                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                category <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900 text-capitalize">Attic</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                sub-category <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900 text-capitalize">Worktop</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className='me-2 '>
                                        <Form.Group controlId="courseTitle">
                                            <Form.Label className='text-700 text-uppercase'>
                                                project title <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value="WHITE ATTICA SUPERNATURAL QUARTZ"
                                                required
                                                name="project_title"
                                                // onChange={(e) => { handleChange(e) }}
                                                id="usr-prj-tit"
                                                placeholder="e.g I Want to Make a New Kitchen"
                                            />
                                            <p className="text-900 text-uppercase">WHITE ATTICA SUPERNATURAL QUARTZ</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className='me-2'>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='text-700 text-uppercase'>Project Description <span className="text-danger">*</span> </Form.Label>
                                            {/* <Form.Control
                                                as="textarea"
                                                // value={form.project_description}
                                                value="White Attica Supernatural Quartz has a crisp white base featured with an
                                                 intricate veiny pattern. This quartz slab has a super sleek look in polished 
                                                 finish which 
                                                 is more enhanced by the distinct black veins which have been manufactured to look fit for classNamey modern settings. The deep dark veins create remarkable designs in your interior spaces. It feels like a dream come true 
                                                when installed in kitchens, baths, entryways, laundry and mudrooms, as well as a variety of other spaces in 
                                                both residential and commercial properties. This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished"
                                                required
                                                name="project_description"
                                                // onChange={(e) => { handleChange(e) }}
                                                placeholder="Need a Fabricator who's Specialize in this field"
                                                rows={8} /> */}
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue="White Attica Supernatural Quartz has a crisp white base featured with an
                                                intricate veiny pattern. This quartz slab has a super sleek look in polished 
                                                finish which 
                                                is more enhanced by the distinct black veins which have been manufactured to look fit for classNamey modern settings. The deep dark veins create remarkable designs in your interior spaces. It feels like a dream come true 
                                               when installed in kitchens, baths, entryways, laundry and mudrooms, as well as a variety of other spaces in 
                                               both residential and commercial properties. This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished"
                                                init={{
                                                    height: 200,
                                                    menubar: false,
                                                    // plugins: [
                                                    //     'advlist autolink lists link image charmap print preview anchor',
                                                    //     'searchreplace visualblocks code fullscreen',
                                                    //     'insertdatetime media table paste code help wordcount'
                                                    // ],
                                                    toolbar: 'undo redo | formatselect | ' +
                                                        'bold italic  | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat ',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
                                            <p className="text-900">White Attica Supernatural Quartz has a crisp white base featured with an
                                                intricate veiny pattern. This quartz slab has a super sleek look in polished
                                                finish which
                                                is more enhanced by the distinct black veins which have been manufactured to look fit for classNamey modern settings. The deep dark veins create remarkable designs in your interior spaces. It feels like a dream come true
                                                when installed in kitchens, baths, entryways, laundry and mudrooms, as well as a variety of other spaces in
                                                both residential and commercial properties. This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished
                                            </p>
                                            <p className='mt-2' style={{ fontSize: '12px' }}>Be Descriptive , Projects with good descriptions are more popular with our Traders
                                            </p>
                                        </Form.Group>
                                    </Col>
                                    <Form.Label className='text-700 text-uppercase'>
                                        Upload Sample and Other Helpful
                                    </Form.Label>
                                    <Card>
                                        <Card.Body>
                                            {/* Upload Samples */}
                                            <Col lg={12} className='me-2 mb-2 w-100'>
                                                <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                                    <input {...getInputProps()} multiple />
                                                    <div className="fs--1">
                                                        <img src={cloudUpload} alt="" width={20} className="me-2" />
                                                        <span className="d-none d-lg-inline">
                                                            Drag your images here
                                                            <br />
                                                            or,{' '}
                                                        </span>
                                                        <Button variant="link" size="sm" className="p-0 fs--1">
                                                            Browse
                                                        </Button>
                                                    </div>
                                                </div>

                                                {covers.length > 0 &&
                                                    <div className="mt-3">
                                                        {covers.map((cover) => (
                                                            <div key={cover.path} className='d-flex btn-reveal-trigger align-items-center'>
                                                                <Image
                                                                    rounded
                                                                    width={40}
                                                                    height={40}
                                                                    src={cover.preview}
                                                                    alt={cover.path}
                                                                />
                                                                <div className='mx-2 flex-1 text-truncate flex-column d-flex justify-content-between'>
                                                                    <h6 className="text-truncate">{cover.path}</h6>
                                                                    <div className="d-flex align-items-center position-relative">
                                                                        <p className="mb-0 fs--1 text-400 line-height-1">
                                                                            <strong>{getSize(cover.size)}</strong>
                                                                        </p>
                                                                    </div>
                                                                    <h6 className="mt-2 text-primary">01/05/2023</h6>
                                                                </div>
                                                                <CardDropdown>
                                                                    <div className="py-2">
                                                                        <Dropdown.Item
                                                                            className="text-danger"
                                                                            onClick={() => removeCover(cover)}
                                                                        >
                                                                            Remove
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </CardDropdown>
                                                            </div>
                                                        ))}
                                                    </div>
                                                }

                                                <small className='d-block'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                                                <small className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                    {/* Upload Samples */}
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 mt-3 text-uppercase'>
                                                Budget Type <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                // value={form.budget_type}
                                                required
                                                name="budget_type"
                                            // onChange={(e) => { handleChange(e) }}
                                            >
                                                <option value="">Select</option>
                                                <option value="Fixed Price">Fixed Price</option>
                                                <option value="Range"> Range</option>
                                                <option value="No Idea">No Idea</option>
                                            </Form.Select>
                                            <p className="text-900">Fixed Price</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 mt-3 text-uppercase'>
                                                Currency <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                // value={form.currency}
                                                required
                                                name="currency"
                                            // onChange={(e) => { handleChange(e) }}
                                            >
                                                {/* <option value="">Select</option> */}
                                                <option value="£ GBP">£ GBP </option>
                                                <option value="£ EUR">£ EUR</option>
                                            </Form.Select>
                                            <p className="text-900">£ GBP </p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Budget <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.budget}
                                                value="200"
                                                required
                                                name="budget"
                                                // onChange={(e) => { handleChange(e) }}

                                                placeholder="£ 0"
                                                type="number"
                                            />
                                            <p className="text-900">200 </p>
                                            {/* <div className='row'>
                                                <div className="col">
                                                    {form.budget_type == "No Idea" ? (
                                                        <>
                                                            <Form.Group className='mt-2'>
                                                                <Form.Label>Max Budget<span className="ms-1 text-danger">*</span></Form.Label>
                                                                <Form.Control className='d-block' value={form.max_budget} required name="max_budget" onChange={(e) => { handleChange(e) }} placeholder="£ 0" type="number" />
                                                            </Form.Group>
                                                        </>
                                                    ) : ("")}
                                                </div>
                                            </div> */}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className=''>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='text-700 text-uppercase'>Project Location <span className="text-danger">*</span> </Form.Label>
                                            {/* <Form.Control
                                                value={form.location}
                                                required
                                                name="location"
                                                onChange={(e) => { handleChange(e) }}
                                            /> */}

                                            <Form.Control
                                                type="text"
                                                placeholder="Search for UK county..."
                                                value={"Buckinghamshire"}
                                                onChange={handleInputChange}
                                            />
                                            {filteredCounties.length > 0 && (
                                                <ListGroup className="mt-1">
                                                    {filteredCounties.map((county) => (
                                                        <ListGroup.Item
                                                            key={county}
                                                            action
                                                            onClick={() => handleCountySelect(county)}
                                                        >
                                                            {county}
                                                        </ListGroup.Item>
                                                    ))}
                                                </ListGroup>
                                            )}

                                            <p className="text-900">Buckinghamshire </p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Post Code<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.postcode}
                                                value="CD23BX"
                                                required
                                                name="postcode"
                                                // onChange={(e) => { handleChange(e) }}
                                                type='text'
                                            />
                                            <p className="text-900">CD23BX</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Starting Date
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.startdate}
                                                // value="01/01/01/05/2023"
                                                required
                                                name="startdate"
                                                // onChange={(e) => { handleChange(e) }}

                                                type='date'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md="12">
                                        <Form.Group className='mb-3 mt-2'>
                                            <Form.Label className='text-700 d-block text-uppercase'>
                                                Project Visibility <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Check
                                                type='radio'
                                                id="radio-btn"
                                                // onChange={(e) => { handleChange(e) }}
                                                name="visibility"
                                                value="public"
                                                className='d-inline-block'
                                            >
                                                <Form.Check.Input name="visibility" type="radio" />
                                                <Form.Check.Label
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All Traders can view the project post and send proposals)</span></span>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                        <Form.Group className=''>
                                            <Form.Check
                                                type='radio'
                                                id="radio-btn"
                                                // onChange={(e) => { handleChange(e) }}
                                                name="visibility"
                                                value="private"
                                                className='d-inline-block'
                                            >
                                                <Form.Check.Input name="visibility" type="radio" />
                                                <Form.Check.Label
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only Traders that you specifically invite can view the
                                                        <p className="opt-span">project post and send proposal)</p></span></span>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700  text-uppercase'>
                                                Project Duration Time <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.project_duration}
                                                value="2 Years"
                                                required
                                                disabled
                                                name="project_duration"
                                                // onChange={(e) => { handleChange(e) }}
                                                type='text'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className='text-700  text-uppercase'>
                                                Expiry Date <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                required
                                                name="expire_date"
                                                type='date'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Form.Group className=''>
                                        <Form.Check label="I Agree the Terms and conditions" />
                                    </Form.Group>
                                    <Col lg={12} className=''>
                                        <div className='d-flex justify-content-start'>
                                            <Button
                                                onClick={handleShow1}

                                                className='d-block border-0 bg-success'
                                            >Post Project</Button>
                                            {/* <Link to="/projectlist"> */}
                                            <Button onClick={() => setShowModal(true)} className='d-block ms-3 border-0 bg-danger'>Cancel</Button>
                                            {/* </Link> */}
                                        </div>
                                        <h5 className="text-center text-danger fw-bold">Your Project has been expired....Please Post New Project!!!</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card >




                        {/* Post A Project */}
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Warning</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to Exit?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button as={Link} to="/projectlist" variant="danger" onClick={handleClose}>
                                    Exit
                                </Button>

                            </Modal.Footer>
                        </Modal>
                        {/* </Col> */}

                        {/* ---------------- */}
                        <Modal size="lg" show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title>Project Summary</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/*  */}
                                <Row className="gx-2 gy-3">
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                category <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900 text-capitalize">Attic</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                sub-category <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900 text-capitalize">Worktop</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className='me-2 '>
                                        <Form.Group controlId="courseTitle">
                                            <Form.Label className='text-700 text-uppercase'>
                                                project title <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900 text-uppercase">WHITE ATTICA SUPERNATURAL QUARTZ</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className='me-2'>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='text-700 text-uppercase'>Project Description <span className="text-danger">*</span> </Form.Label>
                                            <p className="text-900 text-justify">White Attica Supernatural Quartz has a crisp white base featured with an
                                                intricate veiny pattern. This quartz slab has a super sleek look in polished
                                                finish which
                                                is more enhanced by the distinct black veins which have been manufactured to look fit for classNamey modern settings. The deep dark veins create remarkable designs in your interior spaces. It feels like a dream come true
                                                when installed in kitchens, baths, entryways, laundry and mudrooms, as well as a variety of other spaces in
                                                both residential and commercial properties. This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished
                                            </p>
                                        </Form.Group>
                                    </Col>
                                    {/* Upload Samples */}

                                    <Form.Label className='text-700 text-uppercase'>
                                        Upload Sample and Other Helpful
                                    </Form.Label>
                                    <div className="col-6">
                                        <img src={file} width="50px" height="50px" className="pro-pre" />
                                        <span className="text-900 ms-3 fil-name">File Name (540 KB)</span>
                                    </div>
                                    <div className="col-6">
                                        <img src={file} width="50px" height="50px" className="pro-pre" />
                                        <span className="text-900 ms-3 fil-name">File Name (540 KB)</span>
                                    </div>
                                    {/* Upload Samples */}
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Budget Type <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900">Fixed Price</p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Currency <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900">£ GBP </p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Budget <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900">£ 200 </p>

                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className=''>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='text-700 text-uppercase'>Project Location <span className="text-danger">*</span> </Form.Label>
                                            <p className="text-900">Buckinghamshire </p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Post Code<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900">CD23BX </p>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Starting Date
                                            </Form.Label>
                                            <p className="text-900">01/01/01/05/2023 </p>
                                        </Form.Group>
                                    </Col>
                                    <Col md="12">
                                        <Form.Group className='mb-3 mt-2'>
                                            <Form.Label className='text-700 d-block text-uppercase'>
                                                Project Visibility <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Check
                                                type='radio'
                                                id="radio-btn"
                                                // onChange={(e) => { handleChange(e) }}
                                                name="visibility"
                                                value="public"
                                                className='d-inline-block'
                                            >
                                                <Form.Check.Input name="visibility" type="radio" />
                                                <Form.Check.Label
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All Traders can view the project post and send proposals)</span></span>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                        {/* <Form.Group className=''>
                      <Form.Check
                        type='radio'
                        id="radio-btn"
                        onChange={(e) => { handleChange(e) }}
                        name="visibility"
                        value="private"
                        className='d-inline-block'
                      >
                        <Form.Check.Input name="visibility" type="radio" />
                        <Form.Check.Label
                          style={{ fontSize: '14px' }}
                        >
                          <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only Traders that you specifically invite can view the
                            <p className="opt-span">project post and send proposal)</p></span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group> */}
                                    </Col>

                                    <Col lg={6} md={6} className=''>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className='text-700  text-uppercase'>
                                                Expiry Date <span className="text-danger">*</span>
                                            </Form.Label>
                                            <p className="text-900">01/01/01/05/2023 </p>
                                        </Form.Group>
                                    </Col>

                                </Row>


                                {/*  */}
                            </Modal.Body>
                            <Modal.Footer>

                                <Button
                                    onClick={handleClose1}
                                    type="submit"
                                    className='d-block border-0 bg-success'
                                >Post Project
                                </Button>

                            </Modal.Footer>
                        </Modal>
                        {/* ---------------- */}

                        <div className="offcanvas offcanvas-end" id="offcanvasRight" tabindex="-1" aria-labelledby="offcanvasRightLabel">
                            <div className="bg-light offcanvas-header">
                                <h5 id="offcanvasRightLabel">Comment History</h5><button className="btn-close text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div>
                                    {/*  */}
                                    <div className="timeline-vertical">
                                        <div className="timeline-item timeline-item-start">
                                            <div title="Current Update" className="timeline-icon icon-item icon-item-lg text-primary border-300">
                                                <Icon icon="material-symbols:update" color="#2dca6c" width="24" height="24" />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 timeline-item-time">
                                                    <div>
                                                        <p className="fs--1 mb-0 fw-semi-bold">01/05/2023<span className="ms-2">2.19 PM</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="timeline-item-content">
                                                        <div className="timeline-item-card">
                                                            <h5 className="mb-2">Project Owner Name</h5>
                                                            <p className="fs--1 mb-0">Project Updated in MAI <span className="fw-semibold">Amount Changed from £ 6,157.32 to £ 6,606.96</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item timeline-item-end">
                                            <div title="Previous Update" className="timeline-icon icon-item icon-item-lg text-primary border-300">
                                                <Icon icon="material-symbols:update" color="#ffa800" width="24" height="24" />  </div>
                                            <div className="row">
                                                <div className="col-lg-6 timeline-item-time">
                                                    <div>
                                                        <p className="fs--1 mb-0 fw-semi-bold">01/05/2023<span className="ms-2">2.19 PM</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="timeline-item-content">
                                                        <div className="timeline-item-card">
                                                            <h5 className="mb-2">Project Owner Name</h5>
                                                            <p className="fs--1 mb-0"><p className="fs--1 mb-0">Project Updated in MAI <span className="fw-semibold">Amount Changed from £ 6,157.32 to £ 6,606.96</span></p> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item timeline-item-end">
                                            <div title="Previous Update" className="timeline-icon icon-item icon-item-lg text-primary border-300">
                                                <Icon icon="material-symbols:update" color="#ffa800" width="24" height="24" />  </div>
                                            <div className="row">
                                                <div className="col-lg-6 timeline-item-time">
                                                    <div>
                                                        <p className="fs--1 mb-0 fw-semi-bold">01/05/2023<span className="ms-2">2.19 PM</span></p>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="timeline-item-content">
                                                        <div className="timeline-item-card">
                                                            <h5 className="mb-2">Project Owner Name</h5>
                                                            <p className="fs--1 mb-0"><p className="fs--1 mb-0">Project Updated in MAI <span className="fw-semibold">Amount Changed from £ 6,157.32 to £ 6,606.96</span></p> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item timeline-item-end">
                                            <div title="Previous Update" className="timeline-icon icon-item icon-item-lg text-primary border-300">
                                                <Icon icon="material-symbols:update" color="#ffa800" width="24" height="24" />  </div>
                                            <div className="row">
                                                <div className="col-lg-6 timeline-item-time">
                                                    <div>
                                                        <p className="fs--1 mb-0 fw-semi-bold">01/05/2023<span className="ms-2">2.19 PM</span></p>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="timeline-item-content">
                                                        <div className="timeline-item-card">
                                                            <h5 className="mb-2">Project Owner Name</h5>
                                                            <p className="fs--1 mb-0"><p className="fs--1 mb-0">Project Updated in MAI <span className="fw-semibold">Amount Changed from £ 6,157.32 to £ 6,606.96</span></p> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Row>
            </Form >
        </>
    )
}
export default Editpostproject