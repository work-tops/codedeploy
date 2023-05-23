import { useState, React } from "react";
import { Row, Col, Card, Form, Button, Container, Image, Dropdown } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { getSize } from '../../../TemplateAssets/helpers/utils';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import Flex from '../../../TemplateAssets/common/Flex';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';


function GetQuote() {

    // Upload Files(Optional)
    const [cover, setCover] = useState();

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setCover(
                Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0])
                })
            );
        }
    });
    
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12}>
                        <div className="d-flex justify-content-center align-items-center mb-3 mt-5">
                            <h4 className="fw-bolder">Get Quote</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center m-3">
                            <p className="text-center" style={{ fontSize: '14px' }}>Give us the details of your project and we'll send it to specialist trades for you.</p>
                        </div>
                        <Row className="">

                            <Form>

                                <Card className="mb-3">
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold text-900">
                                                        Stone Category<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Select>
                                                        <option>Select</option>
                                                        <option>Quartz</option>
                                                        <option>Marble</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold text-900">
                                                        Thickness<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Select>
                                                        <option>Select</option>
                                                        <option>20mm</option>
                                                        <option>30mm</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold text-900">
                                                        Stone Name<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="mb-3" >
                                                    <Form.Label className="fw-semibold text-900">
                                                        Attach Kitchen Plan
                                                    </Form.Label>

                                                    <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                                        <input {...getInputProps({ multiple: false })} />
                                                        <div className="fs--1">
                                                            <img src={cloudUpload} alt="" width={20} className="me-2" />
                                                            <span className="d-none d-lg-inline">
                                                                Drag your image here
                                                                <br />
                                                                or,{' '}
                                                            </span>
                                                            <Button variant="link" size="sm" className="p-0 fs--1">
                                                                Browse
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    {cover && (
                                                        <div className="mt-3">
                                                            <Flex
                                                                alignItems="center"
                                                                className="btn-reveal-trigger"
                                                                key={cover.path}
                                                            >
                                                                <Image
                                                                    rounded
                                                                    width={40}
                                                                    height={40}
                                                                    src={cover.preview}
                                                                    alt={cover.path}
                                                                />
                                                                <Flex
                                                                    justifyContent="between"
                                                                    direction="column"
                                                                    className="mx-2 flex-1 text-truncate"
                                                                >
                                                                    <h6 className="text-truncate">{cover.path}</h6>
                                                                    <Flex className="position-relative" alignItems="center">
                                                                        <p className="mb-0 fs--1 text-400 line-height-1">
                                                                            <strong>{getSize(cover.size)}</strong>
                                                                        </p>
                                                                    </Flex>
                                                                </Flex>
                                                                <CardDropdown>
                                                                    <div className="py-2">
                                                                        <Dropdown.Item
                                                                            className="text-danger"
                                                                            onClick={() => setCover()}
                                                                        >
                                                                            Remove
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </CardDropdown>
                                                            </Flex>
                                                        </div>
                                                    )}
                                                    <small>Minimum 5 and Maximum 10 Files Allowed</small>
                                                </div>
                                            </Col>
                                            <Col lg={12}>

                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold text-900">
                                                        Dimensions<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>

                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-900">
                                                When will you be ready for template?<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
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
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-900">
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
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Button as={Link} to="/owner" className="m-2 text-white border-0" style={{ background: "#0d406b" }}
                                            >Request Quote
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <p className="text-center" style={{ fontSize: '14px' }}>We will create a Myproject account for you (unless already created). Read our terms of use and privacy notice.</p>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default GetQuote