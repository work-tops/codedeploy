import { React, useState, useEffect } from 'react';
import MultiSelect from 'multiselect-react-dropdown';
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllData } from "../../../../Services/ProxyService";
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
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactPaginate from 'react-paginate';
import Flex from '../../../TemplateAssets/common/Flex';
import SimpleBarReact from 'simplebar-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Footer/Footer';
function ProjectWishlistCard(layout) {
    // 
    const toastDanger = () => toast.error(<h6 className="text-sucess">Project Removed from Wishlist</h6>);
    // 
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
    // 
    const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //         setIsVisible(scrollTop > 0);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };
    // 
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10000);

    const handleRangeChange = (event) => {
        const { name, value } = event.target;

        if (name === 'min') {
            setMinValue(value);
        } else if (name === 'max') {
            setMaxValue(value);
        }
    };
    // 
    const [selectedCounties, setSelectedCounties] = useState([]);

    const handleCountySelect = (selectedList) => {
        setSelectedCounties(selectedList);
    };

    const countyOptions = [
        { key: 'Bedfordshire', value: 'Bedfordshire' },
        { key: 'Berkshire', value: 'Berkshire' },
        { key: 'Bristol', value: 'Bristol' },
        { key: 'Buckinghamshire', value: 'Buckinghamshire' },
        { key: 'Cambridgeshire', value: 'Cambridgeshire' },
        { key: 'Cheshire', value: 'Cheshire' },
    ];
    // 



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
                                        {/*  */}
                                        <div>
                                            <Form.Label className='fs--1 fw-semibold text-start text-700 text-decoration-none mt-3 px-0'>Search County</Form.Label>
                                            <MultiSelect
                                                options={countyOptions}
                                                selectedValues={selectedCounties}
                                                onSelect={handleCountySelect}
                                                onRemove={handleCountySelect}
                                                displayValue="key"
                                                className='form-control'
                                            />
                                        </div>
                                        {/*  */}
                                        <Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Label className='fs--1 fw-semibold text-start text-700 text-decoration-none mt-3 px-0'>Range</Form.Label>
                                                {/* <p className='fw-semibold' style={{ fontSize: '14px' }}>£ 0-10,000</p>
                                                <Form.Range min={0} max={10000} onChange={(e) => priceSearch(e)} /> */}
                                                <Form>
                                                    <Form.Group controlId="rangeFilter">
                                                        <div className="d-flex justify-content-between">
                                                            <Form.Text className='fw-semibold text-900'>{`Budget: ${minValue}`}</Form.Text>

                                                        </div>
                                                        <Form.Range
                                                            type="range"
                                                            name="min"
                                                            value={minValue}
                                                            onChange={handleRangeChange}
                                                            min={0}
                                                            max={10000}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </SimpleBarReact>
                            </Card>
                        </Col>

                        <Col className='' lg={9}>
                            <div className="card mt-5 mb-3">
                                <div className="card-header bg-light position-relative">
                                    <h5 className="mb-0 mt-1">My Wishlists</h5>
                                    <div className="bg-holder d-none d-md-block bg-card">

                                    </div>

                                </div>
                                <div className="card-body pt-0 pt-md-3">
                                    <div className="row g-3 align-items-center">
                                        <div className="col-auto d-xl-none">
                                            <button className="btn btn-sm p-0 btn-link position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas" aria-controls="filterOffcanvas">
                                                {/*<svg className="svg-inline--fa fa-filter fa-w-16 fs-0 text-700" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>*/}
                                                <span className="fas fa-filter fs-0 text-700"></span>
                                            </button>
                                        </div>
                                        <div className="col">
                                            <form className="position-relative">
                                                <input className="form-control form-control-sm search-input lh-1 rounded-2 ps-4" onChange={(e) => mainSearch(e)} type="search" placeholder="Search..." aria-label="Search" />
                                                <div className="position-absolute top-50 start-0 translate-middle-y ms-2">
                                                    {/*<svg className="svg-inline--fa fa-search fa-w-16 text-400 fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>*/}
                                                    <span className="fas fa-search text-400 fs--1"></span></div>
                                            </form>
                                        </div>
                                        <div className="col position-sm-relative position-absolute top-0 end-0  me-sm-0 p-0">
                                            <div className="row g-0 g-md-3 justify-content-end">
                                                <div className="col-auto">
                                                    <form className="row gx-2">
                                                        <div className="col-auto d-none d-lg-block"><small className="fw-semi-bold">Sort by</small></div>
                                                        <div className="col-auto"> <select className="form-select form-select-sm" aria-label="Bulk actions">
                                                            <option >Recent Added</option>
                                                            <option >Price High to Low</option>
                                                            <option >Price Low to High</option>
                                                            <option >A-Z</option>
                                                            <option >Z-A</option>
                                                        </select></div>
                                                    </form>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="d-flex align-items-center"><small className="fw-semi-bold me-2 d-none d-lg-block lh-1">View</small>
                                                        <div
                                                            className={` ${layout === 'grid' ? 'text-700' : 'text-400 hover-700'
                                                                }`}
                                                        >
                                                            <Icon className="cursor-pointer" icon="material-symbols:grid-on-sharp" width="24" height="24" />
                                                        </div>
                                                        <div
                                                            className={`me-2 ${layout === 'list' ? 'text-700' : 'text-400 hover-700'
                                                                }`}
                                                        >
                                                            <Icon className="cursor-pointer" icon="material-symbols:format-list-bulleted-rounded" width="24" height="24" />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {jobs.map((data, key) => (
                                <Card className="overflow-hidden mt-3 mb-3">
                                    <Card.Body className="p-0">
                                        <Row className="g-0">
                                            <Col md={12} lg={12} className="p-x1">
                                                <Row className="g-0 h-100">
                                                    <Col lg={8}>
                                                        <div className='d-flex justify-content-start mb-3'>
                                                            <span className='badge m-1 rounded-pill p-2' style={{ background: '#d5e5fa', color: '#1c4f93' }}>{data?.category}</span>
                                                            <span className='badge m-1 rounded-pill p-2' style={{ background: '#ccf6e4', color: '#00864e' }}>{data?.sub_category}</span>

                                                        </div>

                                                        <div key={key}>
                                                            {/* <h5 className='text-primary mb-3'>{data.customer_email}</h5> */}
                                                            <Link to="/jobdetails/:jobid" role="button">
                                                                <h6 style={{ fontSize: '16px' }} className="mb-3 text-uppercase">{data.project_title}</h6>
                                                            </Link>
                                                            <p className='fifty-chars text-justify' style={{ fontSize: '14px', width: '96%' }}>{data.project_description}</p>
                                                        </div>

                                                        {/* *8-Col */}
                                                    </Col>


                                                    {/* COl-4 */}
                                                    <Col md={12} lg={4} className=" mt-lg-0">
                                                        <div key={key}>
                                                            <p className='text-justiy fw-bold' style={{ fontSize: '14px' }}><Icon icon="tabler:currency-pound" className='me-1' style={{ marginTop: '-1px' }} color="#003f6b" width="20" height="20" />
                                                                1000
                                                                <span className="ms-1 text-primary">(Fixed Price)</span>
                                                            </p>
                                                            <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" className='me-1' style={{ marginTop: '-1px' }} color="#003f6b" width="20" height="20" />{data?.location}</p>
                                                            {/* <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="material-symbols:folder-rounded" className='me-1' style={{ marginTop: '-1px' }} color="#003f6b" width="20" height="20" /> {data?.category}</p> */}
                                                            <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="mdi:clock-time-eight" color="#003f6b" className='me-1' style={{ marginTop: '-1px' }} width="20" height="20" hFlip={true} />20 to 30 days</p>
                                                            <p className='text-justiy fw-semibold' style={{ fontSize: '14px' }}><Icon icon="mdi:tag" color="#003f6b" className='me-1' style={{ marginTop: '-1px' }} width="20" height="20" hFlip={true} /> Job ID : {data?._id}</p>
                                                            {/* <Link to="/wishlist/project"> */}
                                                            <p onClick={toastDanger} className='text-justiy text-700 cursor-pointer fw-semibold' style={{ fontSize: '14px' }}>
                                                                <span>
                                                                    <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    Remove from Wishlist
                                                                </span>
                                                            </p>
                                                            {/* </Link> */}
                                                            <Button as={Link} to="/jobdetails/:jobid" className='border-0' style={{ background: '#003f6b', fontSize: '14px' }}>
                                                                VIEW JOB
                                                            </Button>
                                                            <ToastContainer
                                                                position="top-right"
                                                                autoClose={1000}
                                                                hideProgressBar={false}
                                                                newestOnTop={false}
                                                                closeOnClick
                                                                rtl={false}
                                                                pauseOnFocusLoss
                                                                draggable
                                                                pauseOnHover
                                                            />
                                                        </div>
                                                        {/* </Card.Body>
                                                        </Card> */}
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}

                            <div className="row mt-1 mb-3 g-3">
                                <article className="col-md-6 col-xxl-4">
                                    <div className="card h-100 overflow-hidden">
                                        <div className="bg-light d-flex justify-content-end position-relative card-header">
                                            <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                            <Icon onClick={toastDanger} icon="icon-park-outline:like" className="cursor-pointer me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                        </div>
                                        <div className="card-body p-0 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="p-3">
                                                    <div className='d-flex justify-content-start mb-3'>
                                                        <span className='badge m-1 rounded-pill p-2' style={{ background: '#d5e5fa', color: '#1c4f93' }}>Attic</span>
                                                        <span className='badge m-1 rounded-pill p-2' style={{ background: '#ccf6e4', color: '#00864e' }}>Worktop</span>
                                                    </div>
                                                    {/* <h5 className='text-primary mb-3'>jaganadmin@gmail.com</h5> */}
                                                    <Link to="/jobdetails/:jobid" role="button">
                                                        <h6 style={{ fontSize: '16px' }} className="mb-3 text-uppercase">Bathroom Installation</h6>
                                                    </Link>
                                                    <p className='one-twenty-chars mb-lg-0 text-justify' style={{ fontSize: '14px' }}>White Attica
                                                        Supernatural Quartz has a crisp white base featured with an intricate
                                                        veiny pattern. This quartz slab has a super sleek look in polished finish which
                                                        is more enhanced by the distinct black veins which have been manufactured to look fit
                                                        for classy modern settings. The deep dark veins create remarkable designs in your interior
                                                        spaces. It feels like a dream come true when installed in kitchens, baths, entryways, laundry
                                                        and mudrooms, as well as a variety of other spaces in both residential and commercial properties.
                                                        This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are
                                                        ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished
                                                    </p>
                                                </div>
                                                <div>
                                                    <Button as={Link} to="/jobdetails/:jobid" className='m-3 border-0' style={{ background: '#003f6b', fontSize: '14px' }}>
                                                        VIEW JOB
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-md-6 col-xxl-4">
                                    <div className="card h-100 overflow-hidden">
                                        <div className="bg-light d-flex justify-content-end position-relative card-header">
                                            <Icon onClick={toastDanger} icon="icon-park-outline:like" className="cursor-pointer me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                            <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                        </div>
                                        <div className="card-body p-0 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="p-3">
                                                    <div className='d-flex justify-content-start mb-3'>
                                                        <span className='badge m-1 rounded-pill p-2' style={{ background: '#d5e5fa', color: '#1c4f93' }}>Attic</span>
                                                        <span className='badge m-1 rounded-pill p-2' style={{ background: '#ccf6e4', color: '#00864e' }}>Worktop</span>
                                                    </div>
                                                    {/* <h5 className='text-primary mb-3'>jaganadmin@gmail.com</h5> */}
                                                    <Link to="/jobdetails/:jobid" role="button">
                                                        <h6 style={{ fontSize: '16px' }} className="mb-3 text-uppercase">Bathroom Installation</h6>
                                                    </Link>
                                                    <p className='one-twenty-chars mb-lg-0 text-justify' style={{ fontSize: '14px' }}>White Attica
                                                        Supernatural Quartz has a crisp white base featured with an intricate
                                                        veiny pattern. This quartz slab has a super sleek look in polished finish which
                                                        is more enhanced by the distinct black veins which have been manufactured to look fit
                                                        for classy modern settings. The deep dark veins create remarkable designs in your interior
                                                        spaces. It feels like a dream come true when installed in kitchens, baths, entryways, laundry
                                                        and mudrooms, as well as a variety of other spaces in both residential and commercial properties.
                                                        This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are
                                                        ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished
                                                    </p>
                                                </div>
                                                <Button as={Link} to="/jobdetails/:jobid" className='m-3 border-0' style={{ background: '#003f6b', fontSize: '14px' }}>
                                                    VIEW JOB
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                {/*  */}
                                {/* <Button
                                    variant="primary"
                                    className={`scroll-to-top ${isVisible ? 'visible' : 'invisible'}`}
                                    onClick={scrollToTop}
                                    style={{
                                        position: 'fixed',
                                        bottom: '20px',
                                        right: '20px',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        // opacity: '0.7',
                                        transition: 'opacity 0.3s'
                                    }}
                                >
                                    <FontAwesomeIcon icon={faHandPointUp} />
                                </Button> */}
                                {/*  */}
                            </div>
                            {/* pagination */}
                            <div className="card mb-3 mt-3">
                                <div className="card-body">
                                    <div className="row g-3 flex-center justify-content-md-between">
                                        <div className="col-auto">
                                            <form className="row gx-2">
                                                <div className="col-auto"><small>Show:</small></div>
                                                <div className="col-auto"> <select className="form-select form-select-sm" aria-label="Show courses">
                                                    <option selected="selected" value="9">9</option>
                                                    <option value="20">20</option>
                                                    <option value="50">50</option>
                                                </select></div>
                                            </form>
                                        </div>
                                        <div className="col-auto"> <button className="btn btn-falcon-default btn-sm me-2" type="button" disabled="disabled" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Prev" data-bs-original-title="Prev">
                                            <span className="fas fa-chevron-left"></span></button><a className="btn btn-sm btn-falcon-default text-primary me-2" href="#!">1</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">2</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">3</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">
                                                <span className="fas fa-ellipsis-h"></span></a><a className="btn btn-sm btn-falcon-default me-2" href="#!">303</a><button className="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Next" data-bs-original-title="Next">
                                                <span className="fas fa-chevron-right">  </span></button></div>
                                    </div>
                                </div>
                            </div>
                            {/* pagination */}
                        </Col>
                    </Row>
                    {/*  */}
                    {/* </div> */}
                </Container >
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default ProjectWishlistCard;