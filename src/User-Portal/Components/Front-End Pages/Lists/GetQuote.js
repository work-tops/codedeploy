import { useState, React, useCallback, useRef } from "react";
import { Row, Col, Card, Form, Button, Container, Image, Dropdown } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { getSize } from '../../../TemplateAssets/helpers/utils';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import Flex from '../../../TemplateAssets/common/Flex';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';
import Footer from "../../Footer/Footer";


function GetQuote() {

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

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12}>
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <h1 className="fw-bolder">Get Quote</h1>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="text-center">Give us the details of your project and we'll send it to specialist trades for you.</p>
                        </div>
                        <Row className="">

                            <Form>

                                <Card className="mb-3">
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="  text-900">
                                                        Stone Category<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <p className=" text-900">Marble</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="  text-900">
                                                        Thickness<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900">20mm</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="  text-900">
                                                        Stone Name<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <p className=" text-900">Calacatta Light Quartz</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="mb-3" >
                                                    <Form.Label className="  text-900">
                                                        Attach diagrams/plans
                                                    </Form.Label>
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

                                                    <small className='d-block'><span className=' me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                                                    <small className='d-block'><span className=' me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                                                </div>
                                            </Col>
                                            <Col lg={12}>

                                                <Form.Group className="mb-3">
                                                    <Form.Label className="  text-900">
                                                        More Informations<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    {/* <Form.Control as="textarea" rows={5} /> */}
                                                    <Editor
                                                        onInit={(evt, editor) => editorRef.current = editor}
                                                        initialValue=""

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
                                                </Form.Group>

                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Header className="bg-light">
                                        <Form.Label className="  text-900">
                                            Postcode<span className="ms-1 text-danger"></span>
                                        </Form.Label>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Your Postcode"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Header className="bg-light">
                                        <Form.Label className="  text-900">
                                            When will you be ready for template?<span className="ms-1 text-danger">*</span>
                                        </Form.Label>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form.Group className="mb-3">
                                            {/*  */}
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className="d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    ASAP
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className=" d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    It's urgent (within 48 hours)
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className=" d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    Within 2 weeks
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className="d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    Within 1 month
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className=" d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    3 Month +
                                                </Form.Check.Label>
                                            </Form.Check>
                                            {/*  */}
                                        </Form.Group>
                                        <hr></hr>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Button as={Link} to="/Project-owner/login" className="Home-btns-1 text-white border-0" style={{ background: "#0d406b" }}
                                            >Get Quote
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                {/* <Card className="mb-3">
                                    <Card.Body>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="  text-900">
                                                Tell us About You<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Name"
                                            />
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Email"
                                            />
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Phone Number"
                                            />
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Postcode (of your project)"
                                            />
                                        </Form.Group>
                                        </Card.Body>
                                    </Card> */}

                                <p className="text-center" style={{ fontSize: '14px' }}>We will create a Myproject account for you (unless already created). Read our terms of use and privacy notice.</p>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default GetQuote