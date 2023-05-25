import { React, useEffect, useState } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    InputGroup,
    OverlayTrigger,
    Row,
    Tooltip, Collapse, Image, Container, Modal
} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Flex from '../../../TemplateAssets/common/Flex'
import image from '../../../Components/Images/Granite.png'
import { Icon } from "@iconify/react";
import ListingHeader from "./ProductsHeader";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import ProductsFilters from "./ProductsFilter";
import { getAllData } from "../../../../Services/ProxyService";
import SimpleBarReact from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slugifyText } from "../../../TemplateAssets/helpers/utils";

function ProductList() {

    const [layout, setLayout] = useState('list');
    const [isList, setIsList] = useState(true);
    const [mainList, setMainList] = useState([]);
    const [products, setProducts] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const getProductList = async () => {
        const response = await getAllData('products');
        setProducts(response.data.products);
        setMainList(response.data.products);
        setShowSpinner(false);
    }
    const getProductTags = async () => {
        const response = await getAllData('master/product_tags');
        setProductTags(response.data.master[0].data);
        // console.log(productTags);
    }
    const handleFilter = (e) => {
        var _filters = [...filterList];
        if (e.target.checked == true) {
            _filters.push(e.target.value);
        } else {
            var _inx = _filters.findIndex(x => x == e.target.value);
            _filters.splice(_inx, 1);
        }
        mainProductList(_filters);
        setFilterList(_filters);
    }
    const removeFilter = async (key) => {
        var _filters = [...filterList];
        productTags.forEach((x, i) => {
            if (x.list) {
                x.list.forEach((y, j) => {
                    if (y.value == _filters[key]) {
                        document.getElementById(`filter_${j}_key_${i}`).checked = false;
                    }
                })
            }
        })
        _filters.splice(key, 1);
        mainProductList(_filters);
        setFilterList(_filters);
    }
    const resetFilter = async () => {
        productTags.forEach((x, i) => {
            if (x.list) {
                x.list.forEach((y, j) => {
                    document.getElementById(`filter_${j}_key_${i}`).checked = false;
                })
            }
        })
        mainProductList([]);
        setFilterList([]);
    }
    const mainProductList = async (_filters) => {
        var _mainList = [...mainList];
        var _mainFilteredList = [];
        _filters.map((x) => {
            _mainList.map((y) => {
                if (y.type.name == x) {
                    _mainFilteredList.push(y);
                }
                var _clr = y.variant[0].color?.split(",");
                if (_clr) {
                    _clr.map((z) => {
                        if (z.trim() == x.trim()) {
                            _mainFilteredList.push(y);
                        }
                    })
                }
            })
        });
        if (_filters.length > 0) {
            setProducts(_mainFilteredList);
        }
        else {
            setProducts(_mainList);
        }
    }
    const mainSearch = (e) => {
        var _key = e.target.value.toLowerCase();
        var _mainList = [...mainList];
        var _mainFilterList = [];
        _mainList.map((x, i) => {
            if (x.name.toLowerCase().includes(_key) || x.description.toLowerCase().includes(_key)) {
                _mainFilterList.push(x);
            }
        })
        setProducts(_mainFilterList);
    }
    useEffect(() => {
        getProductList();
        getProductTags();
    }, [])

    // const [show, setShow] = useState(true);

    const toastDark = () => toast.success(<h6 className="text-sucess">Your Product is Successfully Added to Cart</h6>);
    const toastDanger = () => toast.success(<h6 className="text-sucess">Product Added to Wishlist</h6>);
    return (
        <>
            <Row>
                <Col lg={12} className='mb-5'>
                    <NavbarStandard />
                </Col>
                <Container>
                    <Row>
                        <Col className='mb-3' lg={3}>
                            <Card className="mt-5">
                                <SimpleBarReact style={{ height: '100%' }}>
                                    <Card.Header as={Flex} className="flex-between-center pt-x1">
                                        {/* <Flex className="gap-2 flex-xl-grow-1 align-items-center justify-content-xl-between"> */}
                                        <div className='justify-content-between d-flex m-2'>
                                            <h5 className="mb-0 text-700 fs-0 d-flex align-items-center">
                                                <FontAwesomeIcon icon="filter" className="fs--1 me-1" />
                                                <span>Filter</span>
                                            </h5>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                className=" mt-0 mb-0"
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

                                        <div className="d-flex flex-wrap mb-2">
                                            {filterList?.map((x, i) => {
                                                return <span key={`filter_${i}`} onClick={() => removeFilter(i)} className='badge m-1 bg-secondary text-white'>{x} <Icon icon="ic:sharp-close" className="cursor-pointer" color="white" width="14" height="14" /></span>
                                            })}
                                        </div>

                                        <ul className="list-unstyled mt-1">
                                            {productTags?.map((data, key) => (
                                                <FilterItem
                                                    key={slugifyText(data?.name)}
                                                    index={key}
                                                    data={data}
                                                    filterList={filterList}
                                                    setFilterList={setFilterList}
                                                    handleFilter={handleFilter}
                                                />))}
                                        </ul>
                                    </Card.Body>
                                </SimpleBarReact>
                            </Card>
                        </Col>
                        <Col className='mb-3' lg={9}>
                            <Card className="mt-5">
                                <Card.Header className="bg-light position-relative">
                                    <h4 className="text-uppercase  mb-0 mt-1">All Products</h4>
                                </Card.Header>
                                <Card.Body className="pt-0 mt-3 pt-md-3">
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
                                                    onChange={(e) => mainSearch(e)}
                                                    size="sm"
                                                    aria-label="Search"
                                                    className="rounded search-input ps-4"
                                                />
                                                <FontAwesomeIcon
                                                    icon="search"
                                                    className="fs--1  text-400 position-absolute text-400 start-0 top-50 translate-middle-y ms-2"
                                                />
                                            </Form>
                                        </Col>
                                        <Col xs="auto" className="col-md">
                                            <Row className="g-0 justify-content-end">

                                                <Col xs="auto" className="p-0">
                                                    <Row className="g-2 align-items-center">
                                                        <div className="d-flex align-items-center"><small className="fw-semi-bold me-2 d-lg-block lh-1">View:</small>
                                                            <div className="d-flex">
                                                                <div onClick={() => { setIsList(false) }}
                                                                    className={`me-3 ${layout === 'grid' ? 'text-700' : 'text-400 hover-700'
                                                                        }`}
                                                                >
                                                                    <Icon className="cursor-pointer" icon="material-symbols:grid-on-sharp" width="24" height="24" />
                                                                </div>
                                                                <div onClick={() => { setIsList(true) }}
                                                                    className={`me-2 ${layout === 'list' ? 'text-700' : 'text-400 hover-700'
                                                                        }`}
                                                                >
                                                                    <Icon className="cursor-pointer" icon="material-symbols:format-list-bulleted-rounded" width="24" height="24" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            {isList == false ?
                                <>
                                    <div className="row mt-1 mb-3 g-3">
                                        {products.map((data, key) => (
                                            <article className="col-md-6 col-lg-6 col-xl-4">
                                                <div className="card h-100 overflow-hidden">
                                                    <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                        <div>
                                                            <div>
                                                                <Link to={`productdetails/${data._id}`}>
                                                                    <div className="image-container aspect-ratio-1-1-1">
                                                                        <Image src={data?.attachments[0]?.url} fluid />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex gap-2 flex-wrap mb-3">
                                                                    <span className="badge rounded-pill badge-soft-success">
                                                                        <span>In Stock</span>
                                                                    </span>
                                                                    <span className="badge rounded-pill badge-soft-danger">
                                                                        <span>Out of Stock</span>
                                                                    </span>
                                                                </div>
                                                                <h4 className="text-uppercase fs-0 mb-2">
                                                                    <Link
                                                                        to={`productdetails/${data._id}`}
                                                                        // style={{ fontSize: '1rem' }}
                                                                        className="text-dark"
                                                                    >
                                                                        {data?.name}
                                                                    </Link>
                                                                </h4>
                                                                <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                    {data?.type?.name}
                                                                </p>
                                                                <div className="fw-semi-bold fs--1">
                                                                    <span className="me-1 text-900 me-2">4.9</span>
                                                                    <div className="d-inline-block ">
                                                                        <span className="fa fa-star text-warning"></span>
                                                                        <span className="fa fa-star text-warning"></span>
                                                                        <span className="fa fa-star text-warning"></span>
                                                                        <span className="fa fa-star text-warning"></span>
                                                                        <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                                    </div>
                                                                    <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row g-0 mb-3 align-items-end">
                                                            <div className="col ps-3">
                                                                <h4 className="fs-1 text-warning d-flex align-items-center"><span>£ {data?.variant[0]?.pricing?.price}</span><del className="ms-2 fs--1 text-700">£ {data?.variant[0]?.pricing?.compare_at}</del></h4>

                                                                <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                <Link to="/GetQuote">
                                                                    <Button
                                                                        size="md"
                                                                        variant="falcon-default"
                                                                        style={{ background: '#003f6b' }}
                                                                        className="fs--1 border-0 border-0 text-600 mt-3 text-white"

                                                                    >
                                                                        Get a Quote
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            <div className="col-auto pe-3">
                                                                {/* <Link to="/wishlist/product"> */}
                                                                <a onClick={toastDanger} className="btn btn-sm btn-falcon-default me-2 hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                    <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                </a>
                                                                {/* </Link> */}
                                                                <a onClick={toastDark} className="btn btn-sm btn-falcon-default hover-primary" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Cart" data-bs-original-title="Add to Cart">
                                                                    <span className="fas fa-cart-plus" data-fa-transform="down-2"></span>
                                                                </a>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </article>

                                        ))}
                                    </div>
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
                                        className="m-3"
                                    />
                                </> :
                                <>
                                    {products.map((data, key) => (
                                        <>
                                            <Card className="overflow-hidden mt-3">
                                                <Card.Body className="p-0">
                                                    <Row className="g-0">
                                                        <Col md={4} lg={3}>
                                                            <Link to={`productdetails/${data._id}`}>
                                                                <Image src={data?.attachments[0]?.url} alt="" className="w-100 h-100 fit-cover" />
                                                            </Link>
                                                        </Col>
                                                        <Col md={8} lg={9} className="p-x1">
                                                            <Row className="g-0 h-100">
                                                                <Col lg={8}>
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="text-900" to={`productdetails/${data._id}`}>
                                                                            {data?.name}
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                        {data?.type?.name}
                                                                    </p>
                                                                    <div className="fw-semi-bold fs--1">
                                                                        <span className="me-1 text-900 me-2">4.9</span>
                                                                        <div className="d-inline-block ">
                                                                            <span className="fa fa-star text-warning"></span>
                                                                            <span className="fa fa-star text-warning"></span>
                                                                            <span className="fa fa-star text-warning"></span>
                                                                            <span className="fa fa-star text-warning"></span>
                                                                            <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                                        </div>
                                                                        <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4} className=" mt-lg-0">

                                                                    <Flex
                                                                        justifyContent="between"
                                                                        className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                                                    >
                                                                        <div className="mb-lg-4 mt-auto mt-lg-0">
                                                                            <h3 className=" text-warning d-flex align-items-center">
                                                                                <span style={{ color: '#f68f57' }}>£ {data?.variant[0]?.pricing?.price}</span>

                                                                                <del className="ms-2 fs--1 text-700">£ {data?.variant[0]?.pricing?.compare_at}</del>
                                                                            </h3>
                                                                            <p className="mb-0 fs--1 text-800">
                                                                                92,632 Members Purchased
                                                                            </p>
                                                                        </div>
                                                                        <Flex className="mt-3 flex-lg-column gap-2">
                                                                            {/* <Link to="/wishlist/product"> */}
                                                                            <Button
                                                                                size="md"
                                                                                variant="falcon-default"
                                                                                className="fs--1 mt-3 mb-3 text-600 white-space-nowrap w-100"
                                                                                onClick={toastDanger}
                                                                            >
                                                                                <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" /> Add to Wishlist
                                                                            </Button>
                                                                            {/* </Link> */}

                                                                            {/* <Link to="/Cart"> */}
                                                                            <Button
                                                                                size="md"
                                                                                variant="primary"
                                                                                className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"
                                                                                onClick={toastDark}
                                                                            >
                                                                                <span className="fas me-1 fa-cart-plus" data-fa-transform="down-2"></span> Add to Cart
                                                                            </Button>


                                                                            <Link to="/GetQuote">
                                                                                <Button
                                                                                    size="md"
                                                                                    variant="falcon-default"
                                                                                    style={{ background: '#003f6b' }}
                                                                                    className="fs--1 border-0 text-600 text-white white-space-nowrap w-100"

                                                                                >
                                                                                    Get a Quote
                                                                                </Button>
                                                                            </Link>
                                                                        </Flex>
                                                                    </Flex>

                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>

                                                </Card.Body >
                                            </Card>
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

                                        </>
                                    ))}
                                    {/* pagination */}
                                    <Card className="mt-3">
                                        <Card.Body>
                                            <Row className="g-3 flex-center justify-content-between">
                                                <Col xs="auto" className="d-flex align-items-center">
                                                    <small className="d-none d-lg-block me-2">Show:</small>
                                                    <Form.Select
                                                        size="sm"
                                                        // value={itemsPerPage}
                                                        // onChange={({ target }) => {
                                                        //     setItemsPerPage(target.value);
                                                        //     setCoursePerPage(target.value);
                                                        // }}
                                                        style={{ maxWidth: '4.875rem' }}
                                                    >
                                                        <option >1</option>
                                                        <option >2</option>
                                                        <option >3</option>
                                                        <option >All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col xs="auto" className="d-flex">
                                                    <div>
                                                        <Button
                                                            variant="falcon-default"
                                                            className="me-2"
                                                        >
                                                            Preview
                                                        </Button>
                                                    </div>

                                                    <div>
                                                        <Button
                                                            variant="falcon-default"
                                                        >
                                                            Next
                                                        </Button>

                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    {/* pagination */}
                                </>
                            }
                        </Col>

                    </Row>
                </Container >
            </Row >
        </>
    )
} const FilterItem = ({ data, index, filterList, handleFilter }) => {
    const [open, setOpen] = useState(false);

    return (
        <li className={'border-bottom'} key={`tags_${index}`}>
            <Button
                variant="link"
                onClick={() => setOpen(!open)}
                aria-controls={`${slugifyText(data?.name)}-collapse`}
                // aria-expanded={index === 0 || index === 1 ? !open : open}
                className="collapse-indicator-plus w-100 fs--2 fw-medium text-start text-600 text-decoration-none py-3 px-0"
            >
                {data?.name}
            </Button>
            <Collapse
                // in={index === 0 || index === 1 ? !open : open}
                in={index === 4 ? !open : open}
                id={`${slugifyText(data?.name)}-collapse`}
            >
                <ul className="list-unstyled">
                    {data?.list &&
                        data?.list?.map((x, i) => {
                            return <li key={`check_${i}_${x}`}>
                                <Form.Check
                                    type="checkbox"
                                    className="form-check d-flex ps-0"
                                >
                                    <Form.Check.Label
                                        className="fs--1 flex-1 text-truncate"
                                    >
                                        {x?.value}
                                    </Form.Check.Label>

                                    <Form.Check.Input id={`filter_${i}_key_${index}`} value={x?.value} onChange={(e) => handleFilter(e)}
                                        type="checkbox"
                                        className="cursor-pointer"
                                    />
                                </Form.Check>
                            </li>
                        })
                    }
                </ul>
            </Collapse>
        </li>
    );
};

export default ProductList
