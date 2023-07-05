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
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import ProductsFilters from "./ProductsFilter";
import { getAllData } from "../../../../Services/ProxyService";
import SimpleBarReact from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slugifyText } from "../../../TemplateAssets/helpers/utils";
import Footer from "../../Footer/Footer";

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
    // 
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    // 
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToWishlist = () => {
        setIsAdded(true);
        const toastDanger = () => toast.success(<h6 className="text-sucess">Product Added to Wishlist</h6>);

        toastDanger();
    };

    const handleRemoveFromWishlist = () => {
        setIsAdded(false);
        const toastDanger1 = () => toast.error(<h6 className="text-dark">Product Removed from Wishlist</h6>)
        toastDanger1();
    };


    return (
        <>
            <Row>
                <Col lg={12} className='mb-5'>
                    <NavbarStandard />
                </Col>
                <Container>
                    <Row>
                        <Col className='mb-3' lg={3}>
                            <div className="course-details-sticky-sidebar">
                                <Card className=" mt-5">
                                    <Card.Body>
                                        <Form.Check
                                            type="checkbox"
                                            className="form-check d-flex ps-0"
                                        >
                                            <Form.Check.Label
                                                className="fs--1 flex-1 text-truncate"
                                            >
                                                Offers
                                            </Form.Check.Label>

                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                        </Form.Check>
                                    </Card.Body>
                                </Card>

                                <Card className="mt-3">
                                    {/* <SimpleBarReact style={{ height: '100%' }}> */}
                                    <Card.Header as={Flex} className="flex-between-center bg-light pt-x1">
                                        {/* <Flex className="gap-2 flex-xl-grow-1 align-items-center justify-content-xl-between"> */}
                                        <div className='justify-content-xl-between d-flex m-2'>
                                            <h4 className="mb-0 text-900 fs-0 d-flex align-items-center">
                                                <FontAwesomeIcon icon="filter" className="ms-2 me-1" />
                                                Filter
                                            </h4>
                                            <div>
                                                <button
                                                    onClick={() => resetFilter()}
                                                    className="btn btn-sm btn-outline-secondary">Reset
                                                </button>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="py-0 mt-2">

                                        <Flex wrap="wrap" className=" mb-2">
                                            {filterList?.map((x, i) => {
                                                return <span key={`filter_${i}`} onClick={() => removeFilter(i)} className='badge m-1 bg-secondary text-white'>{x} <Icon icon="ic:sharp-close" color="white" width="14" height="14" /></span>
                                            })}
                                        </Flex>

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
                                    {/* </SimpleBarReact> */}
                                </Card>
                            </div>
                        </Col>
                        <Col className='mb-3' lg={9}>
                            <div className="card mt-5 mb-3">
                                <div className="card-header bg-light position-relative">
                                    <h1 className="mb-0 fs-2 mt-1">Products</h1>
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
                                                        <div className="col-auto d-none d-lg-block"><span className="fw-semi-bold">Sort by</span></div>
                                                        <div className="col-auto me-2">
                                                            <select className="cursor-pointer form-select form-select-sm" aria-label="Bulk actions">
                                                                <option>Recently uploaded</option>
                                                                <option>Recommended</option>
                                                                <option>New to Old</option>
                                                                <option>Old to New</option>
                                                                <option>Price High to Low</option>
                                                                <option>Low to High</option>
                                                                <option>A to Z</option>
                                                                <option>Z to A</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="d-flex align-items-center"><span className="fw-semi-bold me-2 d-none d-md-block lh-1">View</span>
                                                        <div onClick={() => { setIsList(false) }}
                                                            className={`d-none d-md-block ${layout === 'grid' ? 'text-700' : 'text-400 hover-700'
                                                                }`}
                                                        >
                                                            <Icon className="cursor-pointer ms-1" icon="material-symbols:grid-on-sharp" width="24" height="24" />
                                                        </div>
                                                        <div onClick={() => { setIsList(true) }}
                                                            className={`d-none d-md-block me-2 ${layout === 'list' ? 'text-700' : 'text-400 hover-700'
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
                            {isList == false ?
                                <>
                                    <div className="row mt-1 mb-3 g-3">
                                        {products.map((data, key) => (
                                            <article className="col-md-6 col-lg-6 col-xl-4">
                                                <div className="card h-100 overflow-hidden">
                                                    <div className="card-body p-0 d-flex flex-column justify-content-between">
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
                                                                <h2 class="mt-3 mb-3 mt-sm-0 fs-0 fs-lg-1">
                                                                    <Link className="product-name text-uppercase text-900" to={`productdetails/${data._id}`}>
                                                                        {data?.name}
                                                                    </Link>
                                                                </h2>
                                                                <h3 className="fs-0 mt-2 mb-3 ">
                                                                    {data?.type?.name}
                                                                </h3>
                                                                <div style={{ fontSize: '12px' }} className=" mb-2 text-700">
                                                                    <span className="fw-bold me-1">SKU :</span>
                                                                    <span className="fw-semibold">
                                                                        HOBCRT - 700480
                                                                    </span>
                                                                </div>
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
                                                                <h4 className="fs-1 text-warning d-flex align-items-center"><span>£ {data?.variant[0]?.pricing?.price}</span><del className="ms-2 fs--1 fw-bold text-900">£ {data?.variant[0]?.pricing?.compare_at}</del></h4>
                                                                <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                <Link to="/p/enquiry">
                                                                    <Button
                                                                        size="md"
                                                                        style={{ background: '#003f6b' }}
                                                                        className="fs--1 Home-btns-1 border-0 border-0 text-600 mt-3 text-white"

                                                                    >
                                                                        Get a Quote
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            <div className="col-auto pe-3">
                                                                <>
                                                                    {isAdded ? (
                                                                        <a
                                                                            onClick={handleRemoveFromWishlist}
                                                                            className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                            href="#!"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-placement="top"
                                                                            aria-label="Remove from Wishlist"
                                                                            data-bs-original-title="Remove from Wishlist"
                                                                        >
                                                                            <Icon
                                                                                style={{ marginTop: '-5px' }}
                                                                                className="me-1"
                                                                                icon="icon-park-solid:like"
                                                                                color="#df2020"
                                                                                width="20"
                                                                                height="20"
                                                                            />
                                                                        </a>
                                                                    ) : (
                                                                        <a
                                                                            onClick={handleAddToWishlist}
                                                                            className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                            href="#!"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-placement="top"
                                                                            aria-label="Add to Wishlist"
                                                                            data-bs-original-title="Add to Wishlist"
                                                                        >
                                                                            <Icon
                                                                                icon="icon-park-outline:like"
                                                                                className="me-1"
                                                                                style={{ marginTop: '-5px' }}
                                                                                width="20"
                                                                                height="20"
                                                                            />
                                                                        </a>
                                                                    )}
                                                                </>
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
                                            <article class="card mb-3 overflow-hidden">
                                                <div class="card-body p-0">
                                                    <div class="row g-0">

                                                        <div class="col-md-4 col-lg-3">
                                                            <div class="hoverbox h-md-100"><a class="text-decoration-none">
                                                                <Link to={`productdetails/${data._id}`}>
                                                                    <img class="h-100 cursor-pointer w-100 fit-cover" src={data?.attachments[0]?.url} alt="" />
                                                                </Link>
                                                            </a>
                                                                <div class="hoverbox-content flex-center pe-none bg-holder overlay overlay-2">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-9 p-x1">
                                                            <div class="row g-0 h-100">
                                                                <div class="col-lg-8 col-xxl-9 d-flex flex-column pe-x1">
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h2 class="mt-3 mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="product-name text-uppercase text-900" to={`productdetails/${data._id}`}>
                                                                            {data?.name}
                                                                        </Link>
                                                                    </h2>
                                                                    <h3 className="fs-0 mt-2 mb-3 ">
                                                                        {data?.type?.name}
                                                                    </h3>
                                                                    <div style={{ fontSize: '12px' }} className=" mb-2 text-700">
                                                                        <span className="fw-bold me-1">SKU :</span>
                                                                        <span className="fw-semibold">
                                                                            HOBCRT - 700480
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-1 d-flex fw-semi-bold fs--1">
                                                                        <span class="me-1 text-900">4.9</span>
                                                                        <div>
                                                                            <span class="fa fa-star text-warning"></span>
                                                                            <span class="fa fa-star text-warning"></span>
                                                                            <span class="fa fa-star text-warning"></span>
                                                                            <span class="fa fa-star text-warning"></span>
                                                                            <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                                            <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-xxl-3 mt-4 mt-lg-0">
                                                                    <div class="h-100 rounded border-lg border-1  justify-content-between p-lg-3">
                                                                        <div class="mb-lg-4 mt-auto mt-lg-0">
                                                                            <h4 class="mb-1 lh-1 fs-2 text-warning d-flex align-items-end">£ {data?.variant[0]?.pricing?.price}<del class="ms-1 fs--1 fw-bold text-900 mb-1">£ {data?.variant[0]?.pricing?.compare_at}</del></h4>
                                                                            <p class="mb-0 fs--2 text-800">92,632 Members Purchased</p>
                                                                        </div>
                                                                        <div class="mt-3 d-flex flex-lg-column gap-2">

                                                                            <>
                                                                                {isAdded ? (
                                                                                    <button
                                                                                        className="btn btn-md btn-falcon-danger fs--1 text-600"
                                                                                        onClick={handleRemoveFromWishlist}
                                                                                    >
                                                                                        <span className="d-block">
                                                                                            <Icon
                                                                                                style={{ marginTop: '-2px' }}
                                                                                                className="me-1"
                                                                                                icon="icon-park-solid:like"
                                                                                                color="#df2020"
                                                                                                width="18"
                                                                                                height="18"
                                                                                            />
                                                                                            <span className="d-none d-lg-inline">Remove from Wishlist</span>
                                                                                        </span>
                                                                                    </button>
                                                                                ) : (
                                                                                    <button
                                                                                        className="btn btn-md btn-falcon-danger fs--1 text-600"
                                                                                        onClick={handleAddToWishlist}
                                                                                    >
                                                                                        <span className="d-block">
                                                                                            <Icon
                                                                                                icon="icon-park-outline:like"
                                                                                                className="me-1"
                                                                                                style={{ marginTop: '-2px' }}
                                                                                                width="18"
                                                                                                height="18"
                                                                                            />
                                                                                            <span className="d-none d-lg-inline">Add to Wishlist</span>
                                                                                        </span>
                                                                                    </button>
                                                                                )}
                                                                            </>
                                                                            <button onClick={toastDark} class="btn btn-md btn-primary fs--1">
                                                                                <span class="fas fa-cart-plus"></span><span class="ms-1 d-none d-lg-inline">Add to Cart</span>
                                                                            </button>
                                                                            <Link to="/p/enquiry">
                                                                                <button className="btn w-100 Home-btns-1 text-white btn-md fs--1" style={{ background: '#003f6b', border: '1px solid #003f6b' }} >
                                                                                    <span class="ms-1">Get a Quote</span>
                                                                                </button>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            {/*  */}
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

                                </>
                            }
                            {/* pagination */}
                            <div className="card mt-3">
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
                                        <div className="col-auto">
                                            <button className="btn btn-falcon-default btn-sm me-2" type="button" disabled="disabled" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Prev" data-bs-original-title="Prev">
                                                <span className="fas fa-chevron-left"></span>
                                            </button>
                                            <a className="btn btn-sm btn-falcon-default text-primary me-2" href="#!">
                                                1
                                            </a>
                                            <a className="btn btn-sm btn-falcon-default me-2" href="#!">2
                                            </a>
                                            <a className="btn btn-sm btn-falcon-default me-2" href="#!">3
                                            </a>
                                            <a className="btn btn-sm btn-falcon-default me-2" href="#!">
                                                <span className="fas fa-ellipsis-h"></span>
                                            </a>
                                            <a className="btn btn-sm btn-falcon-default me-2" href="#!">
                                                303
                                            </a>
                                            <button className="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Next" data-bs-original-title="Next">
                                                <span className="fas fa-chevron-right"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* pagination */}
                        </Col>

                    </Row>
                </Container >
                <Col lg={12}>
                    <Footer />
                </Col>
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
                className="collapse-indicator-plus w-100 fs--1 fw-semibold text-start text-700 text-decoration-none py-3 px-0"
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
