import { React, useState, useEffect } from 'react';
import ProjectListFilter from "./Filters/ProjectListFilter";
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllData } from "../../../Services/ProxyService";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    OverlayTrigger,
    Row,
    Tooltip,

} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactPaginate from 'react-paginate';
import Flex from '../../TemplateAssets/common/Flex';
import SimpleBarReact from 'simplebar-react';

function ListJobs(layout) {

    const [jobs, setJobs] = useState([]);
    const [mainList, setMainList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const Jobslist = async () => {
        const response = await getAllData('jobs/all');
        setJobs(response.data.jobs);
        setMainList(response.data.jobs);
        setShowSpinner(false);
    }
    const getCategories = async () => {
        const response = await getAllData('master/job_category');
        setCategories(response.data.master[0].data);
    }
    const getLevel = (value) => {
        if (value <= 1000) {
            return "Low";
        } else if (value > 1000 || value < 3000) {
            return "Medium";
        } else if (value > 3001) {
            return "High";
        }
    }
    const locationSearch = (e) => {
        console.log(e.target.value);
        var _key = e.target.value.toLowerCase();
        var _mainList = [...mainList];
        var _mainFilterList = [];
        _mainList.map((x, i) => {
            if (x.location.toLowerCase().includes(_key)) {
                _mainFilterList.push(x);
            }
        })

        console.log(_mainFilterList);
        setJobs(_mainFilterList);
    }
    const mainSearch = (e) => {
        var _key = e.target.value.toLowerCase();
        var _mainList = [...mainList];
        var _mainFilterList = [];
        _mainList.map((x, i) => {
            if (x.project_title.toLowerCase().includes(_key) || x.project_description.toLowerCase().includes(_key)) {
                _mainFilterList.push(x);
            }
        })
        console.log(_mainFilterList);
        setJobs(_mainFilterList);
    }
    const priceSearch = (e) => {
        console.log(e.target.value);
        var _key = e.target.value;
        var _mainList = [...mainList];
        var _mainFilterList = [];
        _mainList.map((x, i) => {
            if (x.budget > _key) {
                _mainFilterList.push(x);
            }
        })
        setJobs(_mainFilterList);
    }
    const categorySearch = (e) => {
        var _filters = [...filterList];
        if (e.target.checked == true) {
            _filters.push(e.target.value);
        } else {
            var _inx = _filters.findIndex(x => x == e.target.value);
            _filters.splice(_inx, 1);
        }
        mainCategoryFilter(_filters);
        setFilterList(_filters);
    }
    const mainCategoryFilter = (_filters) => {
        var _mainList = [...mainList];
        var _mainFilterList = [];
        _filters.map((x) => {
            _mainList.map((y) => {
                if (y.category == x) {
                    _mainFilterList.push(y);
                }
            })
        });

        if (_filters.length > 0) {
            setJobs(_mainFilterList);
        }
        else {
            setJobs(_mainList);
        }
    }
    const removeFilter = async (key) => {
        var _filters = [...filterList];
        var _inxx = categories.findIndex(x => x.category == _filters[key])
        document.getElementById(`job_check_${_inxx}`).checked = false;
        _filters.splice(key, 1);
        setJobs([...mainList]);
        setFilterList(_filters);
    }
    const resetFilter = async () => {
        categories.forEach((y, j) => {
            document.getElementById(`job_check_${j}`).checked = false;
        })
        setJobs([...mainList]);
        setFilterList([]);
    }

    useEffect(() => {
        Jobslist()
        getCategories()
    }, [])

    const [listPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = jobs.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(jobs.length / listPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }








    return (
        <>
            {/* Spinner */}
            <div style={{ height: '0px' }} className="text-center">
                {showSpinner && (
                    <div
                        className="spinner-border"
                        role="status"
                        style={{ width: '70px', height: '70px', fontSize: "20px", opacity: "0.7" }} // set the width and height here
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </div>
            {/* Spinner */}

            <Row>
                <Col lg={12} className='mb-5'>
                    <NavbarStandard />
                </Col>
                <Container>
                    {/* <div className='d-flex justify-content-around'> */}
                    <Row>
                        <Col className='' lg={3}>
                            <Card className="mt-5">
                                <SimpleBarReact style={{ height: '100%' }}>
                                    <Card.Header as={Flex} className="flex-between-center pt-x1">
                                        {/* <Flex className="gap-2 flex-xl-grow-1 align-items-center justify-content-xl-between"> */}
                                        <div className='justify-content-xl-between d-flex m-2'>
                                            <h5 className="mb-0 text-700 fs-0 d-flex align-items-center">
                                                <FontAwesomeIcon icon="filter" className="fs--1 me-1" />
                                                <span>Filter</span>
                                            </h5>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                className="ms-2 mt-0 mb-0"
                                                style={{ fontSize: '12px' }}
                                                onClick={() => resetFilter()}
                                            >
                                                <FontAwesomeIcon icon="redo-alt" className="me-1 fs--2" />
                                                Reset
                                            </Button>
                                        </div>
                                        {/* </Flex> */}
                                        {/* {isOffcanvas && (
                        <Button
                            onClick={() => setShow(false)}
                            className="btn-close text-reset"
                            size="sm"
                            variant="link"
                        ></Button>
                    )} */}
                                    </Card.Header>
                                    <Card.Body className="py-0 mt-2">

                                        <Flex wrap="wrap" className=" mb-2">
                                            {filterList?.map((x, i) => {
                                                return <span key={`filter_${i}`} onClick={() => removeFilter(i)} className='badge m-1 bg-secondary text-white'>{x} <Icon className='cursor-pointer' icon="ic:sharp-close" color="white" width="14" height="14" /></span>
                                            })}
                                        </Flex>
                                        <ul className="list-unstyled">
                                            {categories?.map((x, i) => {
                                                // return <div key={`job_check_${i}`}>
                                                //             <input type='checkbox' id={`job_check_${i}`} value={x?.category} onChange={(e) => categorySearch(e)} />{x?.category}
                                                //             <br></br>
                                                //         </div>

                                                return <li key={`job_check_${i}`}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        className="form-check d-flex ps-0"
                                                    >
                                                        <Form.Check.Label
                                                            className="fs--1 flex-1 text-truncate"
                                                        >
                                                            {x?.category}
                                                        </Form.Check.Label>

                                                        <Form.Check.Input id={`job_check_${i}`} value={x?.category} onChange={(e) => categorySearch(e)}
                                                            type={'checkbox'}
                                                            className='cursor-pointer'
                                                        />
                                                    </Form.Check>
                                                </li>
                                            })}
                                        </ul>
                                        <Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Label className='text-600' style={{ fontWeight: '500', fontSize: '.6944444444rem' }}>Search By Geo Locations</Form.Label>
                                                <Form.Control placeholder='Geo Locations' onChange={(e) => locationSearch(e)} type='search' />
                                            </Form.Group>
                                        </Form>
                                        <Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Label className='text-600' style={{ fontWeight: '500', fontSize: '.6944444444rem' }}>Range</Form.Label>
                                                <p className='fw-semibold' style={{ fontSize: '14px' }}>£ 0-10,000</p>
                                                <Form.Range min={0} max={10000} onChange={(e) => priceSearch(e)} />
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </SimpleBarReact>
                            </Card>
                        </Col>

                        <Col className='' lg={9}>
                            <Card className="mt-5">
                                <Card.Header className="bg-light position-relative">
                                    <h4 className="mb-0 text-uppercase">Project Lists</h4>
                                </Card.Header>
                                <Card.Body className="pt-0 pt-md-3">
                                    <Row className="g-3 align-items-center">
                                        <Col xs="auto" className="d-xl-none">
                                            <Button
                                                className="position-relative p-0"
                                                size="sm"
                                                variant="link"
                                            >
                                                <FontAwesomeIcon icon="filter" className="fs-0 text-700" />
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Form className="position-relative">
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Search..."
                                                    size="sm"
                                                    onChange={(e) => mainSearch(e)}
                                                    aria-label="Search"
                                                    className="rounded search-input ps-4"
                                                />
                                                <FontAwesomeIcon
                                                    icon="search"
                                                    className="fs--1 text-400 position-absolute text-400 start-0 top-50 translate-middle-y ms-2"
                                                />
                                            </Form>
                                        </Col>
                                        <Col xs="auto" className="col-md">
                                            <Row className="g-0 justify-content-end">
                                                <Col xs="auto" className="p-0">
                                                    <Row className="g-2 align-items-center">
                                                        <Col xs="auto" className="d-none d-lg-block">
                                                            <small className='me-2'>View :</small>
                                                        </Col>
                                                        <Col xs="auto">
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={<Tooltip>Course Grid</Tooltip>}
                                                            >
                                                                <Link
                                                                    to="#"
                                                                    className={`me-3 ${layout === 'grid' ? 'text-700' : 'text-400 hover-700'
                                                                        }`}
                                                                >
                                                                    <Icon icon="material-symbols:grid-on-sharp" width="24" height="24" />
                                                                </Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={<Tooltip>Course List</Tooltip>}
                                                            >
                                                                <Link
                                                                    to="#"
                                                                    className={`me-2 ${layout === 'list' ? 'text-700' : 'text-400 hover-700'
                                                                        }`}
                                                                >
                                                                    <Icon icon="material-symbols:format-list-bulleted-rounded" width="24" height="24" />
                                                                </Link>
                                                            </OverlayTrigger>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            {/*  */}
                            {jobs.map((data, key) => (
                                <Card className="overflow-hidden mt-3 mb-3">
                                    <Card.Body className="p-0">
                                        <Row className="g-0">
                                            <Col md={8} lg={12} className="p-x1">
                                                <Row className="g-0 h-100">
                                                    <Col lg={8}>
                                                        <div className='d-flex justify-content-start mb-3'>
                                                            <span className='badge m-1 rounded-pill p-2' style={{ background: '#d5e5fa', color: '#1c4f93' }}>{data?.category}</span>
                                                            <span className='badge m-1 rounded-pill p-2' style={{ background: '#ccf6e4', color: '#00864e' }}>{data?.sub_category}</span>
                                                            {/* <span className='badge m-1 rounded-pill p-2' style={{ background: '#fde6d8', color: '#9d5228' }}>Kitchen Worktops with Island</span> */}
                                                        </div>

                                                        <div key={key}>
                                                            <h5 className='text-primary mb-3'>{data.customer_email}</h5>
                                                            <h6 className='text-900 mb-3'>{data.project_title}</h6>
                                                            <p className='text-justify' style={{ fontSize: '14px', width: '96%' }}>{data.project_description}</p>
                                                        </div>

                                                        {/* *8-Col */}
                                                    </Col>


                                                    {/* COl-4 */}
                                                    <Col lg={4} className=" mt-lg-0">
                                                        <Card className=''>
                                                            <Card.Body>
                                                                <div key={key}>
                                                                    <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="tabler:currency-pound" className='me-1' style={{ marginTop: '-1px' }} color="#003f6b" width="20" height="20" />{getLevel(data?.budget)}Level</p>
                                                                    <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" className='me-1' style={{ marginTop: '-1px' }} color="#003f6b" width="20" height="20" />{data?.location}</p>
                                                                    <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="material-symbols:folder-rounded" className='me-1' style={{ marginTop: '-1px' }} color="#003f6b" width="20" height="20" /> {data?.category}</p>
                                                                    <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="mdi:clock-time-eight" color="#003f6b" className='me-1' style={{ marginTop: '-1px' }} width="20" height="20" hFlip={true} />20 to 30 days</p>
                                                                    <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="mdi:tag" color="#003f6b" className='me-1' style={{ marginTop: '-1px' }} width="20" height="20" hFlip={true} /> Job ID : {data?._id}</p>
                                                                    <Link to="/wishlist/project">
                                                                    <p className='text-justiy text-700 cursor-pointer fw-semibold' style={{ fontSize: '14px' }}><Icon icon="flat-color-icons:like" className='me-1' style={{ marginTop: '-5px' }} color="#003f6b" width="20" height="20" hFlip={true} /> Click to Save</p>
                                                                    </Link>
                                                                    <Link to={`jobdetails/${data._id}`} role="button">
                                                                        <Button className='border-0' style={{ background: '#003f6b', fontSize: '14px' }}>
                                                                            VIEW JOB
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}

                        </Col>
                    </Row>
                    {/* </div> */}
                </Container>
            </Row>
        </>
    )
}
export default ListJobs;