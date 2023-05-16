import { React, useState, useEffect } from 'react';
import {
  Col,
  Form,
  Row,
  Button,
  Card,
  Dropdown,
  Image,
  OverlayTrigger,
  Tooltip,
  Container
} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import { getSize } from '../../../TemplateAssets/helpers/utils';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import { createData, getAllData } from "../../../../Services/ProxyService";
import toast from 'react-hot-toast';
import { uploadImage } from "../../../../Services/ImageService";



const PostProject = () => {

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

  const history = useHistory();

  const [selectedFile, setSelectedFile] = useState([]);
  const [uploadFiles, setUploadFile] = useState([]);

  const handleFileInput = (e) => {
    const files = e.target.files;
    const fileArray = [];

    for (let i = 0; i < files.length; i++) {
      fileArray.push({
        name: files[i].name,
        url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${files[i].name}`,
        type: files[i].type
      });
    }
    setSelectedFile(fileArray);
    setUploadFile(files);
  };

  const uploadFile = () => {
    console.log('uploadFiles length', uploadFiles.length);
    for (let i = 0; i < uploadFiles.length; i++) {
      uploadImage(uploadFiles[i]);
    }
  };

  const [form, setform] = useState([])
  console.log(form)

  const handleChange = (e) => {
    const myData = { ...form };
    myData[e.target.name] = e.target.value;
    setform(myData);
    if (e.target.name == 'category') {
      console.log(e.target.value);
      SubCategory(e.target.value);
    }
  }

  const SubCategory = async (_category) => {
    var catg = cate.find(x => x.category == _category);
    setsubcate(catg.sub_category);
  }

  const AddJobs = async () => {
    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);
    const productdata = {
      customer_email: _json?.email,
      category: form.category,
      sub_category: form.sub_category,
      project_title: form.project_title,
      project_description: form.project_description,
      budget_type: form.budget_type,
      currency: form.currency,
      budget: form.budget,
      max_budget: form.budget_type === "No Idea" ? form.max_budget : 0,
      location: form.location,
      job_status: form.job_status,
      status: form.status,
      visibility: form.visibility,
      project_duration: form.project_duration,
      expire_date: form.expire_date,
      attachments: selectedFile,
      terms_and_condition: true,
      postcode: form.postcode,
      startdate: form.startdate,
      created_by: _json?._id,
    }
    const response = await createData("job/new", productdata)
    if (response.status === 201) {
      toast.success('Successfully Product Added')
      history.push('/joblist');
      cleardata()
    } else {
      toast.error('Something went wrong')
    }
    console.log(response)
  }

  const formsubmit = (e) => {
    e.preventDefault();
    uploadFile();
    AddJobs();
  }

  const cleardata = () => {
    setform({
      customer_email: "",
      category: "",
      sub_category: "",
      project_title: "",
      project_description: "",
      budget_type: "",
      currency: "",
      budget: "",
      max_budget: "",
      visibility: "",
      location: "",
      job_status: "",
      status: "",
      project_duration: "",
      expire_date: "",
      terms_and_condition: "",
      created_by: "",
      postcode: "",
      startdate: "",
    });
    setSelectedFile([]);
  }

  const [cate, setcate] = useState([])
  const [subcate, setsubcate] = useState([])
  const [selemail, setselemail] = useState([])


  const Jobslist = async () => {
    const response = await getAllData('master/job_category');
    setcate(response.data.master[0].data);
  }
  const selleremails = async () => {
    const response = await getAllData('admin/users');
    setselemail(response.data.users);
  }
  const removeImage = async (index) => {
    var selected = [...selectedFile];
    var uploads = [...uploadFiles];
    selected.splice(index, 1);
    uploads.splice(index, 1);
    setSelectedFile(selected);
    setUploadFile(uploads);
  }
  useEffect(() => {
    Jobslist()
    selleremails()
  }, [])

  return (
    <>
      <Form onSubmit={(e) => { formsubmit(e) }}>
        <Row className=" font-sans-serif">
          {/* Header */}
          <Col lg={12} className='mb-5' >
            <NavbarStandard />
          </Col>

          {/* Header */}

          {/* <Col lg={12} className='mt-5 ms-3 me-3'> */}

          {/* Note */}

          <Container>
            <Card className="mt-5">
              <Card.Header as="h4" className='bg-light text-justify text-uppercase'>Note</Card.Header>
              <Card.Body className="">
                {/* <Row>
                  <Col xl={12}> */}
                <ul>
                  <li style={{ fontSize: '14px', width: '100%' }}>
                    Describe your project in as much detail as you can comfortably reveal
                    - it will increase the quality
                    of proposals you receive and shorten
                    the selection process.
                  </li>
                  <li style={{ fontSize: '14px', width: '100%' }}>
                    Upload as much relevant
                    information (pictures,
                    documents, specifications, links, etc)
                    as possible to get a realistic quote.
                  </li>
                  <li style={{ fontSize: '14px', width: '100%' }}>
                    Match the experience level to your requirements
                    - remember,you're looking for the best you can
                    afford, not the cheapest you can get.
                  </li>
                  <li style={{ fontSize: '14px', width: '100%' }}>
                    For more helpful tips, see our guide Post a project
                  </li>
                </ul>
                {/* </Col>
                </Row> */}
              </Card.Body>
            </Card>

            {/* Note */}

            {/* Post A Project */}
            <Card className="mb-3 mt-3">
              <Card.Header as="h4" className='bg-light text-uppercase text-justify '>Post A Project</Card.Header>
              <Card.Body className="bg-white">
                <Row className="gx-2 gy-3">
                  <p className='mt-2 me-2 fw-semibold' style={{ fontSize: '14px' }}>Select a relevant category so that freelancers can find your project</p>

                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 text-capitalize'>
                        category <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select value={form.category}
                        required
                        name="category"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select </option>
                        {cate.map((data) => (
                          <option value={data.category}>{data.category}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 text-capitalize'>
                        sub-category <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        required
                        value={form.sub_category}
                        name="sub_category"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select</option>
                        {subcate.map((data) => (
                          <option value={data.value}>{data.value}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={12} className='me-2 '>
                    <Form.Group controlId="courseTitle">
                      <Form.Label className='text-700 text-capitalize'>
                        project title <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={form.project_title}
                        required
                        name="project_title"
                        onChange={(e) => { handleChange(e) }}
                        id="usr-prj-tit"
                        placeholder="e.g I Want to Make a New Kitchen"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className='me-2'>
                    <Form.Group className="mb-3">
                      <Form.Label className='text-700 text-capitalize'>Project Description <span className="text-danger">*</span> </Form.Label>
                      <Form.Control
                        as="textarea"
                        value={form.project_description}
                        required
                        name="project_description"
                        onChange={(e) => { handleChange(e) }}
                        placeholder="Need a Fabricator who's Specialize in this field"
                        rows={8} />
                      <p className='mt-2' style={{ fontSize: '12px' }}>Be Descriptive,Projects with good descriptions are more popular with our freelancers</p>
                    </Form.Group>
                  </Col>
                  {/* Upload Samples */}
                  <Col lg={12} className='me-2 w-100'>
                    <div >
                      <Form.Label className='text-700 text-capitalize'>
                        Upload Sample and Other Helpful (Optional)
                        <OverlayTrigger
                          overlay={<Tooltip id="coverPphotoTooltip">Add cover photo</Tooltip>}
                        >
                          <span className="ms-2 text-primary fs-0">
                            <FontAwesomeIcon icon="info-circle" />
                          </span>
                        </OverlayTrigger>
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
                            </div>
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
                          </div>
                        </div>
                      )}

                    </div>
                  </Col>
                  {/* Upload Samples */}
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 text-capitalize'>
                        Budget Type <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        value={form.budget_type}
                        required
                        name="budget_type"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select</option>
                        <option value="Fixed Price">Fixed Price   :</option>
                        <option value="No Idea">No Idea</option>
                        <option value="No Range">No Range</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 text-capitalize'>
                        Currency <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        value={form.currency}
                        required
                        name="currency"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select</option>
                        <option value="£ GBP">£ GBP :</option>
                        <option value="£ EUR">£ EUR</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 text-capitalize'>
                        Budget <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.budget}
                        required
                        name="budget"
                        onChange={(e) => { handleChange(e) }}

                        placeholder="£ 0"
                        type="number"
                      />
                      <div className='row'>
                        <div className="col">
                          {form.budget_type == "No Idea" ? (
                            <>
                            <Form.Group className='mt-2'>
                              <Form.Label>Max Budget</Form.Label>
                              <Form.Control className='d-block' value={form.max_budget} required name="max_budget" onChange={(e) => { handleChange(e) }} placeholder="£ 0" type="number" />
                            </Form.Group>
                            </>
                          ) : ("")}
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg={12} className=''>
                    <Form.Group className="mb-3">
                      <Form.Label className='text-700 text-capitalize'>Project Location <span className="text-danger">*</span> </Form.Label>
                      <Form.Control
                        value={form.location}
                        required
                        name="location"
                        onChange={(e) => { handleChange(e) }}
                        id="aipro-barcode-1"
                        placeholder="Geo Locations" type='text'
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 text-capitalize'>
                        Post Code <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.postcode}
                        required
                        name="postcode"
                        onChange={(e) => { handleChange(e) }}

                        type='text'
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 text-capitalize'>
                        Starting Date (Optional)<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.startdate}
                        required
                        name="startdate"
                        onChange={(e) => { handleChange(e) }}

                        type='date'
                      />
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <Form.Group className='mb-3 mt-2'>
                      <Form.Label className='text-700 d-block text-capitalize'>
                        Project Visibility <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Check
                        type='radio'
                        id="radio-btn"
                        onChange={(e) => { handleChange(e) }}
                        name="visibility"
                        value="public"
                        className='d-inline-block'
                      >
                        <Form.Check.Input name="visibility" type="radio" />
                        <Form.Check.Label
                          style={{ fontSize: '14px' }}
                        >
                          <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                    <Form.Group className=''>
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
                          <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only freelancers that you specifically invite can view the
                            <p className="opt-span">project post and send proposal)</p></span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700  text-capitalize'>
                        Project Duration Time <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.project_duration}
                        required
                        name="project_duration"
                        onChange={(e) => { handleChange(e) }}
                        type='text'
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-700  text-capitalize'>
                        Expiry Date <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.expire_date}
                        required
                        name="expire_date"
                        onChange={(e) => { handleChange(e) }}
                        type='date'
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className=''>
                    <div className='d-flex justify-content-start'>
                      <Button
                        type="submit"
                        className='d-block border-0 bg-success'
                      >Post Project</Button>
                      <Link to="/joblist">
                        <Button className='d-block ms-3 border-0 bg-danger'>Cancel</Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card >
            {/* Post A Project */}
            {/* </Col> */}
          </Container>
        </Row>
      </Form >
    </>
  );
};


export default PostProject;
